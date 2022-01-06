import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {

    const handleSubmit = function(e) {
        e.preventDefault();
    }
    
  return (
    <div className="bg-white">
      <div className="centered">
        <h3>Welcome!</h3>
        <i className="fa fa-list-ul" aria-hidden="true"></i>
      </div>
      <div className="centered">
        <form className="centered" onSubmit={handleSubmit}>
          <input className="mb-3 mt-3" type="text" placeholder="Username" />
          <input className="mb-3" type="password" placeholder="Password" />
          <Link className="button-link" to={"/todolist"}>
            <button className="d-inline btn btn-secondary" type="submit">LOG IN</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
