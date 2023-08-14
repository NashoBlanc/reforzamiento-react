import { useState } from "react"

interface CounterProps {
    initialValue?: number
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 } : CounterProps) => {
    const [{counter, clicks}, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

 
    const handleClick = (value: any)  => {
    // el parentetis antes de las llaves indica que vaas a retornar un obj
        setCounterState(({counter, clicks}) => ({
            counter: counter + value,
            clicks: clicks + value
        }))
    }

    return (
        <>
            <h1>CounterBy: {counter} </h1>
            <h1>Clicks: {clicks} </h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}