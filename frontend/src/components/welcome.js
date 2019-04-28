import React from 'react';
import '../app.css';
// inline styles
const container = {
    textAlign: 'center',
    padding: '100px'
}


const Welcome = () => {
    return (
    <div style={ container } className='welcomeFont'>
        <h1>Welcome to Space Boo</h1>
    </div>
    )
}

export default Welcome;