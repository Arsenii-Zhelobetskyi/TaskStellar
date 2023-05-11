import React, { useState } from "react";
import Filter from "./Filter/Filter.jsx";

function Filters({ sort, setSort }) {
  const [pressed, setPressed] = useState({
    uncompleted: false,
    completed: false,
  });
  return (
    <div>
      <Filter
        sort={sort}
        setSort={setSort}
        howToSort={pressed.uncompleted ? "all" : "uncompleted"}
        setPressed={setPressed}
      />
      <Filter
        sort={sort}
        setSort={setSort}
        howToSort={pressed.completed ? "all" : "completed"}
        setPressed={setPressed}
      />
    </div>
  );
}

export default Filters;
