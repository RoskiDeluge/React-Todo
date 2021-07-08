import React from 'react';
import TodoList from './components/TodoComponents/TodoList/TodoList';
import TodoForm from './components/TodoComponents/TodoForm/TodoForm';

// import css file 



const tasks = [
  // {
  //   task: "Shopping",
  //   id: 123,
  //   completed: false
  // },
  // {
  //   task: "Eating",
  //   id: 124,
  //   completed: false
  // }
];

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      tasksList: tasks
    };
  }

  addNewTask = newTask => {
    const newState = {
      ...this.state,
      tasksList: [
        ...this.state.tasksList,
        { task: newTask, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    // this.togglePurchased
    // const newState = {...this.state}
    const newState = {
      ...this.state,
      tasksList: this.state.tasksList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      tasksList: this.state.tasksList.filter(item => {
        return !item.completed; // if(item.completed === false) return true
      })
    };
    this.setState(newState);
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <TodoForm addNewTask={this.addNewTask} clearCompleted={this.clearCompleted} />
        <TodoList tasks={this.state.tasksList} toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
