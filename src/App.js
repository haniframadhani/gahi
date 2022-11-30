import './css/style.css';
import Card from './component/Card';
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
function App() {
  const [bg, setBg] = useState('');

  return (
    <div className="App" style={{
      backgroundImage: `url(${bg})`
    }}>
      <Helmet>
        <title>GAHI | Gambar Astronomi Hari Ini</title>
        <meta name="description" content="Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi." />
        <meta name='keyword' content='apod, astronomy, astronomy picture of the day, astronomi, gambar luar angkasa, astrofotografi, gambar astronomi hari ini' />
        <meta property="og:url" content="https://gahi.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GAHI | Gambar Astronomi Hari Ini" />
        <meta property="og:description" content="Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi." />
        <meta property="og:image" content={`${bg}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gahi.netlify.app" />
        <meta property="twitter:url" content="https://gahi.netlify.app/" />
        <meta name="twitter:title" content="GAHI | Gambar Astronomi Hari Ini" />
        <meta name="twitter:description" content="Jelajahi alam semesta dengan gambar dan video astronomi yang luar biasa yang berbeda setiap harinya dengan penjelasan dari para pakar astronomi." />
        <meta name="twitter:image" content={`${bg}`} />
      </Helmet>
      <div className='cover-background'>
        <Card setBg={setBg}></Card>
      </div>
    </div >
  );
}

export default App;
