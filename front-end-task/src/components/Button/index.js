import { Link } from "react-router-dom"
import './Button.scss'

const STYLE = ['btn--primary', 'btn--secondary']

const Button = ({children, type, onClick, buttonStlye}) => {

    const checkButtonStlye = STYLE.includes(buttonStlye) ? buttonStlye : STYLE[0]

    return(
        <>
            <Link to='#' className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStlye} ${type}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        </> 
    )
}

export default Button