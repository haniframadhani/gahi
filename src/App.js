import './css/style.css';
import Card from './component/Card';
import React, { useState } from 'react';
function App() {
  const [bg, setBg] = useState('');
  console.log(process.env.REACT_APP_NASA_API_KEY)
  return (
    <div className="App" style={{
      backgroundImage: `url(${bg})`
    }}>
      <div className='cover-background'>
        <Card setBg={setBg}></Card>
      </div>
    </div >
  );
}

export default App;
