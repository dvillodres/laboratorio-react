import {useState} from 'react';

export const useLocalStorage = (key :string, initValue :any)  => {
    const [localStorageValue, setlocalSotarageValue] = useState<any>(() => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initValue;
        } catch (e) {
            return initValue;
        }
    });

    const setValue = (key, value) => {
        try {
            setlocalSotarageValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(e);
        }
    }

    return [localStorageValue, setValue];
}
