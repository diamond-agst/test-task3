import React from "react";
import "./styles.scss"
import organizerBack from "../../assets/images/organizerBack.png"
import whiteStar from "../../assets/images/white_star.svg"

const Organizer = () => {
    return(
        <div className="organizerWrapper">
            <div className="organizerSubtitle">
                <div>
                    <p>организатор</p>
                </div>
            </div>
            <div className="organizerHeading">
                <h1>Организатор<br/> чемпионата</h1>
            </div>
            <div className="organizerTextWrapper">
                <div className="organizerTextBlock">
                <div className="organizerAboutBlock">
                    <div className="organizerAboutTitle">
                        <h1>Хабаровский край</h1>
                    </div>
                    <div className="organizerAboutText">
                        <p>Финсграм - это некоммерческая<br/> организация, занимающаяся развитием<br/> навыков у детей, которые необходимы для<br/> успешной жизни и карьеры в будущем.   </p>
                        <p>Мы обучаем детей и подростков 8−18 лет<br/> финансовой грамотности, soft skills, помогаем<br/> развивать эмоциональный интеллект<br/> и предпринимательское мышление.</p>
                    </div>
                </div>
                <div className="organizerBlocks">
                    <div data-aos="zoom-in" className="organizerBlock">
                        <div>
                            <h1>700+</h1>
                            <img width={56} src={whiteStar}/>
                        </div>
                        <p>учеников за 2022 год</p>
                    </div>
                    <div data-aos="zoom-in" className="organizerBlock">
                        <div>
                            <h1>30+</h1>
                            <img width={56} src={whiteStar}/>
                        </div>
                        <p>школ-участников</p>
                    </div>
                    <div data-aos="zoom-in" className="organizerBlock">
                        <div>
                            <h1>5</h1>
                            <img width={56} src={whiteStar}/>
                        </div>
                        <p>площадок</p>
                    </div>
                </div>
            </div>
            </div>
            <img className="organizerBack" src={organizerBack}/>
        </div>
    )
}

export default Organizer;