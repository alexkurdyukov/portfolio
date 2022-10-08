import React, { useState, useEffect } from "react";
import TyppingPoint from "./typingPoint";

export default function TypeText({speed,words}) {
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  let endIndicator = false;
  // if (speed){ 
  //   let typpingSpeed = speed;
  // }
  // typeWriter
  useEffect(() => {
    if ( subIndex === words.length) {
      endIndicator = true
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, speed);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <p>
        {!endIndicator && `${words.substring(0, subIndex)}${blink ? "|" : " "}`}
        {endIndicator && `${words.substring(0, subIndex)}`}
      </p>
    </>
  );
}
