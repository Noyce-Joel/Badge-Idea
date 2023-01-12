import '../styles/globals.css'
import NavBar from '/components/NavBar'
import ContactMe from '/components/ContactMe'
import { AnimatePresence, Wait } from 'framer-motion'


export default function App({ Component, pageProps, router }) {
  return( 
    <div className='h-screen w-screen overflow-hidden bg-gradient-to-b from-[#9b9898] to-[#535d6a]'>
      <AnimatePresence >
      <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <section className=''>
      <NavBar />
      </section>
      <section className="">
        <ContactMe />
      </section>
     
  </div>
  )
}
