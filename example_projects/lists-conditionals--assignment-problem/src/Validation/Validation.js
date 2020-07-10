import React from 'react';

const validation = (props) => {

    let message = 'Text too short';

    if (props.inputLength > 5) message = 'Text long enough';

    return (
        <div>
            {message}
        </div>
    )
}

export default validation;