import React, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const box = {
                color: color,
                size: size + "px"
        }
		props.setNewbox(box)
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <label>Color</label>
            <input type="text" onChange={ (e) => setColor(e.target.value) } value={ color } />
            <label>Size</label>
            <input type="text" onChange={ (e) => setSize(e.target.value) } value={ size } />
            <button type = "submit" > Add</button>
        </form>
    );
};
    
export default MessageForm;
