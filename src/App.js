import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

let arr = [
  {
    id: "1",
    title: "Buy a shirt",
  },
  {
    id: "2",
    title: "Build a todolist app",
  },
  {
    id: "3",
    title: "Buy 1 Bitcoin",
  },
];

function App() {
  const [array, setArray] = useState(arr);

  const addSaveHandler = (enteredtile) => {
    const newData = { 
      // title added so that it can be renedered where we render title 
      id: Math.random().toString(),
      title: enteredtile,
    };

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
