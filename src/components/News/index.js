import React from "react";
import "./styles.scss"
import news1 from "../../assets/images/news1.png"
import news2 from "../../assets/images/news2.png"
import news3 from "../../assets/images/news3.png"
import cupNews from "../../assets/images/cupNews.png"

const News = () => {
    return(
        <div id="news" className="newsWrapper">
            <div className="newsSubtitle">
                <div>
                    <p>новости</p>
                </div>
            </div>
            <div className="newsHeading">
                <h1>Новости чемпионата</h1>
            </div>
            <div className="newsContent">
                <div className="newsText">
                    <h1>Как проходил летний чемпионат по финансовой грамотности<br/> в 2022 г. <span style={{color: "#FFD773"}}>в Хабаровске</span></h1>
                </div>
                <div className="newsImages">
                    <div className="newsImagesTop">
                        <img data-aos="flip-left" src={news1}/>
                        <img data-aos="flip-left" src={news2}/>
                    </div>
                    <div className="newsImagesBottom">
                        <div className="cupNews">
                           <img src={cupNews}/> 
                        </div>
                        
                        <img data-aos="flip-left" src={news3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;