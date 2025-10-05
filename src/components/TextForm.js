import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    //setText("You have clicked on Uppercase button");
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleLoClick = () => {
    console.log("Lowercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    props.showAlert("Text changed!", "success");
  }
  const handleClearClick = () => {
    console.log("Clear text was clicked"+ text);
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
  }

  const [text, setText] = useState("Enter text here");//Hooks and states
  return (
    <>
    <div className='container'>
<h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Textarea</label> */}
  <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read.</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
