import React, {useState} from 'react'
import Message from './Message';
import './Chat.css';
import Button from '@material-ui/core/Button';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';



const handleSubmit = (e, messages, setMessages, input, setInput) => {
    e.preventDefault()

    if(input !='') {
    setMessages([...messages, {message: input}])
    setInput('')
}
      
}
    


export default () => {

    const [toggled, toggle] = useState(false);
    

    const [messages, setMessages] = useState ([
        
    ])
    
    const [input, setInput] = useState('');

    return (

        <div className="toggle">
            {
                toggled && <> 
                    <div className="chat"> 
                        <div className="type-area">
                            <form className="chat-form" onSubmit={(e) => handleSubmit(e, messages, setMessages, input, setInput)}>
                                <input 
                                    type="text" 
                                    placeholder="Write your message" 
                                    value={input} 
                                    name="text"
                                    className="chat-input"
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button className="chat-button>">Send</button>
                            </form>
                            </div>
                            <div className="chat-window">
                            {messages.map(msgs => (
                                <Message message={msgs.message}/>
                            ))}
                            
                        </div>
                        <div className="header">
                                <p className="header-name">Tomáš Novák</p>
                                <AccountCircleSharpIcon className="avatar" />
                        </div>
                    </div>
                 </>
            }
                <Button className="toggle-button" variant="contained" color="primary" onClick={() => toggle(toggled => !toggled)}>
                            Open/Close
                </Button>
        </div>

    )
}