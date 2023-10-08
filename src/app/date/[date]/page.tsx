"use client";
import { SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchContent } from "@/redux/features/contentSlice";
import { DateTime } from 'luxon';
import Footer from "@/app/component/footer";
import Image from "next/image";

export default function Page({ params }: { params: { date: string } }) {
  const [date, setDate] = useState(params.date);
  const content = useAppSelector(state => state.content);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchcontent = async () => {
      await dispatch(fetchContent(params.date));
    }
    fetchcontent();
  }, [])
  const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDate(e.target.value);
  }
  const time = DateTime.fromISO(params.date);
  const waktu = time.setLocale('id').toLocaleString(DateTime.DATE_FULL);
  return (
    <div className="App" style={{
      backgroundImage: `url(${content.content.media_type != 'video' ? content.content.url : content.content.thumbnail_url})`
    }}>
      <div className='cover-background'>
        <div className='card'>
          {content.content.media_type != 'video' ? <Image src={content.content.hdurl} alt={content.content.title} width='1000' height='1000' style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }} quality={100} priority={true} /> : <iframe className='video' src={content.content.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
          <div className='detail text-center'>
            <h1>Gambar Astronomi Hari Ini</h1>
            <form className='mt-2'>
              <input type="date" name="tanggal" id="tanggal" min='1995-06-16' max={DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd')} onChange={handleInput} value={date.length != 0 ? date : params.date} />
              <a className='btn btn-cari' href={`/date/${date}`}>cari</a>
            </form>
            <p className='mt-2'>{waktu}</p>
            <h3 className='mt-2'>{content.content.title}</h3>
            <p className='text-justify mt-1'> {content.content.explanation} </p>
            <p className='mt-2'>Kredit Gambar &amp; Hak Cipta :  {content.content.copyright} </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}