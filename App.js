import React, { Component } from 'react';
import './App.css';
import AddNewTask from './components/Add-Task/AddNewTask';
import TaskList from './components/Task-List/TaskList';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      task_Array: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
    }
  }

  addValue = (value) => {
    let item = this.state.task_Array;
    item.push(value)
    this.setState({ task_Array: item });
  }

  editValue = (value, index) => {
    let item = this.state.task_Array;
    item[index] = value;
    this.setState({ item });
  }

  removeValue = (index) => {
    let item = this.state.task_Array;
    item.splice(index, 1)
    this.setState({ item });
  }

  render() {
    let listStyle = {
      listStyleType: 'none'
    }

    let mainStyle = {
      border: '1px solid lightGrey',
      width: '342px',
      // paddingRight: '45px',
      marginTop: '10px',
      paddingBottom: '10px',
      boxShadow: '5px 5px 10px lightGrey'
    }
    return (
      <center>
        <AddNewTask valueDetail={this.addValue} />
        <div style={ mainStyle }>
          <ul style={listStyle}>
            {
              this.state.task_Array.map((value, i) => <TaskList key={i} taskArrayDetail={value}
                indexDetail={i} editDetail={this.editValue} removeDetail={this.removeValue} />)
            }
          </ul>
        </div>
      </center>
    );
  }
}