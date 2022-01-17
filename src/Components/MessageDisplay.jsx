import React from 'react';
import styles from './style1.module.css'
    
const MessageDisplay = (props) => {
    const showBox = [...props.container2]
    return (
        <div className = {styles.box}>
            
            {
                showBox.map((item, i) => { 
                    let style = {backgroundColor: item.color, width: item.size, height: item.size} 
                    return (
                            <div key={i} style={style}> </div> 
                    )
                })
            }
        </div>
    );
};
    
export default MessageDisplay;

