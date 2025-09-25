import React, { useState } from "react";

export default function TextForm(props) {

  const counter=(text)=>{
    let newText=text.trim();
    return newText===""?0:newText.split(/\s+/).length;
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = (event) => {
    setText("");
    props.showAlert("Text Cleared","success");
  };

  const handleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='light'?'#042743':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn mx-1`} style={{border: props.mode === 'light'?'2px solid black':'2px solid white',backgroundColor:props.changeColor,color: props.mode === 'light'?'black':'white'}} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn mx-1" style={{border: props.mode === 'light'?'2px solid black':'2px solid white',backgroundColor:props.changeColor,color: props.mode === 'light'?'black':'white'}} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn mx-1" style={{border: props.mode === 'light'?'2px solid black':'2px solid white',backgroundColor:props.changeColor,color: props.mode === 'light'?'black':'white'}} onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn mx-1" style={{border: props.mode === 'light'?'2px solid black':'2px solid white',backgroundColor:props.changeColor,color: props.mode === 'light'?'black':'white'}} onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn mx-1" style={{border: props.mode === 'light'?'2px solid black':'2px solid white',backgroundColor:props.changeColor,color: props.mode === 'light'?'black':'white'}} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Text Summary</h2>
        <p>{counter(text)} words and {text.length} characters</p>
        <p>{0.008 * counter(text)} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
