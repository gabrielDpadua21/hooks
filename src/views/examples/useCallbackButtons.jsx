import React from 'react';

const UseCallbackButtons = (props) => {
    console.log('render...')
    return (
        <div>
            <div className="btn" onClick={() => props.increment(6)}>+6</div>
            <div className="btn" onClick={() => props.increment(12)}>+12</div>
            <div className="btn" onClick={() => props.increment(18)}>+18</div>
        </div> 
    )
}

export default React.memo(UseCallbackButtons);