import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));

// logging the loadTime only when the window is loaded
window.onload = function(){
    setTimeout(function(){
      var t = window.performance.timing;
      console.log("Loading time taken:" + (t.loadEventEnd - t.navigationStart).toString());      
    }, 0);
  }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// use this to not refresh page every time. Instead only the application reloads and the logs stay
// reloading does not happen and resources are not loaded again 
// most importantly tha application state remains, any windows opened or tabs clicked stay
if (module.hot) {
    module.hot.accept();
    }