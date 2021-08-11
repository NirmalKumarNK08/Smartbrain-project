import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './logo.css';

const logo = () => {
    return ( 
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' style={{height: '170px', width: '170px'}}>
                <div className='Tilt-inner pa3'><img alt='logo' src={brain}/></div>
            </Tilt>
        </div>
    );
}

export default logo;

