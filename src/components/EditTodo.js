import React, { Component } from "react";
import axios from "axios";

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theTodo.title,
      body: this.props.theTodo.bosy
    };
  }

  handleFormSubmit = event => {
    const title = this.state.title;
    const body = this.state.body;

    event.preventDefault();

    axios
      .put(`http://localhost:4000/api/projects/${this.props.theTodo._id}`, {
        title,
        body
      })
      .then(() => {
        this.props.getTheTodo();
        // after submitting the form, redirect to '/projects'
        this.props.history.push("/todos");
      })
      .catch(error => console.log(error));
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeBody = event => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>Description:</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={e => this.handleChangeBody(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditProject;