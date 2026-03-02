 import {useState,useEffect,useContext,useRef}from "react";
import Home from "./Home";
import { dataContext } from "./Home";

function Counter(props){
    const [count,setCount] = useState(0);
    let refCount = useRef(0);
    const data = useContext(dataContext);
    function inc(){
        setCount(count+1);
        refCount.count = refCount.count + 1;
        copnsole.log(count);
        console.log(refCount.count);
    }
    useEffect(() => {
        console.log(count);
    },[count]);
    return(
        <>
        <h2>Value: {props.value}</h2>
        <Home/>
        <h2 className='m-5'>{count}</h2>
        <button className = 'mx-5'onClick={inc}>UP</button>
        </>
    )
}
export default Counter;