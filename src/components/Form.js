import React, { useState } from "react";
import './Form.css';

function Form(props) {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHamdler = (event) => {
    // when the input field changes , we change the value using state here
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(enteredTitle);
    setEnteredTitle(""); // to clear the area after submission

    props.onSave(enteredTitle);  // uplifting , we pass our defined fn as a prop and we call it here
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Enter your task</label>
      <input
        type="text"
        value={enteredTitle}    // value is whatever is in it , set to enteredtile to add 2 way binding
        onChange={titleChangeHamdler}
      ></input>
      <button type="submit">Add task</button>
    </form>
  );
}

export default Form;
