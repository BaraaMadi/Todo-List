import React, { Component } from 'react';

class AddItems extends Component {
  constructor(){
    super();
    this.state= {
        task: '',
        completed: false
    }
  }
  handelChange = (e) => {
      this.setState({
          [e.target.id] : e.target.value
      })
  }
  handelSubmit = (e) => {
      e.preventDefault();
      this.setState({ task: '', completed: false});
      this.props.additems(this.state);

  }
  render() {
    return (
      <div className="add-mylist">
          <form onSubmit={this.handelSubmit}>
          <input type="text" placeholder="Task.." id="task" onChange={this.handelChange} value={this.state.task}/>
          <input type="submit" value="submit"/>
          </form>
      </div>
    );
  }
}

export default AddItems;
