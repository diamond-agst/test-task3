import React, {useEffect} from "react";
import "./styles.scss"
import cup from "../../assets/images/cup.png"
import rub from "../../assets/images/rub.png"
import star from "../../assets/images/star.svg"

const MainBlock = () => {
    return(
        <div className="mainBlockWrapper">
            <div data-aos="fade-right" className="mainTextBlock">
                <div className="mainTitle">
                    <h1>Летний<br/> чемпионат<br/> по финансовым<br/> играм</h1>
                    <img src={rub}/>
                </div>
                <div className="mainSubtitle">
                    <div className="topSubTitle">
                        <div>
                            <p>май-август 2023 г.</p>
                        </div>
                        <div>
                            <p>г. Хабаровск</p>
                        </div>
                    </div>
                    <div className="bottomSubtitle">
                        <div>
                            <p>для школьников 8-18 лет</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="mainImageBlock">
                <div className="imageText">
                    <p>Прокачай свои знания<br/> по финансовой<br/> грамотности</p>
                </div>
                <div className="mainImage">
                    <img width={500} src={cup}/>
                    <img src={star}/>
                </div>
                
            </div>
        </div>
    )
}

export default MainBlock;