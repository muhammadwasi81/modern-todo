import React, { Component } from "react";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Task"
            value={this.state.task}
            onChange={this.handleChange}
            autoFocus
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
