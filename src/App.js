import './css/style.css';
import Card from './component/Card';
import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import axios from 'axios';
function App() {
  const [bg, setBg] = useState('');

  // useEffect(() => {
  //   axios.get(`https://api.mymemory.translated.net/get?q=${title}&langpair=en|id&de=${process.env.REACT_APP_MYMEMORY_EMAIL}`)
  //     .then((response) => {
  //       setJudul(response.data.responseData.translatedText);
  //       setStatus(response.data.responseStatus);
  //     });
  // }, [title]);

  // useEffect(() => {
  //   axios.get(`https://api.mymemory.translated.net/get?q=${desc}&langpair=en|id&de=${process.env.REACT_APP_MYMEMORY_EMAIL}`)
  //     .then((response) => {
  //       setPenjelasan(response.data.responseData.translatedText);
  //       setStatus(response.data.responseStatus);
  //     });
  // }, [desc]);

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
