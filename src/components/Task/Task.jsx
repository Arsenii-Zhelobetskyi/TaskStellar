import React from "react";
/**
 * user's task
 * @param index each task has it's own number
 * @param task each task has some info
 * @param storage storage is needed for delete functionality
 * @param setStorage is also needed for updating the storage
 * */
function Task({ index, task, storage, setStorage }) {
  const deleteTask = (index) => {
    setStorage(storage.filter((_, i) => i !== index));
  };
  return (
    <div>
      <input type="radio" />
      <div>{task.info}</div>
      <button onClick={() => deleteTask(index)}>X</button>
    </div>
  );
}

export default Task;
