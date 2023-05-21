import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // for generate unique id's for elements
import "./_form.scss";

/**
 * <h1> input and submit button </h1>
 * function which includes the input and button to persist information from input
 * @param storage- to persist data from user input
 * @param setStorage - to add new information into storage
 * */
function Form({ storage, setStorage }) {
  const [inputText, setInputText] = useState(""); // user input is chasing here
  const task = {
    //how each task is represented in a storage
    id: uuidv4().slice(0, 8),
    info: inputText,
    details: "",
    position: 0,
    completed: false,
    changedPosition: false,
    animate: true,
  };
  const addPosition = (item) => {
    //when new tasks arrive, we need to update their positions
    return item.changedPosition
      ? { ...item }
      : { ...item, position: item.position + 1 };
  };
  const submitForm = (e) => {
    //push info into the storage
    e.preventDefault();
    if (!inputText) return;
    setStorage([task, ...storage.map((item) => addPosition(item))]);
    setInputText("");
  };
  return (
    <form className="form" onSubmit={submitForm}>
      <input
        className="form__input"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add new task"
        maxLength={125}
      />
      <button className="form__btn">
        <img
          className="form__btn__star-image"
          src="../../../public/icons/create-task.svg"
          alt="📃"
        />
        <div>Create task</div>
      </button>
    </form>
  );
}

export default Form;
