import React, { useState } from "react";
import Filter from "./Filter/Filter.jsx";
import "./_filters.scss";

function Filters({ storage, setStorage, sort, setSort }) {
  const [pressed, setPressed] = useState({
    uncompleted: false,
    completed: false,
  });
  return (
    <div className="filters">
      <Filter
        storage={storage}
        setStorage={setStorage}
        className={`filters__uncompleted ${pressed.uncompleted ? "all" : ""}`}
        sort={sort}
        setSort={setSort}
        howToSort={pressed.uncompleted ? "all" : "uncompleted"}
        setPressed={setPressed}
      />
      <Filter
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
