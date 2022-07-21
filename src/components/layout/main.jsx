import { Navbar } from "./components/navbar/navbar";
import { Body } from "./components/body/body";
import { Footer } from "./components/footer/footer";
import './main.css';
import { Button3 } from "../commons/button/button3";



const Main = () => {
  return (
  
  <div className="main">
    <Navbar/>
    <Body/>
    <Footer/>
    <Button3/>
  </div>

)};

export {Main};
