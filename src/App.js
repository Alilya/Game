import style from "./styles/app.module.css"
import RowTable from './rowTable';

function App() {
  return (
    <div className={style.container}>
      
     <RowTable title={"Ты узнаешь ее из тысячи"} name="music" />
     <RowTable title={"Хоть какой-то интеллект"} name="chatgpt" />
     <RowTable title={"Spotify с Алиэкспресс"} name="china" />
     <RowTable title={"Где логика?"} name="logic" />
     <RowTable title={"Паша Техник, прости Господи"} name="pavel" />
            
    </div>
  );
}

export default App;
