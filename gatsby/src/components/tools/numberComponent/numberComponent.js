import React from 'react';
import './numberComponent.css';

export const NumberComponent = (params) => {
    let { data, id, styles } = params.data;

    return (
        <div>
            <p>{ data }</p>
        </div>
    )
}

