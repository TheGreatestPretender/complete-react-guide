import React from 'react';

const char = (props) => {
    const styles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={styles} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default char;