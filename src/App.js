import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

let arr = [
  {
    id: 1,
    title: "buy a shirt",
  },
  {
    id: 2,
    title: "build a todolist app",
  },
  {
    id: 3,
    title: "call someone",
  },
];

function App() {

  const addSaveHandler = (ourSubmittedData) => {
    const newData = {
      ...ourSubmittedData,
      id: Math.random().toString()
    }

    console.log(newData);
  };

  return (
    <div className="App">
      <Form onSave={addSaveHandler} />
      <List dataArr={arr} />
    </div>
  );
}

export default App;
