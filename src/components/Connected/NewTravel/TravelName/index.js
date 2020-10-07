import React from 'react';
import { Redirect } from 'react-router-dom';

import './style.scss';

const TravelName = ({location, country, departure, handleChange, handleSubmit}) => {
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        handleChange({
            [name]: value,
        });
      };

    const handleInputSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit();
    };

    return(
    <div className="travel">
        <form className="travel-form" onSubmit={handleInputSubmit}>
            <label>
            <h1>Nom du voyage<span>*</span></h1>
                <input type="text" 
                        name="location" 
                        className="travel-input" 
                        placeholder="Nom du voyage" 
                        value={location}
                        onChange={handleInputChange} 
                        />
            </label>
            <label>
            <h1>Pays<span>*</span></h1>
                <input type="text" 
                        name="country" 
                        className="travel-input" 
                        placeholder="Pays de départ" 
                        value={country}
                        onChange={handleInputChange}
                        />
            </label>
            <label>
            <h1>Date de départ<span>*</span></h1>
                <input type="date" 
                        name="departure" 
                        className="travel-input" 
                        placeholder="Date de départ" 
                        value={departure}
                        onChange={handleInputChange}
                        />
            </label>
            <button className="newStep-button">Créer un nouveau voyage</button>
        </form>
    </div>
)};

export default TravelName;