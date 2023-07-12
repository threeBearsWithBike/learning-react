import { useState } from "react"
import './MyCounter.css'

export default function MyCounter({value}) {
    const [count,setCount] = useState(value)
    const executeLess = () => setCount(count - 1)
    const executeReset = () => setCount(value)
    const executeMore = () => setCount(count + 1)
    return (
        <div className="MyCounter">
            <p className="MyCounter__value">Счетчик: {count}</p>
            <button onClick={executeLess} className="MyCounter__btn">less</button>
            <button onClick={executeReset} className="MyCounter__btn">reset</button>
            <button onClick={executeMore} className="MyCounter__btn">more</button>
        </div>
    )
}