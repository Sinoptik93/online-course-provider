import {useState} from "react";
import "./Counter.style.scss"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Click</button>
        </div>
    )
}
