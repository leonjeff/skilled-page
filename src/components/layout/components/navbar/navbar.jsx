import { Button } from "../../../commons/button/button";
import CustomLogo from '../../../../assets/images/skilled.png';
import './navbar.css';

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="left">
                <img src={CustomLogo}/>
            </div>
            <div className="right">
                <Button />
            </div>
        </div>
    );
}


export {Navbar};