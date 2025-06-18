import React,{useState} from "react";



export default function TestForm(props) {
    
    const onUpClick=()=>{
        console.log("Button is clicked !!");
        setText(Text.toUpperCase());
        // setText(myBox.Text.)
        props.alerts('Text has been changed into upper case.','success');
    }

    const onlwClick=()=>{
        setText(Text.toLowerCase());
        props.alerts('Text has been changed into lower case.','success');
    }

    const onfontClick=()=>{
      const fonts = ['Arial','Verdana','Georgia','Times New Roman','Courier New','Lucida Console','Comic Sans MS','Trebuchet MS','Impact'];
        let control = document.getElementById('myBox');
        let label = document.getElementById('prev');
        let randomFont = fonts[Math.floor(Math.random()*fonts.length)];
        control.style.fontFamily = randomFont;
        label.style.fontFamily = randomFont;
        props.alerts('Text fonthas been changed.','success');
    }

    const textChnageHandel=(event)=>{
        console.log("Text is chnaged !!");
        setText(event.target.value);
    }

    const onClearClick=()=>{
        setText('');
        props.alerts('Text has been clear.','success');
    }
    
    const [Text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
        </div>
        <div className="mb-3">
          
          <textarea className="form-control" id="myBox" rows="8" value={Text} onChange={textChnageHandel}></textarea>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary w-30 mx-2" onClick={onUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary w-30 mx-2" onClick={onlwClick}>Convert to LowerCase</button>
            <button className="btn btn-primary w-30 mx-2" onClick={onfontClick}>Change Font</button>
            <button className="btn btn-primary w-30 mx-2" onClick={onClearClick}>Clear Text</button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p><span className="text-danger">{Text.trim().split(/\s+/).filter(word => word.length > 0).length}</span> words and <span className="text-success">{Text.length}</span> characters</p>
        <h2>Preview</h2>
        <p id="prev">{Text.length>0?Text:'Enter something in above textbox to preview it..'}</p>
      </div>
    </>
  );
}
