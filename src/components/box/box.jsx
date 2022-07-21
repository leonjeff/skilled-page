import "./box.css";
import thumbnail from "../../assets/images/animation.png";
import thumbnail2 from "../../assets/images/design.png";
import thumbnail3 from "../../assets/images/photo.png";
import thumbnail4 from "../../assets/images/crypto.png";
import thumbnail5 from "../../assets/images/business.png";


const FirstBox = () => {
  return (
    <div className="first">
      <h4 className="first-info">Check out our most popular courses!</h4>
    </div>
  );
};

const BoxItem = () => {
  return (
    <div className="item">
      <img className="icon" src={thumbnail} />
      <h6 className="h-text">Animation</h6>
      <p className="p-text">
        Learn the latest animation techniques to create stunning motion design
        and captivate your audience.
      </p>
      <a className="item-color">Get Started</a>
    </div>
  );
};
const BoxItem2 = () => {
  return (
    <div className="item">
      <img className="icon" src={thumbnail2} />
      <h6 className="h-text">Design</h6>
      <p className="p-text">
        Design Create beautiful, usable interfaces to help shape the future of
        how the web looks. 
      </p>
      <a className="item-color">Get Started</a>
    </div>
  );
};
const BoxItem3 = () => {
  return (
    <div className="item">
      <img className="icon" src={thumbnail3} />
      <h6 className="h-text">Photography</h6>
      <p className="p-text">
        Photography Explore critical fundamentals like lighting, composition,
        and focus to capture exceptional photos. 
      </p>
      <a className="item-color">Get Started</a>
    </div>
  );
};
const BoxItem4 = () => {
  return (
    <div className="item">
      <img className="icon" src={thumbnail4} />
      <h6 className="h-text">Crypto</h6>
      <p className="p-text">
        Crypto All you need to know to get started investing in crypto. Go from
        beginner to advanced with this 54 hour course. 
      </p>
      <a className="item-color">Get Started</a>
    </div>
  );
};
const BoxItem5 = () => {
  return (
    <div className="item">
      <img className="icon" src={thumbnail5} />
      <h6 className="h-text">Bussiness</h6>
      <p className="p-text">
        Business A step-by-step playbook to help you start, scale, and sustain
        your business without outside investment. 
      </p>
      <a className="item-color">Get Started</a>
    </div>
  );
};

export { FirstBox, BoxItem, BoxItem2, BoxItem3, BoxItem4, BoxItem5 };
