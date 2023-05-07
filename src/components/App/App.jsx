import Form from "../Form/Form.jsx";
import Task from "../Task/Task.jsx";
import { useState } from "react";

function App() {
  const [externalText, setExternalText] = useState("");
  const [storage, setStorage] = useState([]);
  // console.log(storage);
  return (
    <>
      <div>TaskStellar</div>
      <Form
        externalText={externalText}
        storage={storage}
        setStorage={setStorage}
        setExternalText={setExternalText}
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
