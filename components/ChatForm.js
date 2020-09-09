import React, {useState} from 'react';


function Chatform(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    return (
        <form className="chat-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Write your message" 
                value={input} 
                name="text"
                className="chat-input"
                onChange={handleChange}
            />
            <button className="chat-button>">Send Message</button>
        </form>
    )
}

export default Chatform;
