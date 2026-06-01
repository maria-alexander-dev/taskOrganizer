import { useReducer, useEffect } from 'react';

function useLocalStorageReducer (key, inititalVal, reducer) {
    //make state based off local storage or provided initial/default val
    const [state, dispatch] = useReducer(reducer, inititalVal, () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(inititalVal));
        }
        catch (e) {
            console.log(e);
            val = inititalVal;
        }
        return val;
    })
    // update local storage on state change
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state), [state]);
    });

    return [state, dispatch];
}

export default useLocalStorageReducer;