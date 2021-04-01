import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState('');

  // const fetchItem = async () => {
  //   const response = await fetch('https://us-central1-first-try-7d9af.cloudfunctions.net/app/api/read/2');
  //   const obj = await response.json();
  //   setItem(obj.item);
  // }

  return (
    <div className="App">
      <h1>heyoo</h1>
      {/* <button onClick={fetchItem}>Click ME!</button> */}
    </div>
  );
}

export default App;
