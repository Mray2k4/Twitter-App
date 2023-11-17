import './App.css';
import NavScrollExample from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(window.location)
  return (
    <div className="App">
      <header className="App-header">
        <NavScrollExample/>
      <h1>Twitter Showcase</h1>
      </header>

    </div>
  );
}

export default App;
