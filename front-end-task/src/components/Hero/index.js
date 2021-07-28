import Button from '../Button'
import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <span className="hero-title">
                    Get your next landing page.
                </span>
                <span className="hero-text">
                    Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
                </span>
                <Button buttonStlye='btn--secondary' type='hero-button'>Start 14 Days Free Trial</Button>
                <span className="hero-disclaimer">No credit card required</span>
                <img className="hero-image" alt="product item" src='./images/bitmap.png'></img>
            </div>
        </div>
    )
}

export default Hero