import {useState} from "react";

const useHeader=()=>{
    const [isClick,setClick]=useState(false)
    const handelClick=()=>{
        setClick(!isClick)
        console.log(isClick)
    }
    return{
        isClick,handelClick
    }
}

export default useHeader