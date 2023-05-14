import Form from "../Form/Form.jsx";
import Filters from "../Filters/Filters.jsx";
import Task from "../Task/Task.jsx";
import { useEffect, useState } from "react";
import "./_app.scss";

//todo проверить все ли в компонентах
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
  console.log(data, storage);
  console.log(storage);
  // console.log("sort:", sort);

  return (
    <div className="container">
      <div className="logo">
        <img
          className="logo__image"
          src="../../../public/icons/logo.svg"
          alt="app's logo"
        />
        <div>TaskStellar</div>
      </div>
      <Form
        inputText={inputText}
        storage={storage}
        setInputText={setInputText}
        setStorage={setStorage}
      />
      <Filters sort={sort} setSort={setSort} />
      <hr />
      <div className="tasks">
        {data.length === 0 ? (
          <div className="empty-list">
            <img
              className="empty-list__illustration"
              src="../../../public/icons/empty-list.svg"
              alt="empty list illustration"
            />
            <div className="empty-list__logo-message">
              your TaskStellar is lonely...
            </div>
            <div className="empty-list__message">
              try start by adding some things to-do ᓚᘏᗢ
            </div>
          </div>
        ) : (
          data.map((task) => (
            <Task
              key={task.id}
              task={task}
              storage={storage}
              setStorage={setStorage}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
