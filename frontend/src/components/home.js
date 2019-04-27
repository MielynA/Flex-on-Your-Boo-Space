import React from 'react';
import Welcome from './welcome';
import MessageInfo from '../containers/messageinfo';

export default (props) => {
	return (<>
		<div className='welcome'><Welcome /></div>
		<div className='message-info'><MessageInfo /></div>
        </>
	)
}