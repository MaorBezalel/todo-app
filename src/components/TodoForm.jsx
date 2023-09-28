import { useRef } from "react";

export default function TodoForm({children, inputRef, pushHead}) {
    const handleNewTodoItem = (e) => {
        e.preventDefault();
        const newTodoText = inputRef.current.value;

        if (newTodoText.trim() === '') {
            inputRef.current.placeholder = "Please enter your task...";
            inputRef.current.classList.add('placeholder:!text-red-500');
            return;
        }

        pushHead({
            text: newTodoText,
            isCompleted: false,
        });

        inputRef.current.value = '';
        inputRef.current.placeholder = "Create a new todo...";
        inputRef.current.classList.remove('placeholder:!text-red-500');
    }

    return (
        <main className="desktop-first-container">
            <form className="shadow-2xl flex flex-col" onSubmit={handleNewTodoItem}>
                {children}
            </form>
        </main>
    );
}