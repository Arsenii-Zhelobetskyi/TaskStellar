import React from "react";

/**
 * user's task
 * @param task each task has some info
 * @param storage storage is needed for delete functionality
 * @param setStorage is also needed for updating the storage
 * */
function Task({ task, storage, setStorage }) {
  const deleteTask = () => {
    // console.log(e);
    setStorage(storage.filter((item) => item.id !== task.id));
  };
  const toggleTask = () => {
    //SetStorage- because we want to say react that task should be re-rendered with new property
    setStorage(
      storage.map((item) => {
        if (item.id === task.id)
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
        onChange={() => toggleTask()}
      />
      <div>{task.info}</div>
      <button onClick={() => deleteTask()}>X</button>
    </div>
  );
}

export default Task;
