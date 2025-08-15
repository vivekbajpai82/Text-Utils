import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleClClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleLOClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard", "success");
  };

  const handleExtraSpaces = () =>{
    let newText = text.split(/ +/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces removed", "success");
  };

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLOClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container m-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters
        </p>
        <p>{(0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length).toFixed(2)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter some text above to preview here'}</p>
      </div>
    </>
  );
}
