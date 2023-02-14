import NavBar from 'components/NavBar.js'
import ContactMe from 'components/ContactMe.js'

const Layout = ( { children }) => {
    return (
        <div className='h-screen w-screen bg-gradient-to-b from-[#9b9898] to-[#535d6a]'>
<section className='overflow-hidden z-5'>
      <NavBar />
      </section>
      
      { children }

      <section className=" overflow-clip">
        <ContactMe />
      </section>

      </div>
    );
}

export default Layout