import React, { useState } from "react";
import RomToInt from "./RomToInt";
import Example from "./Example";
import Table from "./Table";

function App() {
  const [romanValue, setRomanValue] = useState("");

  const [theme, setTheme] = useState({
    color: 'rgb(158, 202, 240)',
    backgroundColor: 'rgb(15, 41, 68)',
  })

  const [icon, setIcon] = useState('☀️')

  const handleChange = (event) => {
    const roman = event.target.value.toUpperCase();
    console.log(roman);
    setRomanValue(roman);
  };

  const toggleTheme = () => {
    if(theme.color === 'rgb(158, 202, 240)'){
      setIcon('🌙')
      setTheme({
        color: 'black',
        backgroundColor: 'floralwhite',
      })
    }
    else{
      setIcon('☀️')
      setTheme({
        color: 'rgb(158, 202, 240)',
        backgroundColor: 'rgb(15, 41, 68)',
      })
    }
  }

  return (
    <div className="body" style={theme}>
      <div><button className="themeButton" style={theme} onClick={toggleTheme}>{icon}</button></div>
      <p className="heading">Roman number to Integer convertor</p>
      <div className="container">
        <div>
          <Table></Table>
        </div>
        <div>
          <Example></Example>
        </div>
      </div>
      <div>
          <div className="input">
            <input
              className="input_field"
              id="text"
              type="text"
              placeholder="Enter Roman Number"
              value={romanValue}
              onChange={handleChange}
            ></input>
          </div>
          <div className="romtoint">
            <RomToInt value={romanValue}></RomToInt>
          </div>
        </div>
    </div>
  );
}

export default App;
