import React, { useState, useEffect } from "react";

export default function TypeText({speed,words}) {
  const [typeSpeed,setTypeSpeed] = useState(speed)
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const lowSpeed = 400;
  let endIndicator = false;
  useEffect(() => {
    if ( subIndex === words.length) {
      endIndicator = true;
      setTypeSpeed(lowSpeed)
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
