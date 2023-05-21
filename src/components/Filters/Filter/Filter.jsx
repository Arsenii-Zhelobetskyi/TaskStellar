import React, { useState } from "react";

function Filter({
  storage,
  setStorage,
  className,
  sort,
  setSort,
  howToSort,
  setPressed,
}) {
  const toggleList = () => {
    console.log(sort !== "all");
    if (sort !== "all" && sort !== "uncompleted")
      setStorage(
        storage.map((item) => ({
          ...item,
          animate: true,
        }))
      );
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
