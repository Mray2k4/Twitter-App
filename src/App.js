import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
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


// function api() {
//   fetch('/api/tweets')           //api for the get request
//   .then(res => res.json())
//   .then(function(data){
// 	console.log(data)
//   });
// }


useEffect(() => {
async function apiList() {
  const url = 'http://localhost:3001/api/tweets'
  const token = 'AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAQP4Qf6PfN0NeU4L5keo%2B7kae%2Fs0%3DEQIp2W7jkVldFBLvOOFtSJXl2vWEe3f1J1STKMTyWEbsogNYfE'
  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}`}
  })
  console.log(res.data)
};

  apiList();
}, [])


  
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