import React, { useRef, useState } from "react";

export const Task = ({ handleTasks, tasks, task }) => {
  var taskClass = task.completed
    ? "text-decoration-line-through ms-3 pe-3 mb-3"
    : "shadow p-3 mb-3 bg-body rounded-3 list-group-item";

  var inputClass = task.completed
    ? "input-box text-decoration-line-through"
    : "input-box";

  const [completed, setCompleted] = useState(task.completed);
  const [taskTitle, setTaskTitle] = useState(task.task);

  const [inputRef, setInputFocus] = useState(React.createRef);

  const handleFocus = (event) => {
    setInputFocus(inputRef.current.focus());
  };

  const handleChange = () => {
    setCompleted(!completed);
    task.completed = !completed;
    fetch(`http://localhost:8080/api/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => (task = data));
  };

  const handleRemove = function () {
    tasks.pop(task);
    handleTasks(tasks); 
    fetch(`http://localhost:8080/api/tasks/${task.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then((response) => {
      console.log(response);
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    task.task = taskTitle;
    fetch(`http://localhost:8080/api/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
  };

  return (
    <>
      <li className={taskClass}>
        <div className="d-flex align-items-center">
          <input
            className="me-3"
            type="checkbox"
            checked={completed}
            onChange={handleChange}
          ></input>

          <form onSubmit={handleEdit}>
            <input
              ref={inputRef}
              className={inputClass}
              placeholder="Add new task..."
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </form>
          <button
            className="btn btn-primary rounded-circle ms-auto"
            onClick={handleFocus}
          >
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button
            className="btn btn-danger rounded-circle ms-3"
            onClick={handleRemove}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </li>
    </>
  );
};
