import React from 'react';
import './richTextComponent.css';
const ReactMarkdown = require('react-markdown')

export const RichTextComponent = (params) => {

    let { data, id, styles } = params.data;

    return (
        <div className="richtext-wrapper">
            <ReactMarkdown source={data} />
        </div>
    )
}

