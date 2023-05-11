import React, { useState } from "react";

function Filter({ sort, setSort, howToSort, setPressed }) {
  // const [text, setText] = useState(howToSort);
  const toggleList = () => {
    // setSort(sort !== "all" ? "all" : howToSort);
    setSort(
      sort === "all" || sort === "completed" || sort === "uncompleted"
        ? howToSort
        : "all"
    );
    // setText(sort ? howToSort : "all");
    setPressed({
      completed: howToSort === "completed",
      uncompleted: howToSort === "uncompleted",
    });
  };
  return <div onClick={() => toggleList()}>{howToSort}</div>;
}

export default Filter;
