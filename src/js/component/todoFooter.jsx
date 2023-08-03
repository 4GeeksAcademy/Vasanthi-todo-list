import React from "react";

const ToDoFooter = (props) => {
  return (
    <>
      {props.lists.length > 0 && props.lists.length} {props.lists.length == 0 ? 'No items' : props.lists.length > 1 ? 'items' : 'item'} left
    </>
  )
}

export default ToDoFooter