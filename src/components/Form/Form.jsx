function Form({ externalText, storage, setStorage, setExternalText }) {
  const submitForm = (e) => {
    e.preventDefault();
    setStorage([...storage, externalText]);
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
      <button>Button</button>
    </form>
  );
}

export default Form;
