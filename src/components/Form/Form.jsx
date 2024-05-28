import React from 'react';
import './Form.css';

function Randvoorwaarden() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);

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

            <label>
                <input type="checkbox" name="frequentie" value="wekelijks"/>
                Wekelijks
            </label>
            <label>
                <input type="dropdown" name="frequentie" value="maandelijks"/>
                Maandelijks
            </label>

            <button type={"submit"}>Verzenden</button>


        </form>
    );
}

export default Randvoorwaarden;