import './Content.scss'

const Content = () => {
    return (
        <div className="content">
            <div className="content-container">
                <p className="content-title">Make beautiful landing pages easily.</p>
                <p className="content-text">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                <ul className="content-list">
                    <li className="content-list-item">50+ HTML Elements</li>
                    <li className="content-list-item">Bootstrap 4 Framework</li>
                    <li className="content-list-item">6 Month Support</li>
                    <li className="content-list-item">Lifetime Updates</li>
                </ul>
            </div>
            <img className="content-image" alt="product screenshot" src='./images/bg.png'></img>
        </div>
    )
}

export default Content