import "./styles.css";
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, item]);
    setItem("");
    console.log(list);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} value={item} />
        <button type="submit">Submit</button>
      </form>
      {list.map((l) => (
        <p>{l}</p>
      ))}
    </div>
  );
}
