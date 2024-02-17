
import './App.css';
import React,{ useState } from "react";


const App = () => {
 // const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue ] = useState("Pedro");

 
  const onChange = (e) =>{
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  return (<div> <input placeholder="enter something..." onChange={onChange}/>
            {inputValue} 
          
          </div>
  );
};

export default App;
