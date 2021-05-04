import React from 'react';

const circle = {
    border: "1px solid white",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginTop: "60px"
};

const arrow = {
    width: "15px",
    height: "15px",
    border: "2px solid white",
    margin: "14px 16px",
    borderLeftWidth: "0",
    borderTopWidth: "0",
    transform: "rotate(45deg)"
};

const CircledArrow = () => {
    return (
        <div style={circle} className="mx-auto">
            <div style={arrow}></div>
        </div>
    );
};

export default CircledArrow;