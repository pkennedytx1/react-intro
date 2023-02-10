import './App.css';
import { HelloWorld } from './HelloWorld';
import { NameInput } from './NameInput';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Patrick')
  return (
    <div className="App">
      <HelloWorld myName={name} />
      <NameInput setName={setName} />
    </div>
  );
}

export default App;
