import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogElement from './BlogElement'

class App extends Component {

  render(){
  
    var blogElement= new BlogElement(1,'abasdacdef');
    
    
    return (
      <div className="App">
        <h1> {blogElement.content} </h1>
      </div>
    );
  }
}

export default App;
