import { useState } from "react"
import { menuItems } from "./menuItems"
import { Link } from 'react-router-dom'
import './Dropdown.scss'

const Dropdown = () => {

    const [ click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <div className="dropdown">
            <ul
            onClick = {handleClick}
            className = {click ? 'dropdown-menu active' : 'dropdown-menu'}
            >
                {menuItems.map((item, idx) => {
                    return(
                        <li key={idx}>
                            <Link 
                            className={item.cName} 
                            to={item.path}
                            onClick = {() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown