import React from "react";
import "./_emptyList.scss";
// function EmptyList({ isloading, sort }) {
function EmptyList({ sort, storage }) {
  // console.log(sort);
  // if (isloading) return;
  const decideOutput = function (allValue, value2, value3) {
    if (sort === "all" && storage.length === 0) return allValue;
    else if (sort === "completed") return value2;
    else if (sort === "uncompleted") return value3; //probably you should fix that
  };
  return (
    <div className="empty-list">
      <img
        className="empty-list__illustration"
        src={`../../../public/icons/${decideOutput(
          "empty-task-list.svg",
          "no-completed-tasks.svg",
          "no-uncompleted-tasks.svg"
        )}`}
        alt="empty list illustration"
      />
      <div className="empty-list__logo-message">
        {decideOutput(
          "your TaskStellar is lonely...",
          "this list is empty...",
          "you have no uncompleted tasks!"
        )}
      </div>
      <div className="empty-list__message">
        {decideOutput(
          "try start by adding some things to-do ᓚᘏᗢ",
          "come back later /ᐠ｡ꞈ｡ᐟ\\",
          "come back later (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧)"
        )}{" "}
      </div>
    </div>
  );
}

export default EmptyList;
