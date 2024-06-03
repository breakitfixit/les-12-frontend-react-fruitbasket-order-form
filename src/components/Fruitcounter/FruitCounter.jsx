import React from 'react';
import './FruitCounter.css';

function FruitCounter({ fruitNaam, fruitEmoji, huidigeWaarde, verhoog, verlaag }) {
    return (
        <div>
            <h2>{fruitNaam} {fruitEmoji}</h2>
            <button className="button" onClick={verlaag}>-</button>
            <span>{huidigeWaarde}</span>
            <button className="button" onClick={verhoog}>+</button>
        </div>
    );
}

export default FruitCounter;
