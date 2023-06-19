import React from "react";
import "./styles.scss"
import star from "../../assets/images/star.svg"
import partners1 from "../../assets/images/partners1.png"
import partners2 from "../../assets/images/partners2.png"
import partners3 from "../../assets/images/partners3.png"
import partners4 from "../../assets/images/partners4.png"
import partners5 from "../../assets/images/partners5.png"
import partnersImage from "../../assets/images/partnersImage.png"

const Partners = () => {
    return(
        <div className="partnersWrapper">
            <div className="partnersTopBlock">
                <div className="partnersHeading">
                    <div className="partnersHeadingTop">
                        <div className="partnersSubtitle">
                            <div>
                                <p>поддержка</p>
                            </div>
                            <img width={138} src={star}/>
                        </div>
                        <div className="partnersMainHeading">
                            <h1>Партнёры</h1>
                        </div>
                    </div>
                    <div className="partnersHeadingBottom">
                        <h1>и Спонсоры</h1>
                    </div>
                </div>
                <div className="partnersBlocks">
                    <div data-aos="flip-up" className="partnersBlock">
                        <img src={partners1}/>
                    </div>
                    <div data-aos="flip-up" className="partnersBlock">
                        <img src={partners2}/>
                    </div>
                    <div data-aos="flip-up" className="partnersBlock">
                        <img src={partners3}/>
                    </div>
                    <div data-aos="flip-up" className="partnersBlock">
                        <img src={partners4}/>
                    </div>
                    <div data-aos="flip-up" className="partnersBlock">
                        <img src={partners5}/>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="partnersBottomBlock">
                <p>Хотите стать партнером или спонсором Чемпионата?<br/> Напишите свой запрос на адрес <span style={{color: "#FF8562"}}>club@finsgram.ru</span></p>
                <img src={partnersImage}/>
            </div>
        </div>
    )
}

export default Partners;