import React, { useState } from "react";
import { data } from "./models/sample-data";

const sampledata = data.map((food) => {
  return {
    id: `${food.id}`,
    content: `${food.title} - ${food.description} - ${
      food.addOn !== undefined ? food.addOn : ""
    }`,
    price: `${food.price}`,
  };
});

function ListView() {
  const [todos, setTodos] = useState([
    { id: 1, title: "First todo" },
    { id: 2, title: "Second todo" },
    { id: 3, title: "Third todo" },
  ]);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [score, setScroe] = useState('10');

  // function onPasswordClick() {}
  // function onUserNameClick() {}

  // const onSubmit = (e) => {
  //   e.preventDefault();

  // }

  function onSubmit(e) {
    e.preventDefault();
    alert("Form Submitted")
    console.log(username, password)
  }

  // function addTodo() {
  //     setTodos([...todos, { id: todos.length + 1, title: `New todo ${todos.length + 1}` }]);
  // }

  const reversOrder = () => {
    setTodos([...todos].reverse());
  };
  // Your component logic here
  return (
    <div>
      <button onClick={reversOrder}>Reverse order</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      {/* Your JSX code here */}
      <ul>
        {sampledata.map((food) => (
          <li key={food.id}>
            {food.content} - {food.price}
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit}>
        <fieldset>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <p>Score: {score}⭐ </p>
          <div>
            <label htmlFor="rangeSlider">Range</label>
            <input type="range" min={0} max={10} value={score} onChange={(e) => setScroe(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ListView;
