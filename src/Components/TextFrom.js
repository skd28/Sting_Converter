import React,{useState} from 'react'


export default function TextFrom(props) {
  const handleUpclick = () =>{
    // console.log("Uppercase was Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","sucess");
  }
  const handleLoclick = () =>{
    // console.log("Uppercase was Clicked"+text);
    let newText=text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","sucess");
  }
  const handleToclear = () =>{
    // console.log("Uppercase was Clicked"+text);
    let newText=" ";
    setText(newText)
    props.showAlert("text Cleared!","sucess");
  }
  const hadleOnChange = (event) =>{
    // console.log("On Change")
    setText(event.target.value);
  }
  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.ariaSelected();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clip-board!","sucess");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Remove extra spces!","sucess");
}

  const [text,setText]=useState(' ');
  return (
    <>
  <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={hadleOnChange}  style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className='btn btn-primary my-2 mx-1' onClick={handleUpclick}>Convert to Upper case</button>
  <button className='btn btn-primary my-2 mx-1' onClick={handleLoclick}>Convert to Lower case</button>
  <button className='btn btn-primary my-2 mx-1' onClick={handleToclear}>Clear text</button>
  <button className='btn btn-primary my-2 mx-1' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-primary my-2 mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  </div>
  <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
<h1>Your text summary</h1>
<p>
     {text.split(" ").length}Words, {text.length}  Charcter
</p>
<p>{0.008 * text.split(" ").length}Take a miniutes for a reading this pragraph</p>
<h2>Preview</h2>
{/* <p>{text.length>=0?text:"Enter something int the rextbox above to preview it here"}</p> */}
<p>
  {text}
</p>
  </div>
  </>
  )
}
