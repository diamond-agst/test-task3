import React from "react";
import "./styles.scss"
import about1 from "../../assets/images/about1.png"
import about2 from "../../assets/images/about2.png"
import about3 from "../../assets/images/about3.png"
import about4 from "../../assets/images/about4.png"
import star from "../../assets/images/star.svg"
import whiteStar from "../../assets/images/white_star.svg"
import rub from "../../assets/images/rub.png"
import backAbout from "../../assets/images/backAbout.png"

const About = () => {
    return(
        <div id="about" className="aboutWrapper">
            <div data-aos="zoom-in" className="aboutBlock">
                <div className="nameBlock">
                    <div>
                        <p>О чемпионате</p>
                    </div>
                </div>
                <div className="aboutContent">
                    <div className="aboutLeftBlock">
                        <h1>
                            Что такое<br/> чемпионат<br/> по финансовым<br/> играм?
                        </h1>
                        <p>
                            Летний чемпионат по финансовым играм - это<br/> уникальная возможность повысить свои знания<br/> и навыки по финансовой грамотности.<br/> 
                            Чемпионат проводится в формате<br/> увлекательных настольных игр. 
                        </p>
                    </div>
                    <div className="aboutRightBlock">
                        <div className="aboutImagesBlock">
                            <img src={about1}/>
                            <img src={about2}/>
                            <img src={about3}/>
                            <img src={about4}/>
                        </div>
                        <div className="aboutRightText">
                            <p>
                                Для участия в чемпионате не требуется<br/> специальных навыков и знаний.<br/>
                                Изучать и закреплять знания по финансовой<br/> грамотности участники будут прямо<br/> во время турнира. 
                            </p>
                        </div>
                    </div>
                </div>
                <img className="aboutStar" width={98} src={star}/>
                <img className="aboutWhiteStar" src={whiteStar}/>
                <img width={200} className="aboutRub" src={rub}/>
            </div>
            <div className="aboutButton">
                <button>
                    <p>Для Чего</p>
                </button>
            </div>
            <img className="backAbout" src={backAbout}/>
        </div>
    )
}

export default About;