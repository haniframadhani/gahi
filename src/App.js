import './css/style.css';
import Card from './component/Card';
import React, { useState } from 'react';
import { DateTime } from 'luxon';
function App() {
  const [bg, setBg] = useState('');
  const [tanggal, setTanggal] = useState('');
  const time = DateTime.fromISO(tanggal);
  const waktu = time.setLocale('id').toLocaleString(DateTime.DATE_FULL);
  return (
    <div className="App" style={{
      backgroundImage: `url(${bg})`
    }}>
      <div className='cover-background'>
        <Card setBg={setBg} waktu={waktu} setTanggal={setTanggal}></Card>
      </div>
    </div >
  );
}

export default App;
