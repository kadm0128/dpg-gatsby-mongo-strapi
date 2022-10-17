import React from "react";
import "./rightLayout.css";

const RightLayout = (props) => {

    return (
        <div className="right-layout">
            { props.children }
        </div>
    )
}

export default RightLayout
