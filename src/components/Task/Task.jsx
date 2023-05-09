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
    // console.log(e);
    setStorage(storage.filter((_, i) => i !== index));
  };
  const toggleTask = (index) => {
    //SetStorage- because we want to say react that task should be re-rendered with new property
    setStorage(
      storage.map((item, i) => {
        if (i === index)
          return {
            ...item,
            completed: !item.completed,
          };
        //destructuring the object->changing it's property->create+ return new object
        else return item;
      })
    );
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      <div>{task.info}</div>
      <button onClick={() => deleteTask(index)}>X</button>
    </div>
  );
}

export default Task;
