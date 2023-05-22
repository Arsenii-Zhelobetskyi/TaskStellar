import { useEffect, useState } from "react";
import "./_app.scss";
import Form from "../Form/Form.jsx";
import Filters from "../Filters/Filters.jsx";
import Task from "../Task/Task.jsx";
import EmptyList from "../EmptyList/EmptyList.jsx";
import Parallax from "../parallax/Parallax.jsx";

function App() {
  const [storage, setStorage] = useState(() => {
    const storedData = localStorage.getItem("tasks");
    if (storedData) {
      return JSON.parse(storedData);
    } else return [];
  }); // all information about the tasks
  const [sort, setSort] = useState("all"); //for properly sorting feature
  const [data, setData] = useState(storage); // all data that user's sees
  const [emptyListTrigger, setEmptyListTrigger] = useState(""); // for trigger empty list appear animation
  useEffect(() => {
    let newData =
      sort !== "all"
        ? storage.filter((item) => item.completed === (sort === "completed"))
        : storage;
    setData(newData);
  }, [sort, storage]);
  // console.log("data:", data);
  // console.log("storage:", storage);
  useEffect(() => {
    // save to local storage
    localStorage.setItem("tasks", JSON.stringify(storage));
  }, [storage]);

  return (
    <div>
      <div className="parallax-container">
        <Parallax />
      </div>
      <div className="base-container">
        <div className="container">
          <div className="logo">
            <img
              className="logo__image"
              src={`${import.meta.env.BASE_URL}icons/logo.svg`}
              alt="✨"
            />
            <div>
              Task
              <span className="gradient-text">Stellar</span>
            </div>
          </div>
          <Form storage={storage} setStorage={setStorage} />
          <Filters
            data={data}
            setEmptyListTrigger={setEmptyListTrigger}
            storage={storage}
            setStorage={setStorage}
            sort={sort}
            setSort={setSort}
          />
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
              <div>
                <div className="horizontal-line"></div>
                <EmptyList
                  emptyListTrigger={emptyListTrigger}
                  sort={sort}
                  storage={storage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
