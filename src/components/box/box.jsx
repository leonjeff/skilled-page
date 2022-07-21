import "./box.css";
import thumbnail from '../../assets/images/animation.png'

const FirstBox = () => {
    return(
        <div className='first'>
            <h4 className="first-info">
            Check out our most popular courses!
            </h4>
        </div>
    );
}

const BoxItem = () => {
    return(
        <div className='item'>
            <img className="icon" src={thumbnail}/>
            <h6 className="">Animation</h6>
            <p className="">Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
            <a className="">Get Started</a>
        </div>
    );
}


export {FirstBox, BoxItem}