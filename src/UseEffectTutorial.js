import React, {useEffect, useState} from  "react";
import axios from "axios";

function UseEffectTutorial(){
    const [data, setData] = useState("");
    const [count,setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) =>
            {
                setData(response.data[0].email);
                console.log("API WAS CALLED");
            }); 
    },[count]);//to call api on button click
    //pass an empty array if you want the api to be called once and not again when the value changes
    //to avoid re-rendering, always specify the array


    return <div>Hello world {data} 
    <h1>{count}</h1>
    <button onClick={() => {
        setCount(count +1);
    }}> Click me! </button>
    </div>
};

export default UseEffectTutorial;