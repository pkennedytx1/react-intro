import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './HelloWorld';

function App() {
  const name = 'Patrick';
  return (
    <div className="App">
      <HelloWorld myName={name}/>
    </div>
  );
}

export default App;
