import './App.css';
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }
  
  addTask = (e) => {
    e.preventDefault()
    let taskValue = document.getElementById("task").value;
    //console.log(taskValue)
    this.setState({
      tasks: [...this.state.tasks, taskValue]
    })
    document.getElementById("inputArea").reset();
    console.log(this.state)
  } 
  render() {
  return (
   <div id="wrapper">
   <div id="banner">
      <h1>To Do List</h1>
    </div>
    <div id="listArea">
    <form id="inputArea" onSubmit={this.addTask}>
    <input id="task" type="text" placeholder="input task here!"/>
    <button type="submit">Add</button>
    </form>
    <div id="list">
      <ul>
    {this.state.tasks.map((e) => <li><Pad text={e} /></li>) }
    </ul>
    </div>
    </div>
    </div>
  );
  }
}

class Pad extends React.Component {
  
  render () {
    const { text } = this.props;
    return (
      <div class="toDoBlock">
        {text}
      </div>
    )
  }
}

export default App;
