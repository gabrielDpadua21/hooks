import { useState } from 'react';

export const useCounter = ( initalValue = 100 ) => {
    const [count, setCount] = useState(initalValue);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return [count, increment, decrement];
}