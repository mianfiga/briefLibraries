import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import Counter2 from './Counter2';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    fetch('datos.json')
    .then((response: any) => response.json())
    .then(d => setData(d));
    
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data.map((d: any) => `a vale: ${d.a} y b vale: ${d.b}`)}
        <Counter />
        <Counter2 />
      </header>
    </div>
  );
}

export default App;
