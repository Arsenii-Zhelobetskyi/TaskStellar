import Form from "../Form/Form.jsx";
import Task from "../Task/Task.jsx";
import { useState } from "react";

function App() {
  const [externalText, setExternalText] = useState(""); // user input is chasing here
  const [storage, setStorage] = useState({
    unfinishedTasks: [],
    finishedTasks: [],
  }); // all information about the tasks
  console.log(storage);
  // console.log(test);
  return (
    <>
      <div>TaskStellar</div>
      <Form
        externalText={externalText}
        storage={storage}
        setExternalText={setExternalText}
        setStorage={setStorage}
      />
      <div>
        unfinishedTasks:
        {storage.unfinishedTasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            storage={storage}
            setStorage={setStorage}
          />
        ))}
      </div>
      <div>
        finishedTasks:
        {storage.finishedTasks.map((task, index) => (
          <Task
            key={index}
            index={index}
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
