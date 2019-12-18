import React, { Component } from 'react';
import './App.css';
import BlogElement from './BlogElement'
//import AppMarkdown from "./assets/blogposts/example.md"
//import ReactMarkdown from 'react-markdown'; 

/*  
let newPost = new BlogElement(id,contents);
id++;
blogPosts.push(newPost);
*/

let blogPosts =  [];
blogPosts.push(new BlogElement(1,"title ac","abc",new Date(), ["a","b","c"]));
blogPosts.push(new BlogElement(2,"title df","def",new Date(), ["d","e","f"]));
blogPosts.push(new BlogElement(3,"title gi","ghi",new Date(), ["g","h","i"]));


class App extends Component {
  
  constructor() {
    super();

    this.state = {
      blogPosts, // is shorthand for blogPosts : blogPosts since the name is same

     
    };

    this.onDismiss = this.onDismiss.bind(this);


    //this.state = { markdown: '' };
  }
  onDismiss=(id)=> {
    const isNotId = item => item.id !== id;
    const newPosts = this.state.blogPosts.filter(isNotId);
    this.setState({ blogPosts: newPosts });
  }

  /*
  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
  */
 
  render(){    

      return ( // returns a div element with a transformed list of blogElements   
        <div className="App">
          {this.state.blogPosts.map((item)=>{  // the transformation of blogElements to react components
                      
                        return (
                          
                            <div key = {item.id}>
                            <span>
                              <h1>{item.title}</h1>
                            </span>
                            <span>{item.content}</span><br/>
                            <span>{item.date.toString()}</span><br/>
                            <ol>{item.tags.map(function(tag){  // tags is also a list of tags
                                const h3Style={color:'#0080ff'}; // pass a style object.. better to use a className
                              return (<li style={h3Style}> {tag} </li>  );})}</ol>
                            <span>
                              <button
                              onClick={()=> {this.onDismiss(item.id)}}
                              type="button"
                              >
                              Dismiss
                              </button>
                            </span>
                            
                            </div>

                            
                        );
                      })
          }          
        </div>
      );
      
  };
};


export default App;
