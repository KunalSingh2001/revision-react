// Write your code below:
import React from 'react';
import "./Card.css";

function Card(props) {
  const clases = "card " + props.className;
  return <div className={clases}>
    {props.children}</div>
}

export default Card;