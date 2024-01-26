import React, { useState } from "react";
import  "./modal.css"

const ModalContent = (props) => {
    const [hidden, setHidden] = useState(true);
    
    return (
        <div>
            <button
                onClick={(e) => {
                    props.closeModal();
                }}
            >
                X
            </button>
            <div>
               <h1>{props.text}</h1> 
               <button onClick={() => setHidden(!hidden)}>Ответ</button>    
               {!hidden && props.answer}  
                
            </div>
        </div>
    );
};

export default ModalContent;
