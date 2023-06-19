import React, {useState} from "react";
import "./styles.scss"
import logo from "../../assets/images/logo.svg"
import close from "../../assets/images/close.png"
import burger from "../../assets/images/burger.png"
import { Link } from "react-scroll";

const Header = () => {
    const[showMenu, setShowMenu] = useState(false)

    return(
        <div className="headerWrapper">
            <div className="logoBlock">
                <img src={logo}/>
                <h1>ФИНСГРАМ</h1>
            </div>
            <div className="headerMenuBlock">   
                <div className="headerMenu">
                    <Link smooth={true} to="about">
                        <h2>О чемпионате</h2>
                    </Link>
                    <Link smooth={true} to="news">
                        <h2>Новости</h2>
                    </Link>
                    <Link smooth={true} to="contacts">
                        <h2>Контакты</h2>
                    </Link>
                    
                </div>
                <div className="headerReg">
                    <button>
                        <h2>Регистрация</h2>
                    </button>
                </div>
            </div>
            <img width={30} className="burgerIcon" onClick={() => setShowMenu(!showMenu)} src={burger}/>
            <div className={showMenu ? "mobileMenu openMenu" : "mobileMenu"}>
                <div className="mobileHeading">
                    <div>
                        <img src={logo}/>
                        <h1>ФИНСГРАМ</h1>
                    </div>
                    <img onClick={() => setShowMenu(!showMenu)} width={30} src={close}/>
                </div>
                <div className="mobileMenuList">
                    <Link onClick={() => setShowMenu(!showMenu)} smooth={true} to="about">
                        <h2>О чемпионате</h2>
                    </Link>
                    <Link onClick={() => setShowMenu(!showMenu)} smooth={true} to="news">
                        <h2>Новости</h2>
                    </Link>
                    <Link onClick={() => setShowMenu(!showMenu)} smooth={true} to="contacts">
                       <h2>Контакты</h2> 
                    </Link>
                    
                </div>
                <div className="mobileMenuButton">
                    <div className="mobileMenuReg">
                        <button>
                            <h2>Регистрация</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;