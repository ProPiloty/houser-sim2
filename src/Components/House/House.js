import React from 'react';

const House = (props) => {
    const {id, name, address, city, state, zip, img, mortgage, rent} = props.house;
    const {handleDeleteHouse} = props;
    return (
        <div>
            <div>
                <p>id: {id}</p>
                <h2>Property Name: {name}</h2>
                <h2>Address: {address}</h2>
                <h2>City: {city}</h2>
                <h2>State: {state}</h2>
                <h2>Zip: {zip}</h2>
            </div>
            <button onClick={handleDeleteHouse}>Delete</button>
        </div>
    )
}

export default House;