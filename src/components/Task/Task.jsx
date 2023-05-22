import "../Icons/TrashIcon.jsx";
import "./_task.scss";
import TrashIcon from "../Icons/TrashIcon.jsx";

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
    //SetStorage- because we want to say react that task should be re-rendered with new property
    if (task.completed) {
      task.positionChanged = false;
      task.completed = !task.completed;
      task.animationKey = Date.now();
      setStorage(
        storage
          .map((item) =>
            item !== task
              ? { ...item, animate: false }
              : { ...item, animate: true }
          )
          .sort((a, b) => a.position - b.position)
      );
    } else {
      task.positionChanged = true;
      task.animate = true;
      task.completed = !task.completed;
      setStorage([...deleteTask(), task]);
    }
  };
  return (
    <div
      key={task.animationKey}
      className={`task ${task.animate ? "" : "not-animate"}`}
    >
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
