import React from 'react';


function Headerinfo({cName,subCount}) {
    return (
        <span className="headerInfo">
            <span className="cName">{cName}</span>
            <sub className="subCount">{subCount} Subscribers</sub>
        </span>
    );
}

export default Headerinfo;