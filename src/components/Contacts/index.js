import React from "react";
import "./styles.scss"
import logo from "../../assets/images/logo.svg"
import cup from "../../assets/images/cup.png"
import contactsInvitation from "../../assets/images/contactsInvitation.png"
import vk from "../../assets/images/Vk.png"

const Contacts = () => {
    return(
        <div className="contactsWrapper">
            <div id="contacts" data-aos="fade-right" className="contactsHeading">
                <div>
                    <img src={logo}/>
                    <h1>ФИНСГРАМ</h1>
                </div>
            </div>
            <div className="contactsContainer">
                <div data-aos="fade-right" className="contactsInfo">
                    <h2>Хабаровский край, г. Хабаровск</h2>
                    <h1>8 (922) 777- 40-14</h1>
                    <h2>club@finsgram.ru</h2>
                    <div>
                        <img src={vk}/>
                    </div>
                </div>
                <div data-aos="fade-left" className="contactsImages">
                    <div>
                        <img src={cup}/>
                    </div>
                    <div className="contactsInvitation">
                       <p>Ждём тебя<br/> на чемпионате!</p> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contacts;