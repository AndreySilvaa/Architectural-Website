import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

// CSS
import './NavBar.css'
import { FaBars } from 'react-icons/fa'
import { FaWindowClose } from 'react-icons/fa'

const NavBar = () => {
  const [active, setActive] = useState('HOME')
  const [width, setWidth] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(false)

  // RESIZE

  useEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  const handleShow = () =>{
    setShowNav(!showNav)
  }

   // Hide Nav on Click
   
  
  return (
    <div>
       <nav className='nav'>
        {width < 1000 && <div className='icon-nav' onClick={handleShow}><FaBars/></div>} 
        <div className={showNav ? ('menuNav show') : ('menuNav')}>
          {width < 1000 && <div className='closeIcon' onClick={handleShow}><FaWindowClose/></div>}
          <Link to='/' onClick={(e) => setActive(e.target.text)} className={active === 'HOME' ? ('active') : ('not-active')}>HOME</Link>
          <Link to='/about' onClick={(e) => setActive(e.target.text)} className={active === 'ABOUT' ? ('active') : ('not-active')}>ABOUT</Link>
          <Link to='/contact' onClick={(e) => setActive(e.target.text) } className={active === 'CONTACT' ? ('active') : ('not-active')}>CONTACT</Link>
        </div>
        {showNav && <div className='darken'></div>}
       </nav>
    </div>
  )
}

export default NavBar