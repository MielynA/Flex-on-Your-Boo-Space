import React from 'react';
import Welcome from './Welcome';
import MessageInfo from '../containers/messageinfo';

export default (props) => {
	return (<>
		<div className='welcome'><Welcome /></div>
		<div className='message-info'><MessageInfo /></div>
        </>
	)
}