import React, { useState } from "react";
import style from "./styles/modal.module.css"

const ModalContent = (props) => {
    const [hidden, setHidden] = useState(true);

    return (
        <div className={style.container}>
            <button className={style.close}
                onClick={(e) => {
                    props.closeModal();
                }}>X</button>
            <h1 className={style.text}>{props.text}</h1>
            <button onClick={() => setHidden(!hidden)} className={style.button}>Ответ</button>
            {!hidden && props.answer}
        </div>
    );
};

export default ModalContent;
