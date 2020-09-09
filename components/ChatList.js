import React, {useState} from 'react'
import ChatForm from './ChatForm';
import Chat from './Chat';

function ChatList() {
    const [msgs, setMsgs] = useState([]);

    const sendMsg = message => {
        if(!message.text || /^\s*$/.test(message.text)) {
            return
        }

        const newMsgs = [message, ...msgs]

        setMsgs(newMsgs)
        console.log(...msgs)

    }

    return (
        <div>
            <ChatForm  onSubmit={sendMsg}/>
            <Chat msgs={msgs} />
        </div>
    )
}

export default ChatList
