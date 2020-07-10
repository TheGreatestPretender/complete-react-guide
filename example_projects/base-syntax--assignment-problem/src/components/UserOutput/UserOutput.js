import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div>
            <p className="userOutput">Username: {props.userName}</p>
            <p className="userOutput">some other garbage</p>
        </div>
    )
}

export default userOutput;