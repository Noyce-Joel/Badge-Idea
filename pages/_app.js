import '../styles/globals.css'
import NavBar from '/components/NavBar'
import ContactMe from '/components/ContactMe'
import { AnimatePresence, Wait } from 'framer-motion'
import Button from '/components/button'
import Layout from '../components/Layout'



export default function App({ Component, pageProps, router }) {
  return( 
    <div className=''>
      <Layout> 
      <Component {...pageProps} />
      </Layout>
     
     
  </div>
  )
}
