import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    // this is very important syntax , React hook (Reference:- https://legacy.reactjs.org/docs/hooks-intro.html)
    //here text is used for taking input text and setText is used for updating text variable
   const [text, setText] = useState('Enter text here');

   //text = "new text"; // Wrong way to change state
   //setText = "new text"; // Wrong way to change state
    const handleUpClick = () => {
        // console.log("Uppercase was clicked:- "+text);
        // setText("You have clicked on handleUpClick")
        let newtext = text.toUpperCase()
        setText(newtext);
    }
    // This is used to type text in realtime
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

   return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8" cols="120"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper Case</button>
    </div>
  )
}
