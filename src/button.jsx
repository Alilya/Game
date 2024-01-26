import React, { useState } from "react";
import Modal from "react-modal";
import ModalContent from "./modal";
import DB from "./DB";
import style from "./styles/button.module.css"

let Button = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let openModal = () => {
        setModalIsOpen(true);
    };

    let closeModal = () => {
        setModalIsOpen(false);
    };

    let music = DB.map((title)=>(
        title.map((str) => (
            props.number == str.id && props.name==str.name? <ModalContent closeModal={closeModal}
             text={str.text} answer={str.answer}/> : null
        ))
    ))
   

    return (
        <>
            <button onClick={openModal} className={style.button}>
                {props.number}
            </button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal} className={style.modal}>
                {music}
                
            </Modal>
            
        </>
    )

}
export default Button;