'use client'
import { DateTime } from 'luxon';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';


export default function DatePicker({ dateParam }: { dateParam: string }) {
  const [date, setDate] = useState(dateParam);

  const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDate(e.target.value);
  }
  return (
    <form className='mt-2'>
      <input type="date" name="tanggal" id="tanggal" min='1995-06-16' max={DateTime.now().setZone('America/New_York').toFormat('yyyy-MM-dd')} onChange={handleInput} value={date.length != 0 ? date : dateParam} />
      <Link className='btn btn-cari' href={`/date/${date}`}>cari</Link>
    </form>
  )
}