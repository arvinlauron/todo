import React, { Component } from "react";
import Todo from "./todo";
import AddTodo from "./addtodo";


export default class Todos extends Component {
  constructor(props){
  super(props);
  this.state = {
    isActive:false,
    addTodoValue: "",
    todos: [
      {
        id: 1,
        value: "Assignment",
        isDone: false,
      },

      {
        id: 2,
        value: "Todo App",
        isDone: true,
      },

      {
        id: 3,
        value: "Post",
        isDone: false,
      },
    ]
  };
}

  handleDelete = (todo) => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== todo;
    });
    if(!todos.length){
      this.setState({isActive:true})
    }
    this.setState({ todos });
  };

  handleDone = (todo) => {
    const todos = [...this.state.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    this.setState({ todos });
  };
  getTime = () =>{
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  addNewTodo = (value) => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push({
        id: this.getTime(),
        value: value,
        isDone: false,
      });
      this.setState({ addTodoValue: "", todos });
      this.setState({isActive:false})
    } else {
      alert("Please Add Todo Text");
    }
  }

  render() {
    return (
      
      <table className="table">
        {this.state.isActive? <div className="alert alert-danger">No to do!</div>: null} 
        <tbody>
          
          {this.state.todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo
                index={index + 1}
                todo={todo}
                fooDelete={this.handleDelete}
                fooDoneDone={this.handleDone}
              />
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="text-center">
              <AddTodo
                fooAddTodo={this.addNewTodo}
                addTodoValue={this.state.addTodoValue}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}


