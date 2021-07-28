import BrandSection from "../../components/BrandSection"
import Content from "../../components/Content"
import Feature from "../../components/Feature"
import Hero from "../../components/Hero"
import ContentTwo from "../../components/ContentTwo"
import Navbar from "../../components/Navbar"
import './LandingPage.scss'
import Testimonial from "../../components/Testimonial"
import Pricing from "../../components/Pricing"
import FAQ from "../../components/FAQ"

const LandingPage = () => {
    return (
        <div className="hero">
            <Navbar />
            <Hero />
            <Feature />
            <BrandSection />
            <Content />
            <ContentTwo />
            <Testimonial />
            <Pricing />
            <FAQ />
        </div>
    )
}

export default LandingPage