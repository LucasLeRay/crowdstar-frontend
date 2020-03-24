import React from 'react';

function Button({title, onClick}) {
    return (
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button;
