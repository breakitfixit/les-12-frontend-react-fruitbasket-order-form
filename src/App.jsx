import React from 'react';
import './App.css'
import FruitCounter from './components/Fruitcounter/FruitCounter.jsx';
import Randvoorwaarden from './components/Form/Form.jsx';
function App() {


// initiele staat
// voor elk type fruit, met beginwaarde 0
// en waarde kunnen worden aangepast met set-functies

    const [bananen, setBananen] = React.useState(0);
    const [aardbeien, setAardbeien] = React.useState(0);
    const [appels, setAppels] = React.useState(0);
    const [kiwis, setKiwis] = React.useState(0);

// functies om fruitwaarde te verhogen, verlagen en resetten
    const verhoog = (fruitSetter, huidigeWaarde) => {
        fruitSetter(huidigeWaarde + 1);
    };

    const verlaag = (fruitSetter, huidigeWaarde) => {
        if (huidigeWaarde > 0) {
            fruitSetter(huidigeWaarde - 1);
        }
    };

    const reset = () => {
        setBananen(0);
        setAardbeien(0);
        setAppels(0);
        setKiwis(0);
    };


    /*    return (
            <>
                <h1>Fruitmand bezorgservice</h1>
                <div>
                    <h2>Bananen 🍌</h2>
                    <button className="button" onClick={() => verlaag(setBananen, bananen)}>-</button>
                    <span>{bananen}</span>
                    <button className="button" onClick={() => verhoog(setBananen, bananen)}>+</button>
                </div>

                <div>
                <h2>Aarbeien 🍓</h2>
                    <button className="button" onClick={() => verlaag(setAardbeien, aardbeien)}>-</button>
                    <span>{aardbeien}</span>
                    <button className="button" onClick={() => verhoog(setAardbeien, aardbeien)}>+</button>
                </div>

                <div>
                    <h2>Appels 🍏</h2>
                    <button className="button" onClick={() => verlaag(setAppels, appels)}>-</button>
                    <span>{appels}</span>
                    <button className="button" onClick={() => verhoog(setAppels, appels)}>+</button>
                </div>

                <div>
                    <h2>Kiwi's 🥝</h2>
                    <button className="button" onClick={() => verlaag(setKiwis, kiwis)}>-</button>
                    <span>{kiwis}</span>
                    <button className="button" onClick={() => verhoog(setKiwis, kiwis)}>+</button>
                </div>

                <button className="resetButton" onClick={reset}>Reset</button>
            </>*/

    // Bovenstaande info omgezet naar nieuw component (zie FruitCounter/FruitCounter.jsx)
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitCounter
                fruitNaam="Bananen"
                fruitEmoji="🍌"
                huidigeWaarde={bananen}
                verhoog={() => verhoog(setBananen, bananen)}
                verlaag={() => verlaag(setBananen, bananen)}
            />
            <FruitCounter
                fruitNaam="Aardbeien"
                fruitEmoji="🍓"
                huidigeWaarde={aardbeien}
                verhoog={() => verhoog(setAardbeien, aardbeien)}
                verlaag={() => verlaag(setAardbeien,aardbeien)}
            />
            <FruitCounter
                fruitNaam="Appels"
                fruitEmoji="🍏"
                huidigeWaarde={appels}
                verhoog={() => verhoog(setAppels, appels)}
                verlaag={() => verlaag(setAppels, appels)}
            />
            <FruitCounter
                fruitNaam="Kiwi's"
                fruitEmoji="🥝"
                huidigeWaarde={kiwis}
                verhoog={() => verhoog(setKiwis, kiwis)}
                verlaag={() => verlaag(setKiwis, kiwis)}
            />
            <button className="resetButton" onClick={reset}>Reset</button>

            <Randvoorwaarden />

        </>
    );
}

export default App
