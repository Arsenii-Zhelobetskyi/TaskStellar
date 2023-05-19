import React, { useState } from "react";
import "../Icon/TrashIcon.jsx";
import "./_task.scss";
import TrashIcon from "../Icon/TrashIcon.jsx";

/**
 * user's task
 * @param task each task has some info
 * @param storage storage is needed for delete functionality
 * @param setStorage is also needed for updating the storage
 * */
function Task({ task, storage, setStorage }) {
  const deleteTask = () => {
    const clearArray = storage.filter((item) => item.id !== task.id);
    setStorage(clearArray);
    return clearArray;
  };
  const toggleTask = () => {
    console.log(storage);
    //SetStorage- because we want to say react that task should be re-rendered with new property
    if (task.completed) {
      task.positionChanged = false;
      task.completed = !task.completed;
      setStorage(storage.slice().sort((a, b) => a.position - b.position));
    } else {
      task.positionChanged = true;
      task.completed = !task.completed;
      setStorage([...deleteTask(), task]);
    }
    /*
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
                    */
  };
  return (
    <div className="task">
      <label className="checkbox">
        <input
          className="checkbox-default"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask()}
        />
        <span className="checkbox-custom"></span>
      </label>
      <div
        className={`task-info ${task.completed ? "completed" : ""}`}
        onClick={() => toggleTask()}
      >
        {task.info}
      </div>
      <TrashIcon deleteTask={deleteTask} />
    </div>
  );
}

export default Task;
