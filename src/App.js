import React, { Component } from 'react';
import './App.css';
import BlogElement from './BlogElement'
import AppMarkdown from "./assets/blogposts/example.md"
import ReactMarkdown from 'react-markdown'; 

/*  
let newPost = new BlogElement(id,contents);
id++;
blogPosts.push(newPost);
*/





class App extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
    
  render(){    
      const { markdown } = this.state;
      return <ReactMarkdown source={markdown} />;
  };
};


export default App;
