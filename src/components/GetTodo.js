import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import EditTodo from "./EditTodo";

class GetTodo extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      this.getSingleToDo();
    }
  
    getSingleToDo = () => {
      const { params } = this.props.match;
      axios
        .get(`http://localhost:4000/api/v1/todos/${params.id}`)
        .then(responseFromApi => {
            console.log('estoy aqui', responseFromApi.data)

          const theProject = responseFromApi.data;
          this.setState(theProject);
        })
        .catch(err => {
          console.log(err);
        });
    };
    


  
  deleteTask = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then( () =>{
        this.props.history.push('/todos'); 

    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderTodoForm = () => {
    if(!this.state.title){
      this.getSingleToDo();
    } else {
    //{...props} => so we can have 'this.props.history' in Edit.js
      return <EditTodo theTodo={this.state} getSingleTodo={this.getSingleTodo} {...this.props} />
    }
}
  
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <h1>{this.state.body}</h1>
        <button onClick={() => this.deleteTask()}>Delete task</button> 
        <div>{this.renderTodoForm()} </div>       

        <br/>
        <br/><br/><br/><br/><br/>

        <Link to={'/todos'}>Back todos</Link>
      </div>
    )
  }
}


  export default GetTodo;