import { v4 as uuidv4 } from "uuid"; // for generate unique id's for elements
import "./_form.scss";

/**
 * <h1> input and submit button </h1>
 * function which includes the input and button to persist information from input
 * @param inputText - we will be updating this info until user press the button
 * @param storage- to persist data from user input
 * @param setInputText - to update externalText
 * @param setStorage - to add new information into storage
 * */
function Form({ inputText, storage, setInputText, setStorage }) {
  const task = {
    //how each task is represented in a storage
    id: uuidv4().slice(0, 8),
    info: inputText,
    details: "",
    completed: false,
    position: 0,
    changedPosition: false,
  };
  const addPosition = (item) => {
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
    <div className="form-container">
      <form className="form" onSubmit={submitForm}>
        <input
          className="form__input"
          type="text"
          maxLength={126}
          placeholder="Add new task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="form__btn">📃Create task</button>
      </form>
    </div>
  );
}

export default Form;
