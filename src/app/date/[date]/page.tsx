import { FC } from 'react';
import { DateTime } from 'luxon';
import Footer from "@/app/component/footer";
import Image from "next/image";
import axios from "axios";
import DatePicker from '@/app/component/datePicker';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next'

export const revalidate = 3600 * 24

interface PageProps {
  params: {
    date: string
  }
}

async function getContent(date: string) {
  const content = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&thumbs=true&date=${date}`)
    .then(Response => Response.data)
    .catch(e => {
      notFound()
    });
  let translatedExplanation = '';
  let translatedTitle = '';
  try {
    translatedExplanation = await axios.get(`https://api.mymemory.translated.net/get?q=${content.explanation}&langpair=en|id&de=${process.env.MYMEMORY_EMAIL}`)
      .then(Response => Response.data.responseData.translatedText);
  } catch (e) {
    translatedExplanation = '';
  }
  try {
    translatedTitle = await axios.get(`https://api.mymemory.translated.net/get?q=${content.title}&langpair=en|id&de=${process.env.MYMEMORY_EMAIL}`)
      .then(Response => Response.data.responseData.translatedText);
  } catch (e) {
    translatedTitle = '';
  }
  const data = {
    ...content,
    translatedExplanation,
    translatedTitle,
  }
  return data;
}

type Props = {
  params: { date: string }
}

type Content = {
  date: string,
  title: string,
  copyright: string,
  url: string,
  hdurl: string,
  media_type: string,
  explanation: string,
  thumbnail_url: string,
  translatedTitle: string,
  translatedExplanation: string
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const tanggal = params.date;
  let content: Content;
  content = await getContent(tanggal);
  return {
    title: content.translatedTitle.length === 0 ? content.title : content.translatedTitle,
    description: content.translatedExplanation.length === 0 ? content.explanation : content.translatedExplanation,
    openGraph: {
      images: ['/opengraph-image.jpg', { url: content.media_type != 'video' ? content.url : content.thumbnail_url }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.translatedTitle.length === 0 ? content.title : content.translatedTitle} |`,
      description: content.translatedExplanation.length === 0 ? content.explanation : content.translatedExplanation,
      images: ['/opengraph-image.jpg', { url: content.media_type != 'video' ? content.url : content.thumbnail_url }]
    }
  }
}

const Page: FC<PageProps> = async ({ params }) => {
  let content: Content = await getContent(params.date);
  const time = DateTime.fromISO(params.date);
  const waktu = time.setLocale('id').toLocaleString(DateTime.DATE_FULL);
  return (
    <div className="App" style={{
      backgroundImage: `url(${content.media_type != 'video' ? content.url : content.thumbnail_url})`
    }}>
      <div className='cover-background'>
        <div className='card'>
          {content.media_type != 'video' ? <Image src={content.hdurl} alt={content.title} width='1000' height='1000' style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }} quality={100} priority={true} /> : <iframe className='video' src={content.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
          <div className='detail text-center'>
            <h1>Gambar Astronomi Hari Ini</h1>
            <DatePicker dateParam={params.date} />
            <p className='mt-2'>{waktu}</p>
            <h3 className='mt-2'>{content.translatedTitle.length === 0 ? content.title : content.translatedTitle}</h3>
            <p className='text-justify mt-1'> {content.translatedExplanation.length === 0 ? content.explanation : content.translatedExplanation} </p>
            <p className='mt-2'>Kredit Gambar &amp; Hak Cipta : {content.copyright} </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Page;