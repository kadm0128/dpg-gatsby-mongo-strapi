import React from 'react';
import './header02Component.css';

export const header02Component = (params) => {
    let { data, id, styles } = params.data;

    return (
        <div className="header02-wrapper">
            <h2 className="header02">{data}</h2>
        </div>
    )
}

