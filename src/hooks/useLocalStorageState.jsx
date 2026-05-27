import { useState, useEffect } from 'react';

function useLocalStorageState (key, inititalVal) {
    //make state based off local storage or provided initial/default val
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(inititalVal));
        }
        catch (e) {
            console.log(e);
            val = inititalVal;
        }
        return val;
    });
    // update local storage on state change
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state), [state]);
    });

    return [state, setState];
}

export default useLocalStorageState;