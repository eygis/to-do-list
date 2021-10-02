import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    //this.deleteFunction = this.deleteFunction.bind(this)
  }
  
  
  addTask = (e) => {
    e.preventDefault()
    let taskValue = document.getElementById("task").value;
    //console.log(taskValue)
    this.setState({
      tasks: [...this.state.tasks, taskValue]
    })
    document.getElementById("inputArea").reset();
    //console.log(this.state)
  }
  
  deleteFunction = (e) => {
    //console.log(e)
    this.setState({
      tasks: this.state.tasks.filter(task => task !== e)
    })
    }
  render() {
  return (
   <div id="wrapper">
   <div id="banner">
      <h1>To Do List</h1>
    </div>
    <div id="listArea">
    <form id="inputArea" onSubmit={this.addTask}>
    <input id="task" type="text" placeholder="input task here!" required/>
    <button type="submit">Add</button>
    </form>
    <div id="list">
      <ul>
    {this.state.tasks.map((e) => <li key={e} id={e}><div className="bar"><Pad text={e} /><div className="deleteX" onClick={() => {this.deleteFunction(e)}}>X</div></div></li>) }
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
      <div className="toDoBlock">
        {text}
      </div>
    )
  }
}

export default App;
