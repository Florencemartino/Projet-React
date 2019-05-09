import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todo/TodoList';

class App extends Component {
  render () {
    return (
      <div className="container">
        <h1 align="center">Ma Todo-list</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
