import React from "react";
import "./styles.scss"
import partnersImage from "../../assets/images/partnersImage.png"
import formImage from "../../assets/images/formImage.png"

const FormBlock = () => {
    return(
        <div className="formWrapper">
            <div className="formHeading">
                <div>
                    <p>заявка</p>
                </div>
            </div>
            <div data-aos="zoom-out" className="formContainer">
                <div className="formBlockHeading">
                    <h1>Регистрация на чемпионат:</h1>
                </div>
                <div className="formBlock">
                    <form>
                        <input placeholder="Имя"/>
                        <input placeholder="Фамилия"/>
                        <input placeholder="Адрес"/>
                        <input placeholder="Наименование учебного заведения"/>
                        <input placeholder="Контактный телефон"/>
                        <input placeholder="E-mail"/>
                        <div className="checkboxBlock">
                            <input type="checkbox"/>
                            <p>Согласен с условиями использования формы заявки и<br/>
                                политикой конфиденциальности лица, разместившего форму заявки </p>
                        </div>
                        <button>
                            <p>РЕГИСТРАЦИЯ</p>
                        </button>
                    </form>
                    <img src={partnersImage}/>
                    <div className="formImage">
                        <img src={formImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormBlock;