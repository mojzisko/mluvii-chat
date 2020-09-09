import React from 'react';
import './Message.css';

export default ({message}) => (

    <div className="message">
        <div className="message-bubble">
            {message}
        </div>
    </div>

)
