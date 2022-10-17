import React from "react";
import "./topLayout.css";

const TopLayout = (props) => {

    return (
        <div className="container top-layout">
            { props.children }
        </div>
    )
}

export default TopLayout
