import "./_emptyList.scss";

function EmptyList({ emptyListTrigger, sort, storage }) {
  const decideOutput = function (allValue, completedValue, uncompletedValue) {
    if (sort === "all" && storage.length === 0) return allValue;
    else if (sort === "completed") return completedValue;
    else if (sort === "uncompleted") return uncompletedValue; //probably you should fix that
  };
  return (
    <div key={emptyListTrigger} className={`empty-list`}>
      <img
        className="empty-list__illustration"
        src={`${import.meta.env.BASE_URL}icons/${decideOutput(
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
