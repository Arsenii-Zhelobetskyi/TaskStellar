/**
 * <h1> input and submit button </h1>
 * function which includes the input and button to persist information from input
 * @param externalText - we will be updating this info until user press the button
 * @param storage- to persist data from user input
 * @param setExternalText - to update externalText
 * @param setStorage - to add new information into storage
 * */
function Form({ externalText, storage, setExternalText, setStorage }) {
  const structureOfTask = {
    //how each task is represented in a storage
    info: externalText,
    details: "",
    completed: false,
  };
  const submitForm = (e) => {
    //push info into the storage
    e.preventDefault();
    setStorage([structureOfTask, ...storage]);
    setExternalText("");
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Add new task"
        value={externalText}
        onChange={(e) => setExternalText(e.target.value)}
      />
      <button>📃Create task</button>
    </form>
  );
}

export default Form;
