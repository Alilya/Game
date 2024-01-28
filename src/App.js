import style from "./styles/app.module.css"
import React, { useState } from "react";
import RowTable from './rowTable';
import Modal from "react-modal";
import DemoCarousel from "./slyder";

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [check, setCheck]=useState(false);

  let openModal = () => {
    setModalIsOpen(true);
    setCheck(true)
};

let closeModal = () => {
    setModalIsOpen(false);
};


  return (
    <div className={style.container}>
      
     <RowTable title={"Ты узнаешь его из тысячи"} name="film" />
     <RowTable title={"Ты опять узнаешь его "} name="view" />
     <RowTable title={"Хоть какой-то интеллект"} name="chatgpt" />
     <RowTable title={"Spotify с Алиэкспресс"} name="china" />
     <RowTable title={"Где логика?"} name="logic" />
     
     
     <button onClick={openModal} className={style.button} id="color">
                Блиц
      </button> 

     <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal} className={style.modalSlider}>
               <DemoCarousel/>
      </Modal>

     
    </div>
  );
}

export default App;
