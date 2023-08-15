import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react"

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);
    const counterElement = useRef(null)

    useEffect(() => {

        if (counter < 10) return;

        const tl = gsap.timeline();

        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
        .to(counterElement.current, { y: 0, duration:1 , ease: 'bounce.out'})


    }, [counter])

    function handleClick() {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }

    return (
        <>
            <h1 ref={counterElement}>Counter: {counter} </h1>

            <button onClick={handleClick}>

            </button>
        </>
    )
}