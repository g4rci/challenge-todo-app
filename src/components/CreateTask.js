import React, { Component } from "react";
import axios from "axios";

class CreateTask extends Component {
    state = { title: "", body: ""};
  
    handleFormSubmit = async (event) => {
      event.preventDefault();
      const {title, body } = this.state;
      await axios
        .post("http://localhost:4000/api/v1/todos", { title, body})
        .then(() => {
          this.props.history.push("/todos");
        })
        .catch(error => console.log(error));
    };
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    render() {
      return (
        <div className="todos">
          <form className="todoCard" onSubmit={this.handleFormSubmit}>
            <label>title:</label>
            <input
              type="text"
              name="title"
              value={this.title}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Body:</label>
            <textarea
              type="text"
              name="body"
              value={this.body}
              onChange={(e) => this.handleChange(e)}
            />
            
            <button type="submit" value="Submit">Create</button>
          </form>
        </div>
      );
    }
  }
  
  export default CreateTask;
  