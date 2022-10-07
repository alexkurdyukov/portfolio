import React, { useState, useEffect } from "react";
import TyppingPoint from "./typingPoint";

export default function TypeText({words}) {
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const typpingFlag = false;
  // typeWriter
  useEffect(() => {
    if ( subIndex === words.length) {
      typpingFlag = true;
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, 400);
    return () => clearTimeout(timeout);
  }, [subIndex]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 400);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <p>
        {`${words.substring(0, subIndex)}${blink ? "|" : " "}`}
        {/* {typpingFlag && <TyppingPoint/>} */}
      </p>
    </>
  );
}
