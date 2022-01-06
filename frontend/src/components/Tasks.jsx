import React, { useEffect, useState } from "react";
import { Task } from "./Task";

export const Tasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    await fetch(`http://localhost:8080/api/tasks`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
      });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    var todoTask = { task: task, completed: false };
    setTask("");
    await fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoTask),
    })
      .then((res) => res.json())
      .then(function (data) {
        let newTasks = tasks;
        newTasks.push(data);
        setTasks(newTasks);
        fetchTasks();
      });
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  return (
    <div className="bg-light col-md-7 p-0 vh-100 vw-100">
      <div className="container mb-5 pt-5">
        <ul className="list-unstyled">
          <h4 className="d-flex align-items-center">
            <i
              className="fa fa-bars text-secondary me-3"
              aria-hidden="true"
            ></i>
            Tasks
            <button
              className="input-box ms-auto text-secondary"
              onClick={fetchTasks}
            >
              <i className="fa fa-repeat text-secondary" aria-hidden="true"></i>
            </button>
          </h4>

          <li className="bg-light border-0 ms-3 mt-3 mb-3">
            <form onSubmit={handleAdd}>
              <i className="fa fa-plus me-3 me-3" aria-hidden="true"></i>
              <input
                className="input-box"
                placeholder="Add new task..."
                type="text"
                name="newTask"
                id="newTask"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </form>
          </li>
          {tasks.map(
            (task) =>
              !task.completed && (
                <Task
                  handleTasks={setTasks}
                  tasks={tasks}
                  task={task}
                  key={task.id}
                />
              )
          )}
        </ul>

        <ul className="list-unstyled">
          <h4>
            <i className="fa fa-check text-secondary" aria-hidden="true"></i>{" "}
            Completed
          </h4>
          {tasks.map(
            (task) =>
              task.completed && (
                <Task
                  handleTasks={setTasks}
                  tasks={tasks}
                  task={task}
                  key={task.task}
                />
              )
          )}
        </ul>
      </div>
    </div>
  );
};
