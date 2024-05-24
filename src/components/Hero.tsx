import Herobg from "../assets/Hero-bg.png"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero" style={{ background: `url(${Herobg}) no-repeat center/cover`, height: "100vh" }}>
            <div className="container">
                <div className="hero-content">
                    <h1>Best food for
                        your taste</h1>
                    <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                    <div>
                        <button className="button brown">Book A Table</button>
                        <button className="button">Explore Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero