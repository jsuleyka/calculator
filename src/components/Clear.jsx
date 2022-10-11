import React from "react";
import '../stylesheets/Clear.css'

const Clear = (props) => (
  <div className='clear-button' onClick={props.manageClear}>
    {props.children}
  </div>
);

export default Clear;