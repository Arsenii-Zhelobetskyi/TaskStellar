import { useState } from "react";
import Filter from "./Filter/Filter.jsx";
import "./_filters.scss";

function Filters({
  data,
  setEmptyListTrigger,
  storage,
  setStorage,
  sort,
  setSort,
}) {
  const [pressed, setPressed] = useState({
    uncompleted: false,
    completed: false,
  });
  return (
    <div className="filters">
      <Filter
        data={data}
        setEmptyListTrigger={setEmptyListTrigger}
        storage={storage}
        setStorage={setStorage}
        className={`filters__uncompleted ${pressed.uncompleted ? "all" : ""}`}
        sort={sort}
        setSort={setSort}
        howToSort={pressed.uncompleted ? "all" : "uncompleted"}
        setPressed={setPressed}
      />
      <Filter
        data={data}
        setEmptyListTrigger={setEmptyListTrigger}
        storage={storage}
        setStorage={setStorage}
        className={`filters__completed ${pressed.completed ? "all" : ""}`}
        sort={sort}
        setSort={setSort}
        howToSort={pressed.completed ? "all" : "completed"}
        setPressed={setPressed}
      />
    </div>
  );
}

export default Filters;
