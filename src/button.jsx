import React, { useState } from "react";
import Modal from "react-modal";
import ModalContent from "./modal";
import DB from "./DB";
import style from "./styles/button.module.css"

let Button = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [check, setCheck]=useState(false);

    let openModal = () => {
        setModalIsOpen(true);
        setCheck(true)
    };

    let closeModal = () => {
        setModalIsOpen(false);
    };

    let content = DB.map((title)=>(
        title.map((str) => (
            props.number == str.id && props.name==str.name? <ModalContent closeModal={closeModal} 
             text={str.text} answer={str.answer}/> : null
        ))
    ))
      

    return (
        <>
             {/* <input type="checkbox" id="activate-div" className="activate-div"/>
            <label for="activate-div">
                <button onClick={openModal} className={style.button}>
                    {!check?props.number:0}
                </button>
            </label>  */}
            <button onClick={openModal} className={style.button} id="color">
                {!check?props.number:0}
            </button> 
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal} className={style.modal}>
                {content}
            </Modal>

        </>
    )

}
export default Button;