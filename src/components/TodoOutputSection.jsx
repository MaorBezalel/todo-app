import { useMemo } from 'react';

import {
    DndContext,
    closestCenter,
} from '@dnd-kit/core';

import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import TodoItem from './TodoItem';

export default function TodoOutputSection({todoList, whatItemsToDisplay, replaceListWith, updateItemAt, removeItemAt, isThemeDark}) {
    const [todoListIds, activeItemsIds, completedItemsIds] = useMemo(() => {
        const todoListIds = [];
        const activeItemsIds = [];
        const completedItemsIds = [];
        todoList.forEach((item, index) => {
            if (item.isCompleted) {
                completedItemsIds.push(index.toString());
            } else {
                activeItemsIds.push(index.toString());
            }
            todoListIds.push(index.toString());
        });
        return [todoListIds, activeItemsIds, completedItemsIds];
    }, [todoList]);

    const itemsToDisplay = () => {
        switch (whatItemsToDisplay) {
            case 'all':
                return todoListIds;
            case 'active':
                return activeItemsIds;
            case 'completed':
                return completedItemsIds;
            default:
                return todoListIds;
        }
    }

    const handleDragEnd = (e) => {
        const {active, over} = e;
        if (active.id !== over.id) {
            replaceListWith(arrayMove(todoList, active.id, over.id));
        }
    }

    return (
        <section className="shadow-xl">
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={itemsToDisplay()} strategy={verticalListSortingStrategy}>
                    <ul>
                        {
                            itemsToDisplay().map((itemId) => (
                                <TodoItem 
                                    key={itemId} 
                                    todoList={todoList}
                                    item={todoList[itemId]}
                                    index={Number(itemId)} 
                                    updateItemAt={updateItemAt} 
                                    removeItemAt={removeItemAt} 
                                    isThemeDark={isThemeDark}
                                />
                            ))
                        }
                    </ul>
                </SortableContext>
            </DndContext>
        </section>
    );

    
}