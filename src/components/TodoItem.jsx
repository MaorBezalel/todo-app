import { CSS } from "@dnd-kit/utilities" // For creating styles for the draggable element (changes its transform property)

import { useSortable } from "@dnd-kit/sortable" // For making the element draggable
import { useHover } from "@uidotdev/usehooks"; 
import { useState } from "react";

import iconChecked from "../assets/icons/icon-checked.svg";
import iconUncheckedLight from "../assets/icons/icon-unchecked-light.svg";
import iconUncheckedDark from "../assets/icons/icon-unchecked-dark.svg";
import iconUncheckedHover from "../assets/icons/icon-unchecked-hover.svg";
import iconDelete from "../assets/icons/icon-cross.svg";

export default function TodoItem({item, index, updateItemAt, removeItemAt, isThemeDark}) {
    const [hoverRef, isHovered] = useHover();
    const [isDisabled, setIsDisabled] = useState(false);
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: index.toString(), 
        disabled: isDisabled,
        animateLayoutChanges: () => false,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        touchAction: 'none',
        position: 'relative',
        transition,
    };

    const handleCheckboxClick = () => {
        updateItemAt(index, { ...item, isCompleted: !item.isCompleted });
    }

    const handleItemRemoval = () => {
        console.log("handleItemRemoval called on index", index, "with item", item);
        removeItemAt(index);    
    }

    const handleButtonMouseEnter = () => {
        setIsDisabled(true);
    }

    const handleButtonMouseLeave = () => {
        setIsDisabled(false);
    }

    const handleDrag = (e) => {
        e.target.style.zIndex = 1;
        e.target.classList.add('item-shadow');
    }

    const handleDrop = (e) => {
        e.target.style.zIndex = 0;
        e.target.classList.remove('item-shadow');
    }

    const handleDragOnText = (e) => {
        e.target.parentElement.style.zIndex = 1;
        e.target.parentElement.classList.add('item-shadow');
    }

    const handleDropOnText = (e) => {
        e.target.parentElement.style.zIndex = 0;
        e.target.parentElement.classList.remove('item-shadow');
    }
    
    return (
        <li className="group flex flex-row justify-center items-center w-full h-16 mobileBig:h-14 mobileSmall:h-13 px-5 bg-neutral-light-veryLightGray dark:bg-neutral-dark-veryDarkDesaturatedBlue rounded-sm border-b border-b-neutral-light-lightGrayishBlue dark:border-b-neutral-dark-veryDarkGrayishBlueHover" ref={setNodeRef} style={style} {...attributes} {...listeners} onMouseDown={handleDrag} onMouseUp={handleDrop}>
            <button ref={hoverRef} type="button" onClick={handleCheckboxClick} onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave}>
                <img className="min-w-fit" src={item.isCompleted ? iconChecked : isHovered ? iconUncheckedHover : isThemeDark ? iconUncheckedDark : iconUncheckedLight} alt="Check Icon"/>
            </button>

            <p className="w-full px-5 text-lg text-neutral-light-veryDarkGrayishBlue dark:text-neutral-dark-lightGrayishBlue border-none outline-none" style={item.isCompleted ? {textDecorationLine: 'line-through', color: isThemeDark ? '#404459' : '#d2d3db'} : {}} onMouseDown={handleDragOnText} onMouseUp={handleDropOnText}>{item.text}</p>

            <button className="invisible group-hover:visible" type="button" onClick={handleItemRemoval} onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave}>
                <img src={iconDelete} alt="Delete Cross Icon"/>
            </button>
        </li>
    );
}