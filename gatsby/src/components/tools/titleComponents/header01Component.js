import React from 'react';
import './header01Component.css';

export const header01Component = (params) => {
    let { data, id, styles } = params.data;

    return (
    <div className="header01-wrapper">
        <h1 className="header01">{ data }</h1>
    </div>
    )
}

