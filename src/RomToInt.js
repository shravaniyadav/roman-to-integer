import React, { useState } from "react";

const RomToInt = ({ value }) => {
  const [initialState, setInitialState] = useState("");

  const submit = () => {
    let val = value;
    let romNum = val.toUpperCase();
    var sum = getValue(romNum.charAt(romNum.length-1));

    for(let i = romNum.length-1; i>0; i--){
        let x = getValue(romNum.charAt(i));
        let y = getValue(romNum.charAt(i-1));
        if(x > y){
            sum -= y;
        }
        else{
            sum += y;
        }
    }
    setInitialState(sum);
  };

  const getValue = (ch) => {
    var retCharValue = 0;
    if (ch === "I") {
      retCharValue = 1;
    } else if (ch === "V") {
      retCharValue = 5;
    } else if (ch === "X") {
      retCharValue = 10;
    } else if (ch === "L") {
      retCharValue = 50;
    } else if (ch === "C") {
      retCharValue = 100;
    } else if (ch === "D") {
      retCharValue = 500;
    } else if (ch === "M") {
      retCharValue = 1000;
    }
    return retCharValue;
  };

  return (
    <div className="button">
      <button className="button_edit" type="button" onClick={submit}>
        <div className="button_text">Convert</div>
      </button>
      <p className="result">{initialState}</p>
    </div>
  );
};

export default RomToInt;
