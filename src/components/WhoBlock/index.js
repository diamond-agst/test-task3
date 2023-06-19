import React from "react";
import "./styles.scss"
import star from "../../assets/images/star.svg"
import who1 from "../../assets/images/who1.png"
import who2 from "../../assets/images/who2.png"
import who3 from "../../assets/images/who3.png"
import who4 from "../../assets/images/who4.png"
import whoBack from "../../assets/images/whoBack.png"

const WhoBlock = () => {
    return(
        <div className="whoWrapper">
            <div className="whoContainer">
                <div className="whoHeading">
                    <div>
                        <p>Для Кого</p>
                    </div>
                    <h1>Кто может<br/> принять участие? </h1>
                    <img width={130} src={star}/>
                </div>
                <div className="whoTextBlock">
                    <div data-aos="fade-right" className="whoLeftBlock">
                        <div className="whoImages">
                            <img src={who1}/>
                            <img src={who2}/>
                            <img src={who3}/>
                            <img src={who4}/>
                        </div>
                        <div className="whoSubtitle">
                            <p>Школьники 8-18 лет из<br/> Хабаровска и Хабаровского<br/> края </p>
                        </div>  
                    </div>
                    <div data-aos="fade-left" className="whoTextContent">
                        <p>Для участия в чемпионате достаточно<br/> заполнить форму на сайте.<br/> В этом тебе могут помочь твои<br/> родители. </p>
                        <p>После оформления заявки с тобой<br/> свяжутся организаторы и расскажут о<br/> дальнейших действиях. </p>
                    </div>
                </div>
                <div className="whoMessages">
                    <div data-aos="zoom-in" className="whoMessageBlock">
                        <div className="whoMessage">
                            <p>Ты школьник?</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="whoMessageBlock" style={{justifyContent: "center"}}>
                        <div className="whoMessage">
                            <p>Хочешь быть финансово грамотным?</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="whoMessageBlock" style={{justifyContent: "flex-end"}}>
                        <div className="whoMessage">
                            <p>Регистрируйся на чемпионат! </p>
                        </div>
                    </div>
                </div>
                <div className="whoButton">
                    <button>
                        <p>Принять участие</p>
                    </button>
                    <img src={star}/>
                </div>
            </div>
            <img className="whoBack" src={whoBack}/>
        </div>
    )
}

export default WhoBlock;