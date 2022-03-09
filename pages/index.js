import Head from 'next/head'
import About from '../components/sections/About'
import Blog from '../components/sections/Blog'
import Features from '../components/sections/Features'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
import Pricing from '../components/sections/Pricing'
import Nav from './../layout/Nav'
export default function Home() {
  return (
    <>
      <Head>
        <title>IOTA Clone</title>
        <meta
          name="description"
          content="Clone for IOTA Website using Next.js"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Blog />
      <Footer />
    </>
  )
}
