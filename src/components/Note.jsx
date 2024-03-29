import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><AiOutlineDelete /></button>
    </div>
  );
}

export default Note;
