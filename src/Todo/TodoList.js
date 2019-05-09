import React, { Component } from 'react';

class TodoList extends Component {
  constructor () {
    super ();
      this.state = {
        userInput: '',
        items: []
      };
  }

  onChange(event) {
    this.setState ({
      userInput: event.target.value
    });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState ({
      userInput: '',
      items: [...this.state.items, this.state.userInput]
    });
  }

  renderTodo() {
    return this.state.items.map((item) => {
      return (
          <div key={item} class="space-between-items">
            {item} | <button onClick={this.deleteTodo.bind(this)}> X </button>
            <i class="fa fa-trash-o" aria-hidden="true"></i>

          </div>
        )
    })
  }

  deleteTodo(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);
    array.splice(index, 1);
    this.setState({
      items: array
    });
  }


  render () {
    return (
      <div>
          <form align="center">
            <input
              value={this.state.userInput}
              text="text"
              placeholder="Renseigner un item"
              onChange={this.onChange.bind(this)}
            />
            <button type="button" class="btn btn-success" onClick={this.addTodo.bind(this)} > Ajouter </button>
          </form>
          <div class="list-item">
            {this.renderTodo()}
          </div>
      </div>
    );
  }
}

export default TodoList;
