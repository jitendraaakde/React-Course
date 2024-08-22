import { useContext, useRef, useState } from "react"
import { ContextApiForTodo } from "../store/ContextApi";

function AddTodo() {
  const { handleAddTodo } = useContext(ContextApiForTodo)
  const useText = useRef();
  const useDate = useRef();

  const buttonClicked = () => {
    handleAddTodo(useText.current.value, useDate.current.value)
  }

  return <div>
    <input type="text" ref={useText} />
    <input type="date" ref={useDate} />
    <button type="button" onClick={buttonClicked} class="btn btn-info">Add Item</button>

  </div>
}

export default AddTodo
