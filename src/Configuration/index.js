import React from 'react';
import logo from '../logo.svg'
import WindowComponent from './Window/WindowComponent'

function Configuration() {
    console.log("Configuration")
    return (
        <div>
            <div className="banner">
                <img src={logo} className="banner-logo" alt="logo" />
                CrowdStar Title (Logo title)

            </div>
            <WindowComponent />
        </div>
    )
}

export default Configuration;
