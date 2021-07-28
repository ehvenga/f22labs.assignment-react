import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from '../../config'
import Button from '../Button'
import Dropdown from '../Dropdown'
import './Navbar.scss'

const Navbar = () => {

    const [ click, setClick ] = useState(false)
    const [ dropdown, setDropdown ] = useState(false)
    // const [ mobileDropdown, setMoobileDropdown ] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    // const mobileDropMenu = () => setMoobileDropdown(!mobileDropdown)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(false)
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to={PATHS.HOME} className="navbar-logo">
                    Omega
                </Link>
                <div className="navbar-icon" onClick={handleClick}>
                    <i className={click ? 'bi bi-x' : 'bi bi-list'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li 
                    className="nav-item" 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to={PATHS.HOME} className="nav-link" /*onClick={mobileDropMenu}*/>
                            Demos
                            <i class="bi bi-caret-down-fill"></i>
                        </Link>
                        {/* {mobileDropdown && <Dropdown />} */}
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to={PATHS.HOME} className="nav-link" onClick={closeMobileMenu}>
                            Pages
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={PATHS.HOME} className="nav-link" onClick={closeMobileMenu}>
                            Support
                        </Link>
                    </li>
                </ul>
                <Button
                buttonStlye='btn--primary'
                type='nav-button'
                >
                    Get Started
                </Button>
            </nav>
        </>
    )
}

export default Navbar