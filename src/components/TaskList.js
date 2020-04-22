import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CreateTask from "./CreateTask";
import GetTodo from "./GetTodo";


class TaskList extends Component {
  constructor() {
    super();
    this.state = { listOfTodos: [] };
  }

  getAllTodos = () => {
    axios.get(`http://localhost:4000/api/v1/todos`).then(responseFromApi => {
      this.setState({
        listOfTodos: responseFromApi.data
      });
    });
  };


  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return (
      <div>
      <div>
              <CreateTask getData={() => this.getAllTodos()}/> {/* <== !!! */}
          </div>
        <div>
          {this.state.listOfTodos.map((eachTodo) => {
            return (
              <div>
                <Link to={`/todos/${eachTodo._id}`}>
                  <h1>{eachTodo.title}</h1>
                </Link>
                <p>{eachTodo.body}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;