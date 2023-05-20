import React, { useState } from "react";

function Filter({ className, sort, setSort, howToSort, setPressed }) {
  const toggleList = () => {
    setSort(
      ["all", "completed", "uncompleted"].includes(sort) ? howToSort : "all"
    );
    setPressed({
      completed: howToSort === "completed",
      uncompleted: howToSort === "uncompleted",
    });
  };
  return (
    <div className={className} onClick={() => toggleList()}>
      {howToSort}
    </div>
  );
}

export default Filter;
