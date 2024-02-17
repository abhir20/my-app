import React, {useRef} from "react";

function UseRefTutorial(){

    const inputRef = useRef(null);

    const OnClick = () => {
        inputRef.current.value = "";
        inputRef.current.focus();// focuses the element on button click
        console.log(inputRef.current.value);
    };
    return <div>
        <h1>Pedro</h1>
        <input type="text" placeholder="ex..." ref={inputRef} />
        <button onClick={OnClick} >Change Name</button>

    </div>
}

export default UseRefTutorial;