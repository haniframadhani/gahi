import './css/style.css';
import Card from './component/Card';
import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import axios from 'axios';
function App() {
  const [bg, setBg] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [judul, setJudul] = useState('');
  const [penjelasan, setPenjelasan] = useState('');
  const [status, setStatus] = useState(0);
  const time = DateTime.fromISO(tanggal);
  const waktu = time.setLocale('id').toLocaleString(DateTime.DATE_FULL);

  useEffect(() => {
    axios.get(`https://api.mymemory.translated.net/get?q=${title}&langpair=en|id&de=${process.env.REACT_APP_MYMEMORY_EMAIL}`)
      .then((response) => {
        setJudul(response.data.responseData.translatedText);
        setStatus(response.data.responseStatus);
        console.log("status : ", response.data.responseStatus)
      });
    axios.get(`https://api.mymemory.translated.net/get?q=${desc}&langpair=en|id&de=${process.env.REACT_APP_MYMEMORY_EMAIL}`)
      .then((response) => {
        setPenjelasan(response.data.responseData.translatedText);
        setStatus(response.data.responseStatus);
        console.log("status : ", response.data.responseStatus)
      });
  }, [title, desc]);

  return (
    <div className="App" style={{
      backgroundImage: `url(${bg})`
    }}>
      <div className='cover-background'>
        <Card setBg={setBg} waktu={waktu} judul={judul} penjelasan={penjelasan} setTanggal={setTanggal} setDesc={setDesc} setTitle={setTitle} status={status} ></Card>
      </div>
    </div >
  );
}

export default App;
