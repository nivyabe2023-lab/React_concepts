import {useState,useEffect}from "react";

function Counter(){
    const [count,setCount] = useState(0);
    function inc(){
        setCount(precount=>precount+1);
        setCount(precount=>precount+1);
    }
    useEffect(() => {
        console.log(count);
    },[count]);
    return(
        <>
        <h2 className='m-5'>{count}</h2>
        <button className = 'mx-5'onClick={inc}>UP</button>
        </>
    )
}
export default Counter;