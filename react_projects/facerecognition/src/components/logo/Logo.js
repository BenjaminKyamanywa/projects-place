import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = React.forwardRef((props, ref) => {
    return (
        <div  className='ma4 mt0'>
            <Tilt ref={ref} className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner pa3"> <span role="img" aria-label="image"> <img style={{paddingTop: '25px'}} src="https://img.icons8.com/wired/64/000000/brain.png" alt="logo"/> </span> </div>
            </Tilt>
        </div>
    );
})

export default Logo;