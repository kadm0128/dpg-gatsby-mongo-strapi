import React from "react";
import "./bottomLayout.css";

const BottomLayout = (props) => {

    return (
        <div className="container bottom-layout">
            { props.children }
        </div>
    )
}

export default BottomLayout
