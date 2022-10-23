import React, { useState,useEffect } from "react";
let massive = '...'
const TyppingPoint = () =>{
    const [point,setPoint] = useState('');
    const [subIndex,setSubIndex] = useState(0)
    const [blink,setBlink] = useState(true)
    useEffect(() => {
        if (subIndex===massive.length+1){
            setSubIndex(0)
        }
        const timeOut = setTimeout(() => {
            setSubIndex(subIndex+1)
        }, 700);
    },[subIndex])
    
    useEffect(() => {
        const secTimeOut = setTimeout(() => {
            setBlink((prev) => !prev)
        },700)
    },[blink])
    
    return (
        <span>
            {`${massive.substring(0,subIndex)}${blink?'|':''}`}
        </span>
    )
}

export default TyppingPoint