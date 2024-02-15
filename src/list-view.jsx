import React, { useState } from "react";

function ListView() {
  const [todos, setTodos] = useState([
    { id: 1, title: "First todo" },
    { id: 2, title: "Second todo" },
    { id: 3, title: "Third todo" },
  ]);

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
    </div>
  );
}

export default ListView;
