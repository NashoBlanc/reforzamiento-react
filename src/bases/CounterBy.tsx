import { useState } from "react"

interface CounterProps {
    initialValue?: number
}

export const CounterBy = ({ initialValue = 5 } : CounterProps) => {
    const [counterState, setCounterState] = useState({
        counter: initialValue,
        clicks: 0
    });

 
    const handleClick = (value: any)  => {
    // el parentetis antes de las llaves indica que vaas a retornar un obj
        setCounterState(prev => ({
            counter: prev.counter + value,
            clicks: prev.clicks + value
        }))
    }

    return (
        <>
            <h1>CounterBy: {counterState.counter} </h1>
            <h1>Clicks: {counterState.clicks} </h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}