import React from 'react';

const userInput = (props) => {
    const styles = {
        border: '2px solid red'
    };

    return (
        <input 
            type='text' 
            onChange={props.changed} 
            value={props.currentName}
            style={styles}
        />
    )
};

export default userInput;   