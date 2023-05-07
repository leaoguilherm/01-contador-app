import './style.css';

export function Result({result}) {
    return (
        <div className="result-counter">
            <h3>Resultado:</h3>
            <div className="result">
                <p>{result}</p>
            </div>
        </div>
    )
}