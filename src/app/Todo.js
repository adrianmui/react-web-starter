import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    console.log(this.constructor.name);

    this.state = {
      value: '',
      items: ['task #1', 'task #2', 'task #3']
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value.toUpperCase()});
  }

  handleClick(e) {
    e.preventDefault();
    let items = [...this.state.items, this.state.value];
    this.setState({items: items})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <label>
          Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
