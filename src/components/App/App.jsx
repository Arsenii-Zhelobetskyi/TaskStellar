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
      {/*<ul>{storage}</ul>*/}
    </>
  );
}

export default App;
