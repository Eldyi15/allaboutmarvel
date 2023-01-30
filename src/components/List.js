import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState, useRef } from "react";
import "./../styles/list.scss";

const List = ({ list }) => {
  //useState Define the initial Value and the Function to Change the value
  const [details, setDetails] = useState({
    name: "Daivd",
    designation: "React Engineer",
  });

  const updateState = () => {
    setDetails({
      name: "HELLO",
      designation: "Changed",
    });
  };

  // useEffect runs when the html rendered
  useEffect(() => {
    console.log("useEffect");
  });

  //useRef =>
  const inputRef = useRef(null);

  const getValue = () => {
    alert(inputRef.current.value);
  };

  //
  const [arrayList, setArrayList] = useState([
    { name: "John", designation: "Hero" },
    { name: "Hello", designation: "Hello" },
  ]);

  const handleEvent = (event, string) => console.log(event, string);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Use State</h2>
      <p>
        My name is {details.name} and I am working as {details.designation}
      </p>
      <button onClick={updateState}>Update State</button>

      {/* Use Ref */}
      <div className="list">
        <h2>Use Ref Hooks</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Provide Text Here"
          id="name"
        />
        <button onClick={getValue}>Alert Value</button>
      </div>
      {/* use loop in html
       */}
      <div>
        <h2>ARRAY LOOPING</h2>
        <div className="card-container">
          {arrayList.map((list, index) => (
            <div className="card" key={index}>
              <h1>{list.name}</h1>
              <p>{list.designation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* handling Event */}
      <div>
        <h2>Handling Events in React</h2>

        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleEvent} />
            <button onClick={(e) => handleEvent(e, "SADAW")}>Click Me!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default List;
