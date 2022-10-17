import React from "react";
import "./leftLayout.css";

const LeftLayout = (props) => {

    return (
        <div className="left-layout">
            { props.children }
        </div>
    )
}

export default LeftLayout
