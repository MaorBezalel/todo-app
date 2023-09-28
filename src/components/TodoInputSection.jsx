import iconUncheckedLight from "../assets/icons/icon-unchecked-light.svg";
import iconUncheckedDark from "../assets/icons/icon-unchecked-dark.svg";

export default function TodoInputSection({inputRef, isThemeDark}) {
    return (
        <section className="shadow-2xl mb-5 flex flex-row justify-center items-center w-full h-16 px-5 bg-neutral-light-veryLightGray dark:bg-neutral-dark-veryDarkDesaturatedBlue rounded-md">
            <img src={isThemeDark ? iconUncheckedDark : iconUncheckedLight} alt="Check Icon"/>
            <input className="caret-primary-brightBlue w-full px-5 text-lg text-neutral-light-veryDarkGrayishBlue dark:text-neutral-dark-lightGrayishBlue placeholder:text-neutral-light-darkGrayishBlue dark:placeholder:text-neutral-dark-darkGrayishBlue bg-transparent border-none outline-none" type="text" ref={inputRef} placeholder="Create a new todo..."/>
        </section>
    );
}