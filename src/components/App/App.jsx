import Form from "../Form/Form.jsx";
import Filters from "../Filters/Filters.jsx";
import Task from "../Task/Task.jsx";
import { useEffect, useState } from "react";
//todo add normal id
// проверить все ли в компонентах
function App() {
  const [inputText, setInputText] = useState(""); // user input is chasing here
  const [storage, setStorage] = useState([]); // all information about the tasks
  const [sort, setSort] = useState("all");
  const [data, setData] = useState(storage); // all data that user's sees
  useEffect(() => {
    const newData =
      sort !== "all"
        ? storage.filter((item) => item.completed === (sort === "completed"))
        : storage;
    setData(newData);
  }, [sort, storage]);
  // console.log(data, storage);
  console.log("sort:", sort);

  return (
    <>
      <div>TaskStellar</div>
      <Form
        inputText={inputText}
        storage={storage}
        setInputText={setInputText}
        setStorage={setStorage}
      />
      <Filters sort={sort} setSort={setSort} />
      <div>
        {data.map((task, index) => (
          <Task
            key={index}
            index={task.id}
            task={task}
            storage={storage}
            setStorage={setStorage}
          />
        ))}
      </div>
    </>
  );
}

export default App;
