import { useState } from 'react';

export default function useToggle (initialVal = false) {
    const [value, setValue] = useState(initialVal);
    const updateToggle = () => {
        setValue((value) => !value)
    };

    return [value, updateToggle]
}