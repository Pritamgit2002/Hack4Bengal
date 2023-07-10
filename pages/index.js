import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Contact from '@/components/Contact'
import DoctorList from '@/components/DoctorList'
import DoctorSearch from '@/components/DoctorSearch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diseases Detector</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    
    <Contact />
    </div>
  )
}
