import './App.css';
import RowTable from './rowTable';

function App() {
  return (
    <div className="App">
      
     <RowTable title={"Угадай мелодию"} name="music"/>
     <RowTable title={"Хоть какой-то интеллект"} name="chatgpt"/>
     <RowTable title={"Китай"} name="china"/>
     <RowTable title={"Эмодзи"} name="emoji"/>
     <RowTable title={"Где логика?"} name="logic" />
      
      
    </div>
  );
}

export default App;
