import React from "react";

function Task({ index, task, storage, setStorage }) {
  const deleteTask = (index) => {
    setStorage(storage.filter((_, i) => i !== index));
  };
  return (
    <div>
      <input type="radio" />
      <div>{task}</div>
      <button onClick={() => deleteTask(index)}>X</button>
    </div>
  );
}

export default Task;
