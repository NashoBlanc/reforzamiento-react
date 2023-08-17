import { useReducer, useState } from "react"

interface Counterstate {
    counter: number,
    previous: number,
    changes: number
}

const INITIAL_STATE: Counterstate = {
    counter: 10,
    previous: 15,
    changes: 20
}

type CounterAction = 
  | { type: 'increaseBy', payload: { value: number;}}
  | { type: 'reset'};


  const counterReducer = (state:Counterstate, action: CounterAction): Counterstate  => {
    switch (action.type) {
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0
            }
    
        default:
            return state;
    }
  }

export const CounterReducerComponent = () => {
    const [{counter}, dispatch] = useReducer(counterReducer, INITIAL_STATE);


    const handleClick = ()  => {
        dispatch({type: 'reset'})
        // setCounter(prev => prev + 1)
    }

    return (
        <>
            <h1>Counter: {counter} </h1>

            <button onClick={handleClick}>
                RESET
            </button>
        </>
    )
}