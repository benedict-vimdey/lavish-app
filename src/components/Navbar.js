import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function Navbar() {
    const [click, setClick]=useState(false)
    const [button, setButton] =useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <div>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                       <i className="fas fa-fingerprint" /> LAVISH
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <i className="fas fa-times"/> : <i className="fas fa-bars"/>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>          
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services                        
                            </Link>
                        </li>          
                        <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}> 
                                Products 
                            </Link>
                        </li>  
                        <li className="nav-btn">
                            {button ? (
                                <Link to='sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ) : (
                                <Link to='sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline ' buttonSize='btn--mobile'>SIGN UP</Button>
                                </Link>
                            )}
                        </li>              
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
