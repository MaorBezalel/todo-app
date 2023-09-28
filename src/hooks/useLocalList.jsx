import { useList, useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

const useLocalList = (key, defaultList) => {
    const [list, original] = useList([]);
    const [storedList, setStoredList] = useLocalStorage(key, defaultList);

    useEffect(() => {
        original.set(storedList);
        console.log("useLocalList: initial load");
    }, []);

    useEffect(() => {
        setStoredList(list);
        console.log("useLocalList: list changed");
    }, [list, original.set, original.push, original.removeAt, original.insertAt, original.updateAt, original.clear]);

    const set = (newList) => {
        original.set(newList);
    }

    const push = (newItem) => {
        original.push(newItem);
    }

    const removeAt = (index) => {
        original.removeAt(index);
    }

    const insertAt = (index, newItem) => {
        original.insertAt(index, newItem);
    }

    const updateAt = (index, newItem) => {
        original.updateAt(index, newItem);
    }

    const clear = () => {
        original.clear();
    }

    const pushHead = (newItem) => {
        original.insertAt(0, newItem);
    }

    return [storedList, { set, push, pushHead, removeAt, insertAt, updateAt, clear }];
}

export default useLocalList;