import './css/style.css';
import Card from './component/Card';
import React, { useState } from 'react';
function App() {
  const [bg, setBg] = useState('');

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
