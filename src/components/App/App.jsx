import Form from "../Form/Form.jsx";
import { useState } from "react";

function App() {
  const [externalText, setExternalText] = useState("");
  const [storage, setStorage] = useState([]);
  console.log(storage);
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
          <div key={index}>{task}</div>
        ))}
      </div>
    </>
  );
}

export default App;
