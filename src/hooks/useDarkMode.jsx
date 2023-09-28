import { useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";

export default function useDarkMode(initialValue) {
    const [enabled, setEnabled] = useLocalStorage('dark-theme', initialValue);

    useEffect(() => {
        const root = window.document.documentElement;
        if (enabled) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [enabled]);

    return [enabled, setEnabled];
}