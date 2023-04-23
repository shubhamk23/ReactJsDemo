import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    // this is very important syntax , React hook (Reference:- https://legacy.reactjs.org/docs/hooks-intro.html)
    //here text is used for taking input text and setText is used for updating text variable
   const [text, setText] = useState('');

   //text = "new text"; // Wrong way to change state
   //setText = "new text"; // Wrong way to change state
    const handleUpClick = () => {
        // console.log("Uppercase was clicked:- "+text);
        // setText("You have clicked on handleUpClick")
        let newtext = text.toUpperCase()
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLOWClick = () => {
        // console.log("Uppercase was clicked:- "+text);
        // setText("You have clicked on handleUpClick")
        let newtext = text.toLowerCase()
        setText(newtext);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked:- "+text);
        // setText("You have clicked on handleUpClick")
        let newtext = '';
        setText(newtext);
        props.showAlert("Text is cleared!", "success");

    }
    const handleUniqueClick = () => {
        // console.log("Uppercase was clicked:- "+text);
        // setText("You have clicked on handleUpClick")
        let newtextset = new Set();
        let words = text.toLowerCase().split(' ');
        console.log(words);
        let count = 0
        
        for(let i=0; i<words.length; i++)
        {
            newtextset.add(words[i]);
            count = newtextset.size;
        }
        const str1 = Array.from(newtextset).join(' ');
        console.log(str1)
        setText(str1);
        props.showAlert("Unique word has founded!", "success");
    }
    // const handleCountWord = () => {
    //     let wordCount = text.split(" ")
    //     console.log(typeof wordCount.length, wordCount);
    //     if(wordCount[0] == ""  & wordCount.length == 1)
    //     {
    //         console.log("This is zero length");
    //         setNumber(0);
    //     }
    //     else
    //     {
    //         setNumber(wordCount.length);
    //     }
    // }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied to clipboard!", "success");

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");

    }
    // This is used to type text in realtime
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    console.log(props.mode);
   return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#072044'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#072044'}} id="myBox" rows="8" cols="120"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLOWClick}>Convert to lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Convert to Clear Case</button>
        <button className="btn btn-primary mx-2" onClick={handleUniqueClick}>Convert to Unique Case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text to clip board</button><br/><br/>
        <button className="btn btn-primary mx-10" onClick={handleExtraSpace}>Remove Extra Space</button>


        {/* <button className="btn btn-primary mx-2" onClick={handleCountWord}>Head Count word</button> */}

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#072044'}}>
        <h2> Your text Summary</h2>
        <p>{text.split(' ').filter(function(text1){return text1 != ''}).length} words, {text.length} charaters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview </h2>
        <p>{text.length>0?text:"Enter something to textbox above to preview it here"}</p>
    </div>
    </>
  );
}
