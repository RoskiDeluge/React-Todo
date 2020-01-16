import React from "react";

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ ...this.state, newTask: e.target.value });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          onChange={this.handleChanges}
          type="text"
          name="task"
          value={this.state.newTask}
        />
        <button>Add</button>
        <div className="clear-btn" onClick={this.props.clearCompleted}>
          Clear Completed
        </div>
      </form>
    );
  }
}

export default TodoForm;