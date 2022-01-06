import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";
import { Login } from "./components/Login";

function App() {
  return (
    <main className="container-fluid p-0">
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Login/>} />
        <Route exact path={"/todolist"} element={<Tasks/>} />
      </Routes>
    </main>
  );
}

export default App;
