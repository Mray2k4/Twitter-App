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

const [openTweet, setOpenTweet] = useState(false);

function btnOpen() {
  setOpenTweet(true)
}
  
  return (
    <div className="App">
      <header className="App-header">
        <NavScrollExample/>
      <h1>Twitter Showcase</h1>
      {component}
      <button className="openTweetBtn"
       onClick={btnOpen}
        >Open</button>
      {openTweet && <TweetBox closeTweet={setOpenTweet}/>}
      </header>
      
      <Retweets
      openTweet={openTweet}
      setOpenTweet={setOpenTweet} 
      />
    </div>
  );
}

export default App;