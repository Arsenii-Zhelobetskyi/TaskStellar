import Form from "../Form/Form.jsx";
import Filter from "../Filter/Filter.jsx";
import Task from "../Task/Task.jsx";
import { useEffect, useState } from "react";
//todo add normal id
// проверить все ли в компонентах
function App() {
  const [inputText, setInputText] = useState(""); // user input is chasing here
  const [storage, setStorage] = useState([]); // all information about the tasks
  const [sort, setSort] = useState("");
  const [data, setData] = useState(storage); // all data that user's sees
  useEffect(() => {
    const newData = sort
      ? storage.filter((item) => item.completed === (sort === "completed"))
      : storage;
    setData(newData);
  }, [sort, storage]);

  // console.log(data, storage);
  return (
    <>
      <div>TaskStellar</div>
      <Form
        inputText={inputText}
        storage={storage}
        setInputText={setInputText}
        setStorage={setStorage}
      />
      {/*<div onClick={() => setSort(sort ? "" : "uncompleted")}>uncompleted</div>*/}
      <Filter sort={sort} setSort={setSort} howToSort={"uncompleted"} />
      <Filter sort={sort} setSort={setSort} howToSort={"completed"} />
      {/*<div onClick={() => setSort(sort ? "" : "completed")}>completed</div>*/}
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
