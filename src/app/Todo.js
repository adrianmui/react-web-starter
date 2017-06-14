import React, { Component } from 'react';
import _ from 'underscore';

export class Todo extends Component {
  constructor(props) {
    super(props);
    console.log(this.constructor.name);

    this.state = {
      editItem: '',
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
    let items = [...this.state.items, this.state.value];
    this.setState({items: items})
  }

  handleEditing(edited, e) {
    this.setState({editItem: e.target.value, items: _.map(this.state.items, item => (item == edited) ? e.target.value : item )});
  }

  handleDoneEdit() {
    this.setState({editItem: ''});
  }

  handleStartEdit(item){
    this.setState({editItem: item});
  }

  handleMoveUp(item, i) {
      let temp = _.without(this.state.items, item);
      temp.splice(i - 1, 0, item);
      this.setState({items: temp});
  }

  handleMoveDown(item, i) {
      let temp = _.without(this.state.items, item);
      temp.splice(i + 1, 0, item);
      this.setState({items: temp});
  }

  handleDelete(item) {
    this.setState({items: _.without(this.state.items, item)})
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

      <h3> Todo List App in React </h3>
        <ul>
          {this.state.items.map((item, index) =>
            <li>
              <span>
              {
                (this.state.editItem.length > 0 && this.state.editItem == item) &&
                <span>
                  <input type="text" value={item} onChange={this.handleEditing.bind(this, item)}/>
                  <button onClick={this.handleDoneEdit.bind(this)}>Done</button>
                </span>
              }
              {
                (this.state.editItem != item) &&
                <span>
                  <code> {item} </code>
                  <button onClick={this.handleStartEdit.bind(this, item)}>Edit</button>
                </span>
              }
                <button onClick={this.handleDelete.bind(this, item)}>Del</button>
                <button onClick={this.handleMoveUp.bind(this, item, index)}
                        disabled={index == 0}>Up</button>
                <button onClick={this.handleMoveDown.bind(this, item, index)}
                        disabled={index == this.state.items.length - 1}>Down</button>
              </span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
