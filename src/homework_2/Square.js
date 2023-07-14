import { useState } from "react";
import './Game.css';

export default function Square() {
    const [sign, setSign] = useState(Math.round(Math.random() * 2))
    return (
        <span className="Square">
            {sign === 0 ? '' : sign === 1 ? 'X' : 'O'}
        </span>
    )
}