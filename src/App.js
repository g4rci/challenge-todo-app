import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TaskList from './components/TaskList'; 
import GetTodo from "./components/GetTodo";
import EditTodo from "./components/EditTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/todos" component={TaskList}/>
          <Route exact path="/todos/:id" component={GetTodo}/>
          <Route exact path="/todos/:id" component={EditTodo}/>
         
        </Switch>
      </div>
    );
  }
}

export default App;