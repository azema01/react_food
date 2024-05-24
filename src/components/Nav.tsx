import { NavLink, Outlet } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

//
import Section from "./Section";
import Footer from "./Footer";
import Logo from "../assets/japanese-food.png";
import "./Nav.css";

const Nav = () => {
    return (
        <>
            <div className="Nav header-top" >
                <div className="email">
                    <div><FiPhone />(414) 857 - 0107</div>
                    <div><MdOutlineEmail />yummy@bistrobliss</div>
                </div>

                <div className="icons">
                    <div className="twitter"><CiTwitter /></div>
                    <div className="facebook"><FaFacebookF /></div>
                    <div className="instagram"><FaInstagram /></div>
                    <div className="github"><FaGithub /></div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="logo">
                    <img src={Logo} alt="" /> <p>Bistro Bliss</p>
                </div>
                <div className="menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/pages">Pages</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="header-btn">
                    <button className="btn">Book A Table</button>
                </div>
            </div>

            <div >
                <Outlet />
            </div>


            <Section />
            <Footer />

        </>
    )
}

export default Nav