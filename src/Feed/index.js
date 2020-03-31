import React from 'react';

import Thermometer from '../commons/Components/Thermometer'

function Feed() {
    return (
        <div>
            <Thermometer current="60" max="1000"/>
        </div>
    )
}

export default Feed;
