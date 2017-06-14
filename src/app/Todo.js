import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props) {
    super(props);
    console.log(this.constructor.name);

    this.state = {
      value: '',
      items: ['task #1', 'task #2', 'task #3']
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value.toUpperCase()});
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.items);
    let items = [...this.state.items, this.state.value];
    console.log(items);
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

      <h3> Todo List App </h3>
        <ul>
          {this.state.items.map((item, i) => <li><code id={i}> {item} </code></li>)}
        </ul>
      </div>
    );
  }
}
