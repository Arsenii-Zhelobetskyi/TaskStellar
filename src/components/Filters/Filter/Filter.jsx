import { v4 as uuidv4 } from "uuid"; // force to play animation once again
function Filter({
  data,
  setEmptyListTrigger,
  storage,
  setStorage,
  className,
  sort,
  setSort,
  howToSort,
  setPressed,
}) {
  const toggleList = () => {
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
    if (data.length === 0) {
      setEmptyListTrigger(uuidv4().slice(0, 6));
    }
  };
  return (
    <div className={className} onClick={() => toggleList()}>
      {howToSort}
    </div>
  );
}

export default Filter;
