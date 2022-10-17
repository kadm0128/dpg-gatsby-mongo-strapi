import React from 'react';
import './dateTimeComponent.css';

export const DateTimeComponent = (params) => {
    let { data, id, styles } = params.data;

    return (
        <div>
            <p>{ data }</p>
        </div>
    )
}

