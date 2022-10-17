import React from 'react';
import './header03Component.css';

export const header03Component = (params) => {
    let { data, id, styles } = params.data;

    return (
    <div className="header03-wrapper">
        <h3 className="header03">{data}</h3>
    </div>
    )
}

