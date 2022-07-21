import "./body.css";
import { Button3 } from "../../../commons/button/button";
import { FirstBox, BoxItem, BoxItem2, BoxItem3, BoxItem4, BoxItem5 } from "../../../box/box";

const Body = () => {
  return (
    <div className="hero">
      <div className="info">
        <h1 className="h-size">Maximize skill, minimize budget</h1>
        <p className="">
          Our modern courses across a range of in-demand skills will give you
          the knowledg e you need to live the life you want.
        </p>
        <Button3 />
      </div>

      <div className="items">
        <FirstBox/>
        <BoxItem/>
        <BoxItem2/>
        <BoxItem3/>
        <BoxItem4/>
        <BoxItem5/>
      </div>
    </div>
  );
};

export { Body };
