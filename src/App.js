import React, {useEffect} from "react";
import "./App.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./components/About";
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import News from "./components/News";
import Organizer from "./components/Organizer";
import WhoBlock from "./components/WhoBlock";
import WhyBlock from "./components/WhyBlock";
import Partners from "./components/Partners";
import FormBlock from "./components/Form";
import Contacts from "./components/Contacts";
import FooterBlock from "./components/Footer";

const App = () =>{
  useEffect(() => {
    AOS.init();
  }, [])
  return(
      <div className="wrapper">
          <Header/>
          <div className="container">
            <MainBlock/>
            <About/>
            <WhyBlock/>
            <WhoBlock/>
            <News/>
            <Organizer/>
            <Partners/>
            <FormBlock/>
            <Contacts/>
            <FooterBlock/>
          </div>
          
      </div>
  )
}

export default App;
