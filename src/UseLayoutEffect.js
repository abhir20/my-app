import { useEffect,useLayoutEffect, useRef } from "react";


const UseLayoutEffect = () =>
{
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value =" HELLO";
    }, []);

    return(<div>
        <input ref={inputRef} value="PEDro" style={{width:400,height:500}}></input>
    </div>);
}

export default UseLayoutEffect;