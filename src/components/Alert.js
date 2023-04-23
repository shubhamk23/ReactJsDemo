//Shortcut to create rfce
import React from 'react'

function Alert(props) {
    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // here we have implemented if condition like if prop.alert is not null then implement div or not
    // This is important and used in most javascript community sides.
    //This is happen because all the JSX will be converted to Javascript Calls!
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

export default Alert
