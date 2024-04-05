import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewitem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    addTodo(newItem);

    setNewitem("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewitem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </>
  );
}
