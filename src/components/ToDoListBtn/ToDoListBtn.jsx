import React from "react";

export const ToDoListBtn = (props) => {
  return (
    <button 
      className={props.class}
      onClick={props.onClick}
      style = {{background:props.color,}}
    >
      {props.children}
    </button>
  );
};
