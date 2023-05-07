import { Button } from '../Button';
import { Header } from '../Header';
import { Result } from '../Result';
import React, { useState } from 'react';

import './style.css';

export function Counter() {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div className="cardCounter">
            <Header />
            <div className="counter">
                <div className="btn-counter">
                    <Button text="Decrementar" onClick={handleDecrement} />
                    <Button text="Resetar" onClick={handleReset} />
                    <Button text="Incrementar" onClick={handleIncrement} />
                </div>
                <Result result={count}/>
            </div>
        </div >
    )
}
