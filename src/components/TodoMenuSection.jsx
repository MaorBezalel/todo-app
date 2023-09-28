import { useMemo } from 'react';

export default function TodoMenuSection({todoList, replaceListWith, whatItemsToDisplay, setWhatItemsToDisplay, isScreenSmall}) {
    const activeItemsCount = useMemo(() => todoList.filter(item => !item.isCompleted).length, [todoList]);

    const handleDisplayAll = (e) => {
        setWhatItemsToDisplay('all');
    }

    const handleDisplayActive = (e) => {
        setWhatItemsToDisplay('active');
    }

    const handleDisplayCompleted = (e) => {
        setWhatItemsToDisplay('completed');
    }

    const handleClearAllCompleted = (e) => {
        replaceListWith(todoList.filter(item => !item.isCompleted));
    }

    const desktopJSX = (
        <section className="flex flex-row justify-between items-center w-full h-14 px-5 bg-neutral-light-veryLightGray dark:bg-neutral-dark-veryDarkDesaturatedBlue rounded-sm">
            <span className="text-sm font-normal text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue">{whatItemsToDisplay === 'completed' ? 0 : activeItemsCount} items left</span>
            <menu className="flex flex-row justify-center items-center gap-5">
                <li><button className="transition-all ease-in-out text-sm font-bold text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-base hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" style={whatItemsToDisplay === 'all' ? {color:'hsl(220 98% 61%'} : {}} type="button" onClick={handleDisplayAll}>All</button></li>
                <li><button className="transition-all ease-in-out text-sm font-bold text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-base hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" style={whatItemsToDisplay === 'active' ? {color:'hsl(220 98% 61%'} : {}} type="button" onClick={handleDisplayActive}>Active</button></li>
                <li><button className="transition-all ease-in-out text-sm font-bold text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-base hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" style={whatItemsToDisplay === 'completed' ? {color:'hsl(220 98% 61%'} : {}} type="button" onClick={handleDisplayCompleted}>Completed</button></li>
            </menu>
            <button className="transition-all ease-in-out text-sm text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-base hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" type="button" onClick={handleClearAllCompleted}>Clear Completed</button>
        </section>
    );

    const mobileJSX = (
        <section className="flex flex-col justify-between items-center w-full">
            <div className="mb-5 flex flex-row justify-between items-center w-full h-14 px-5 bg-neutral-light-veryLightGray dark:bg-neutral-dark-veryDarkDesaturatedBlue rounded-sm">
                <span className="text-sm font-normal text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue">{whatItemsToDisplay === 'completed' ? 0 : activeItemsCount} items left</span>
                <button className="transition-all ease-in-out text-sm text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-base hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" type="button" onClick={handleClearAllCompleted}>Clear Completed</button>
            </div>
            <menu className="flex flex-row justify-center items-center gap-5 w-full h-14 px-5 bg-neutral-light-veryLightGray dark:bg-neutral-dark-veryDarkDesaturatedBlue rounded-sm">
                    <li><button className="transition-all ease-in-out text-base font-bold text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-lg hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" style={whatItemsToDisplay === 'all' ? {color:'hsl(220 98% 61%'} : {}} type="button" onClick={handleDisplayAll}>All</button></li>
                    <li><button className="transition-all ease-in-out text-base font-bold text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-lg hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" style={whatItemsToDisplay === 'active' ? {color:'hsl(220 98% 61%'} : {}} type="button" onClick={handleDisplayActive}>Active</button></li>
                    <li><button className="transition-all ease-in-out text-base font-bold text-neutral-light-darkGrayishBlue dark:text-neutral-dark-veryDarkGrayishBlue hover:text-lg hover:text-neutral-light-veryDarkGrayishBlue dark:hover:text-neutral-dark-lightGrayishBlueHover" style={whatItemsToDisplay === 'completed' ? {color:'hsl(220 98% 61%'} : {}} type="button" onClick={handleDisplayCompleted}>Completed</button></li>
            </menu>
        </section>
    );

    return isScreenSmall ? mobileJSX : desktopJSX;
}