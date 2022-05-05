import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {ICar} from "../../interfaces";

interface IProps{
    car: ICar
}

const Car :FC<IProps>= ({car:{id, price, year, model}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>

            <div>year: {year}</div>
            <Link to={`${id}`}>
                <button>getDetails</button>
            </Link>
            <hr/>
        </div>
    );
};

export {Car};