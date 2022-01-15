import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
import './App.css';
    
    
const App = (props) => {
    const [boxlist, setBoxlist] = useState([]);

    const addBox = (newBox) => {
        setBoxlist([...boxlist, newBox])
    }
    
    return (
        <div>
            <MessageForm setNewbox = { addBox }/>
            <MessageDisplay container2 = { boxlist } />
        </div>
    );
}
    
export default App;


