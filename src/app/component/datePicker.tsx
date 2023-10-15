'use client'
import { DateTime } from 'luxon';
import { SetStateAction, useState } from 'react';


export default function DatePicker(params: { date: string }) {
  const [date, setDate] = useState(params.date);

  const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDate(e.target.value);
  }
  return (
    <form className='mt-2'>
      <input type="date" name="tanggal" id="tanggal" min='1995-06-16' max={DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd')} onChange={handleInput} value={date.length != 0 ? date : params.date} />
      <a className='btn btn-cari' href={`/date/${date}`}>cari</a>
    </form>
  )
}