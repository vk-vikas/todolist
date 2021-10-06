import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

let arr = [
  {
    id: '1',
    title: "buy a shirt",
  },
  {
    id: '2',
    title: "build a todolist app",
  },
  {
    id: '3',
    title: "call someone",
  },
];

function App() {
  const [array, setArray] = useState(arr);

  const addSaveHandler = (enteredtile) => {
    const newData = {
      id: Math.random().toString(),
      title: enteredtile,
    };

    console.log([newData, ...array]);

    setArray([newData, ...array]);
  };

  return (
    <div className="App">
      <Form onSave={addSaveHandler} />
      <List dataArr={array} />
    </div>
  );
}

export default App;
