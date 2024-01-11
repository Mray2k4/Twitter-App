import { useState } from "react";
import './App.css';
import NavScrollExample from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Retweets from './components/Retweets';
import TweetBox from './components/TweetBox';

function App() {
  console.log(window.location)
  let component
  switch (window.location.pathname) {
    case '/Home': 
      component = <Home/>
      break
    case '/Retweets': 
      component = <Retweets/>
      break
  }


function api() {
  fetch('/api/tweets')           //api for the get request
  .then(res => res.json())
  .then(function(data){
	console.log(data)
  });
}
  
return (
  <div className="App">
    <header className="App-header">
      <NavScrollExample/>
    <h1>Twitter Showcase</h1>
      {component}
     </header>
    
  </div>
);
}

export default App;