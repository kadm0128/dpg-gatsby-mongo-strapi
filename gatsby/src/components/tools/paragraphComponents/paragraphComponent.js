import React from 'react';
import './paragraphComponent.css';

export const ParagraphComponent = (params) => {
    let { title, description, id, styles } = params.data;

    return (
        <div className="paragraph-wrapper">
            <h5>{title}</h5>
            <br/>
            <p>{ description }</p>
        </div>
    )
}

