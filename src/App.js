import './App.css';
import NavScrollExample from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Retweets from './components/Retweets';

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