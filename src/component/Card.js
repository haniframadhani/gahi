import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Footer from './Footer';
import axios from 'axios';
import { DateTime } from 'luxon';

export default function Card({ setBg }) {
  const hariIni = DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd');
  const [tanggalInput, setTanggalInput] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [judul, setJudul] = useState('');
  const [penjelasan, setPenjelasan] = useState('');
  const [judulTerjemahan, setJudulTerjemahan] = useState('');
  const [penjelasanTerjemahan, setPenjelasanTerjemahan] = useState('');
  const [tipe, setTipe] = useState('');
  const [kredit, setKredit] = useState('');
  const [url, setUrl] = useState('');
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('');

  const handleInput = e => {
    setTanggalInput(e.target.value);
  }

  const handleButton = () => {
    setCount(count + 1);
  }

  // ambil data dari api 
  useEffect(() => {
    let timer = setTimeout(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&thumbs=true&date=${tanggalInput}`)
        .then((response) => {
          setKredit(response.data.copyright);
          setTanggal(response.data.date);
          setPenjelasan(response.data.explanation)
          setTipe(response.data.media_type);
          setJudul(response.data.title);
          setUrl(response.data.url);
          tipe != 'video' ? setBg(response.data.url) : setBg(response.data.thumbnail_url);
        });
    }, 0);
    return () => clearTimeout(timer);
  }, [count]);

  // menerjemahkan judul dan penjelasan
  useEffect(() => {
    let timer = setTimeout(() => {
      axios.get(`https://api.mymemory.translated.net/get?q=${judul}&langpair=en|id&de=${process.env.REACT_APP_MYMEMORY_EMAIL}`)
        .then(response => {
          setJudulTerjemahan(response.data.responseData.translatedText);
          setStatus(response.data.responseStatus);
        });
      axios.get(`https://api.mymemory.translated.net/get?q=${penjelasan}&langpair=en|id&de=${process.env.REACT_APP_MYMEMORY_EMAIL}`)
        .then(response => {
          setPenjelasanTerjemahan(response.data.responseData.translatedText);
        });
    }, 300);
    return () => clearTimeout(timer);
  }, [judul, penjelasan]);

  // mengubah tanggal dari 2022-11-10 jadi 10 november 2022
  const time = DateTime.fromISO(tanggal);
  const waktu = time.setLocale('id').toLocaleString(DateTime.DATE_FULL);

  return (
    <div className='card'>
      {tipe != 'video' ? <img className='gambar' src={url} /> : <iframe className='video' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
      <div className='detail text-center'>
        <h1>Gambar Astronomi Hari Ini</h1>
        <form className='mt-2'>
          <input type="date" name="tanggal" id="tanggal" min='1995-06-16' max={hariIni} onChange={handleInput} value={tanggalInput.length != 0 ? tanggalInput : hariIni} />
          <a className='btn btn-cari' onClick={handleButton}>cari</a>
        </form>
        <p className='mt-2'>{waktu}</p>
        <h3 className='mt-2'>{status === 200 ? judulTerjemahan === '' ? judul : judulTerjemahan : judul}</h3>
        <p className='text-justify mt-1'>{status === 200 ? penjelasanTerjemahan === '' ? penjelasan : penjelasanTerjemahan : penjelasan}</p>
        <p className='mt-2'>Kredit Gambar &amp; Hak Cipta : {kredit}</p>
      </div>
      <Footer />
    </div>
  )
}