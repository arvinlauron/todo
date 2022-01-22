import React, { Component } from "react";
// import './App.css';
import Todos from "./components/todos";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">My ToDo App</h1>

        <Todos />
      </div>
    );
  }
}

export default App;
