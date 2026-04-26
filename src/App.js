import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState([
    {
      item: "One",
      isChecked: false,
    },
    {
      item: "Two",
      isChecked: false,
    },
    {
      item: "Three",
      isChecked: false,
    },
    {
      item: "Four",
      isChecked: false,
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const handleChange = (e, checkedBox) => {
    const handleData = data.map((list, index) => {
      if (list.item === checkedBox) {
        return { ...list, isChecked: !list.isChecked };
      } else {
        return { ...list };
      }
    });
    setData(handleData);
  };
  const handleClick = () => {
    const handleData = data.map((list, index) => {
      return { ...list, isChecked: true };
    });
    setData(handleData);
  };
  useEffect(() => {
    const MarkedAll = data.every((list) => list.isChecked === true);
    setToggle(MarkedAll);
  }, [data]);
  return (
    <div className="App">
      <h1>Dynamic Checkboxes</h1>
      {data.map((doc, index) => {
        return (
          <div key={index}>
            <input
              checked={doc.isChecked}
              id={index}
              className="data"
              type="Checkbox"
              onChange={(e) => handleChange(e, doc.item)}
            />
            <label htmlFor={index}>{doc.item}</label>
          </div>
        );
      })}
      <button disabled={toggle} onClick={() => handleClick()}>
        Mark All
      </button>
    </div>
  );
}
