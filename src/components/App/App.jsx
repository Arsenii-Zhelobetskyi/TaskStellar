import Form from "../Form/Form.jsx";
import Task from "../Task/Task.jsx";
import { useState } from "react";

function App() {
  const [externalText, setExternalText] = useState(""); // user input is chasing here
  const [storage, setStorage] = useState([]); // all information about the tasks
  console.log(storage);
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
        {storage.map((task, index) => (
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
