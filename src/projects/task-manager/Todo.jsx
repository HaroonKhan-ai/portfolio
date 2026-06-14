import { useState, useEffect } from "react";
import "./todo.css";
const App = () => {
  const [task, settask] = useState("");

  const [edit, setedit] = useState(null);
  const [todos, settodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAdd(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    if (edit !== null) {
      let update = [...todos];

      update[edit].text = task;
      settodos(update);
      setedit(null);
    } else {
      settodos([...todos, { text: task, completed: false }]);
    }
    settask("");
  }

  function handleDelete(index) {
    let updated = [...todos];
    updated.splice(index, 1);
    settodos(updated);
  }

  function handleEdit(index) {
    setedit(index);
    settask(todos[index].text);
  }
  function handleComplete(index) {
    let update = [...todos];
    update[index].completed = !update[index].completed;
    settodos(update);
  }

  function handleClear() {
    settodos([]);
    localStorage.removeItem("todos");
  }
  return (
    <div className="todoContainer">
      <form onSubmit={handleAdd}>
        <ul>
          <h1>TASK MANAGER</h1>
          <div className="input-button">
            <input
              className="input"
              type="text"
              value={task}
              name="task"
              onChange={(e) => settask(e.target.value)}
            />
            <button className="button" type="submit">
              {edit !== null ? "Update" : "Add"}
            </button>{" "}
            <button className="button" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="li-container">
            {todos.map((todo, index) => (
              <li key={index}>
                <div
                  className="todo list"
                  style={{
                    textDecoration: todos[index].completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {todo.text}
                </div>{" "}
                <div className="task-actions">
                  <button
                    className="button"
                    type="button"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="button"
                    type="button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    type="button"
                    className="button-c"
                    onClick={() => handleComplete(index)}
                  >
                    {todo.completed ? "undo" : "completed"}
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </form>
    </div>
  );
};

export default App;
