import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './logo.css';

const logo = () => {
    return ( 
        <div className='ml4 mb4 mr0 mt0 main'>
            <Tilt className='Tilt br2 shadow-2' style={{height: '150px', width: '150px'}}>
                <div className='Tilt-inner pa3'><img alt='logo' src={brain}/></div>
            </Tilt>
        </div>
    );
}

export default logo;

