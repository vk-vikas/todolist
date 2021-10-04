import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

let arr = [
  {
    title: "buy a shirt",
  },
  {
    title: "build a todolist app",
  },
  {
    title: "call someone",
  },
];

function App() {
  return (
    <div className="App">
      <Form />
      <List dataArr={arr} />
    </div>
  );
}

export default App;
