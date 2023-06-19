import React from "react";
import "./styles.scss"
import lamp from "../../assets/images/lamp.png"
import check from "../../assets/images/check.png"
import learn from "../../assets/images/learn.png"
import win from "../../assets/images/win.png"
import whyImage from "../../assets/images/whyImage.png"

const WhyBlock = () => {
    return(
        <div className="whyBlockWrapper">
            <div className="headingWhy">
                <h1>Зачем участвовать<br/> в чемпионате?</h1>
            </div>
            <div className="whyBlocks">
                <div className="whyTopBlocks">
                    <div data-aos="fade-down-right" className="whyBlock">
                        <div className="headingBlock">
                            <h1>Получить<br/> прикладные<br/> знания</h1>
                            <img src={lamp}/>
                        </div>
                        <div className="whyText">
                            <p>На чемпионате есть возможность познакомиться с<br/> базовыми понятиями и принципами финансовой<br/> грамотности, прокачать гибкие навыки и<br/> предпринимательское мышление. А благодаря<br/> игровому формату новые знания усвоятся<br/> значительно лучше!</p>
                        </div>
                    </div>
                    <div data-aos="fade-down-left" className="whyBlock">
                        <div className="headingBlock">
                            <h1>Проверить<br/> себя</h1>
                            <img src={check}/>
                        </div>
                        <div className="whyText">
                            <p>Результаты личного и командного зачетов<br/> продемонстрируют, насколько хорошо ты<br/> разбираешься в теме финансов и умеешь<br/> управлять своими ресурсами.</p>
                        </div>
                    </div>
                </div>
                <div className="whyBottomBlocks">
                    <div data-aos="fade-up-right" className="whyBlock">
                        <div className="headingBlock">
                            <h1>Восполнить<br/> пробелы и<br/> потрениро­вать<br/> навыки</h1>
                            <img src={learn}/>
                        </div>
                        <div className="whyText">
                            <p>Если умений и опыта не хватает, во время турнира<br/> ты сможешь потренироваться, закрепить новую<br/> информацию и систематизировать свои знания.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="whyBlock">
                        <div className="headingBlock">
                            <h1>Получить призы и<br/> подарки</h1>
                            <img src={win}/>
                        </div>
                        <div className="whyText">
                            <p>Все участники получат сертификаты, а<br/> финалистов и призеров ждут памятные подарки. </p>
                        </div>
                    </div>
                </div>
                <img className="whyImage" src={whyImage}/>
            </div>
            <div className="whyButton">
                <button>
                    <p>Подать заявку на участие</p>
                </button>
            </div>
        </div>
    )
}

export default WhyBlock;