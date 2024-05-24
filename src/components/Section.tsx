import "./Section.css"
import Tea from "../assets/tea 1.png"
import Ris from "../assets/Ris.png"
import Sok from "../assets/Sok.png"
import Ceks from "../assets/Ceks.png"

const Section = () => {
    return (
        <>
            <div className="sectio-bg">
                <div className="section">
                    <h2>Browse Our Menu</h2>
                    <div className="block">
                        <div className="card-1">
                            <div className="Tea">
                                <img src={Tea} alt="" />
                            </div>
                            <h3>Breakfast</h3>
                            <h4>In the new era of technology we
                                look in the future with certainty
                                and pride for our life.</h4>
                            <button className="button-menu">Explore Menu</button>
                        </div>

                        <div className="card-2">
                            <div className="Tea">
                                <img src={Ris} alt="" />
                            </div>
                            <h3>Main Dishes</h3>
                            <h4>In the new era of technology we
                                look in the future with certainty
                                and pride for our life.</h4>
                            <button className="button-menu">Explore Menu</button>
                        </div>

                        <div className="card-3">
                            <div className="Tea">
                                <img src={Sok} alt="" />
                            </div>
                            <h3>Drinks</h3>
                            <h4>In the new era of technology we
                                look in the future with certainty
                                and pride for our life.</h4>
                            <button className="button-menu">Explore Menu</button>
                        </div>

                        <div className="card-4">
                            <div className="Tea">
                                <img src={Ceks} alt="" />
                            </div>
                            <h3>Desserts</h3>
                            <h4>In the new era of technology we
                                look in the future with certainty
                                and pride for our life.</h4>
                            <button className="button-menu">Explore Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section