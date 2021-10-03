import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completed: []
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

  completeFunction = (e) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== e),
      completed: [...this.state.completed, e] 
    })
  }

  clearAll = () => {
    this.setState({
      tasks: [],
      completed: []
    })
  }
  render() {
  return (
   <div id="wrapper">
   <div id="banner">
      <h1>To Do List</h1>
    </div>
    <form id="inputArea" onSubmit={this.addTask}>
    <input id="task" type="text" placeholder="input task here!" required/>
    <button type="submit">Add</button>
    </form>
    <div id="listArea">
    
    <div id="list">
      <h2>To Do:</h2>
      <ul>
    {this.state.tasks.map((e) => <li key={e} id={e}><div className="bar"><Pad text={e} />
    <div className="yes" onClick={() => {this.completeFunction(e)}}>&#10003;</div>
    <div className="deleteX" onClick={() => {this.deleteFunction(e)}}>X</div></div></li>) }
    </ul>
    </div>
    <div id="complete">
    <h2>Completed:</h2>
    <ul>
    {this.state.completed.map((e) => <li key={e} id={e}><div className="bar"><Pad text={e} /></div></li>)}
    </ul>
    </div>
    </div>
    <button id="clear" onClick={this.clearAll}>Clear All</button>
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
