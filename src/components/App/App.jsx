import Form from "../Form/Form.jsx";
import Filters from "../Filters/Filters.jsx";
import Task from "../Task/Task.jsx";
import EmptyList from "../EmptyList/EmptyList.jsx";
import { useEffect, useState } from "react";
import "./_app.scss";
// import EmptyList from "../EmptyList/EmptyList.jsx";
//todo проверить все ли в компонентах
function App() {
  const [inputText, setInputText] = useState(""); // user input is chasing here
  const [storage, setStorage] = useState([]); // all information about the tasks
  const [sort, setSort] = useState("all");
  const [data, setData] = useState(storage); // all data that user's sees
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // setIsLoading(true);
    const newData =
      sort !== "all"
        ? storage.filter((item) => item.completed === (sort === "completed"))
        : storage;
    setData(newData);
    // setIsLoading(false);
  }, [sort, storage]);
  // console.log(data, storage);
  // console.log(storage);
  // console.log("sort:", sort);

  return (
    <div className="container">
      <div className="logo">
        <img
          className="logo__image"
          src="../../../public/icons/logo.svg"
          alt="app's logo"
        />
        <div>
          Task
          <span className="gradient-text">Stellar</span>
        </div>
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
        {data.length !== 0 ? (
          data.map((task) => (
            <Task
              key={task.id}
              task={task}
              storage={storage}
              setStorage={setStorage}
            />
          ))
        ) : (
          // <EmptyList isloading={isLoading} sort={sort} />
          <EmptyList sort={sort} storage={storage} />
        )}
      </div>
    </div>
  );
}

export default App;
