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
    }
    const handleLOWClick = () => {
        // console.log("Uppercase was clicked:- "+text);
        // setText("You have clicked on handleUpClick")
        let newtext = text.toLowerCase()
        setText(newtext);
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked:- "+text);
        // setText("You have clicked on handleUpClick")
        let newtext = '';
        setText(newtext);
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

    // This is used to type text in realtime
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

   return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8" cols="120"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLOWClick}>Convert to lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Convert to Clear Case</button>
        <button className="btn btn-primary mx-2" onClick={handleUniqueClick}>Convert to Unique Case</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCountWord}>Head Count word</button> */}

    </div>
    <div className="container my-3">
        <h2> Your text Summary</h2>
        <p>{text.split(' ').filter(function(text1){return text1 != ''}).length} words, {text.length} charaters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview </h2>
        <p>{text}</p>
    </div>
    </>
  )
}
