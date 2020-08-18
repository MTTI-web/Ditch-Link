import React from 'react';
import { Router, Link } from '@reach/router';

const Pet = (props) => {
    let hero = 'https://www.vectorkhazana.com/assets/images/products/Paw-print1.jpg';
    if (props.media.length) {
        hero = props.media[0].small;
    }
    return (
        <Link to={`/details/${props.id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={props.name} />
            </div>
            <div className="info">
                <h1>{props.name}</h1>
                <h2>{`${props.animal} - ${props.breed} - ${props.location}`}</h2>
            </div>
        </Link>
    );
};
export default Pet;