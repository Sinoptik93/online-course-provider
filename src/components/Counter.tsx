import {useState} from "react";
import styles from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0);

    console.log(styles)

    const increment = () => {
        setCount((count) => count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className={styles.btn} onClick={increment}>Click</button>
        </div>
    )
}
