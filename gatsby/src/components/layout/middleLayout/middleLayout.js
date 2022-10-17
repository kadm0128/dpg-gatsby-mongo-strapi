import React from "react";
import "./middleLayout.css";

const MiddleLayout = (props) => {

    return (
        <div className="container middle-layout">
            { props.children }
        </div>
    )
}

export default MiddleLayout
