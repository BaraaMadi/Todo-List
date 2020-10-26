import React, { Component } from 'react';
import ShowItems from './Components/ShowItems/ShowItems';
import AddItems from './Components/AddItems/AddItems';
import "./App.css";


class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }
  onDelete = (id) => {
    const tasks = this.state.items;
    const afterDelete = tasks.filter( task => task.id !== id);
    this.setState({
      items: afterDelete
    })

  }
  onAddItems = (item) => {
    item.id = Math.random();
    if( item.task !== ""){
      const MargenList = this.state.items;
    MargenList.push(item);
    this.setState({ items:MargenList})
    }

  }
  toggleCompleted = (id) => {
    const items = this.state.items;
    const completeTask = items.map( item => {
      if(item.id === id) {
          this.setState({
            completed : true
          })
        }
        console.log(item)
       return item
    })
    console.log(items)
    return completeTask
  }
  // handelChecked = (id) => {
  //   const tasks = this.state.items;
  //   const checked = tasks.map( task => 
  //    {
  //     if( task.id === id){
  //       this.setState( {  completed: !task.completed  })
  //     }
  //     return task;
  //    }
  //    );
  //    return checked

  // }
  render() {
    return (
      <div className="App">
        <h1>TodO List</h1>
        <div className="list-banner">
          <AddItems additems={this.onAddItems} />
          <ShowItems  tasks={this.state.items} onDelete={this.onDelete} toggleCompleted={this.toggleCompleted} />
        </div>
      </div>
    )
   
  }
}

export default App
