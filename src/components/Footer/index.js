import React from "react";
import "./styles.scss"
import logo from "../../assets/images/logo.svg"

const FooterBlock = () => {
    return(
        <div className="footerWrapper">
            <div className="footerTop">
                <h1>АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ЦЕНТР РАЗВИТИЯ ЛИЧНЫХ И ПРОФЕССИОНАЛЬНЫХ КОМПЕТЕНЦИЙ "НАСТАВНИКИ"</h1>
            </div>
            <div className="footerBottom">
                <h2>© Финсграм 2022-2023. Все права защищены.</h2>
                <h2>Общие положения</h2>
                <h2>Регламент проведения чемпионата</h2>
                <h2>Политика обработки персональных данных</h2>
            </div>
        </div>
    )
}

export default FooterBlock;