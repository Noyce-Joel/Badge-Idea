import '../styles/globals.css'
import NavBar from '/components/NavBar'
import ContactMe from '/components/ContactMe'
import { AnimatePresence, Wait } from 'framer-motion'
import Button from '/components/button'


export default function App({ Component, pageProps, router }) {
  return( 
    <div className='sm:overflow-clip h-screen w-screen relative overflow-hidden bg-gradient-to-b from-[#9b9898] to-[#535d6a]'>
      
      <Component {...pageProps} />
      
      <section className='overflow-hidden z-50'>
      <NavBar />
      </section>
      
      
      <section className="overflow-hidden">
        <ContactMe />
      </section>
     
  </div>
  )
}
