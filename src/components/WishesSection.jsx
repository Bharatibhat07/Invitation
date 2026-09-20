import React, { useState } from 'react';
import ScrollDown from './ScrollDown';
import useInView from '../hooks/useInView';
import wishCardBg from '../assets/images/wishcard-esXeCGe0.png';
import underlineImg from '../assets/images/underline-BXokCbKG.png';
import btnLeftImg from '../assets/images/buttonleft-fb1xQQlT.png';
import btnRightImg from '../assets/images/buttonright-DT23S5O-.png';

// SVG center flower between buttons
const centerFlowerSvg = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%23fff3c4'%20width='28'%20height='28'%3e%3cpath%20d='M12%202C12%202%2014%206%2017%207C20%208%2022%2012%2022%2012C22%2012%2018%2014%2017%2017C16%2020%2012%2022%2012%2022%2012%2022%2010%2018%207%2017C4%2016%202%2012%202%2012C2%2012%206%2010%207%207C8%204%2012%202%2012%202Z'/%3e%3c/svg%3e";

export default function WishesSection({ wishes = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionRef, isInView] = useInView({ threshold: 0.15, resetOnExit: true });

  const currentWish = wishes[currentIndex] || {
    message: "Wishing Sri G L Narasimha Murthy a very happy 90th birthday! May the Lord bless you with long life, robust health, and enduring happiness.",
    authorName: "Well Wisher"
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : wishes.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < wishes.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className={`bir007-wish-section ${isInView ? 'is-in-view' : ''}`} id="bir007-wishes-section" ref={sectionRef}>
      <div className="nimbus-container">
        <div className="bir007-wish-container">
          <div className="bir007-wish-heading anim-fade-up">
            Wishes
            <img src={underlineImg} alt="" />
          </div>

          <div className="bir007-wish-card anim-scale-up delay-1">
            <img src={wishCardBg} alt="" />
            <div className="bir007-wish-content">
              <p>{currentWish.message}</p>
              <h2>{"-" + currentWish.authorName}</h2>
            </div>
          </div>

          <div className="bir007-wish-button anim-fade-up delay-2">
            <div className="bir007-btn-wrapper">
              <img src={btnLeftImg} alt="" className="bir007-btn-left-design" />
              <button className="bir007-wish-prev-btn" onClick={handlePrev} type="button">
                Prev
              </button>
              <img src={btnRightImg} alt="" className="bir007-btn-right-design" />
            </div>

            <img src={centerFlowerSvg} alt="" className="bir007-center-flower" />

            <div className="bir007-btn-wrapper">
              <img src={btnLeftImg} alt="" className="bir007-btn-left-design" />
              <button className="bir007-wish-next-btn" onClick={handleNext} type="button">
                Next
              </button>
              <img src={btnRightImg} alt="" className="bir007-btn-right-design" />
            </div>
          </div>
        </div>
      </div>

      <ScrollDown />
    </section>
  );
}
