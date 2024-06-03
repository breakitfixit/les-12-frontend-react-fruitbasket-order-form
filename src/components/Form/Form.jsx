import React from 'react';
import './Form.css';

function Randvoorwaarden({bananen, aardbeien, appels, kiwis}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        // Voeg de fruitaantallen toe aan de log
        const fruitData = {
            bananen,
            aardbeien,
            appels,
            kiwis
        };
        console.log({ ...data, ...fruitData });

    }
    return (
        <form onSubmit={handleSubmit} className="Randvoorwaarden">
            <label htmlFor="voornaam">Voornaam</label>
            <input type="text" id="voornaam" name="voornaam" required/>

            <label htmlFor="achternaam">Achternaam</label>
            <input type="text" id="achternaam" name="achternaam" required/>

            <label htmlFor="leeftijd">Leeftijd</label>
            <input type="number" id="leeftijd" name="leeftijd" required/>

            <label htmlFor="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode" required/>

            <label htmlFor="frequentie">Frequentie</label>
            <select name="frequentie" id="frequentie">
                <option value="iedere week">Iedere week</option>
                <option value="om de week">Om de week</option>
                <option value="iedere maand">Iedere maand</option>
            </select>

            <label htmlFor="bezorgtijd">Bezorgtijd</label>
            <div>
                <input type="radio" id="overdag" name="bezorgtijd" value="overdag"/>
                <label htmlFor="overdag">Overdag</label>

                <input type="radio" id="avond" name="bezorgtijd" value="avond"/>
                <label htmlFor="avond">Avond</label>
            </div>

            <label htmlFor="opmerking">Opmerking</label>
            <textarea id="opmerking" name="opmerking" rows="4"></textarea>

            <div className="terms">
            <input type="checkbox" id="akkoord" name="akkoord" required/>
            <label htmlFor="akkoord">Ik ga akkoord met de algemene voorwaarden</label>
            </div>


            <button type={"submit"}>Verzenden</button>


        </form>
    );
}

export default Randvoorwaarden;