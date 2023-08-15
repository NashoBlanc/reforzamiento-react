import { useCounter } from "../hook/useCounter"

export const CounterHook = () => {
   
    const {counter, counterElement, handleClick} = useCounter();
    
    return (
        <>
         <h1>Counter Hook </h1>
            <h1 ref={counterElement}>Counter: {counter} </h1>

            <button onClick={handleClick}>
                    +1
            </button>
        </>
    )
}