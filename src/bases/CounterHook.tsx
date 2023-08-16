import { useCounter } from "../hook/useCounter"

export const CounterHook = () => {
   
    const {counter, elementToAnimate, handleClick} = useCounter({
        maxCount: 15
    });

    return (
        <>
         <h1>Counter Hook </h1>
            <h1 >Counter: {counter} </h1>

            <button ref={elementToAnimate} onClick={handleClick}>
                    +1
            </button>
        </>
    )
}