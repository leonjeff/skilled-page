import "./body.css";
import { Button3 } from "../../../commons/button/button";
import { FirstBox, BoxItem } from "../../../box/box";

const Body = () => {
  return (
    <div className="hero">
      <div className="info">
        <h1 className="">Maximize skill, minimize budget</h1>
        <p className="">
          Our modern courses across a range of in-demand skills will give you
          the knowledg e you need to live the life you want.
        </p>
        <Button3 />
      </div>

      <div className="items">
        <FirstBox/>
        <BoxItem/>
        <BoxItem/>
        <BoxItem/>
        <BoxItem/>
        <BoxItem/>
      </div>
    </div>
  );
};

export { Body };
