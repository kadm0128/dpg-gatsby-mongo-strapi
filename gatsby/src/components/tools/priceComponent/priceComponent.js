import React from 'react';
import './priceComponent.css';

export const PriceComponent = (params) => {
    let { data, id, styles } = params.data;

    return (
        <div>
            <p>{ data }</p>
        </div>
    )
}

