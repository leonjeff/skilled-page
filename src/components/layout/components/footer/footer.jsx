import { Button2 } from "../../../commons/button/button2";
import CustomLogo2 from '../../../../assets/images/skilled_2.png';
import './footer.css';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="left">
                <img src={CustomLogo2}/>
            </div>
            <div className="right">
                <Button2 />
            </div>
        </div>
    );
}


export {Footer};