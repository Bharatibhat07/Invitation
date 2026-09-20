import React, { useState } from 'react';
import bgImg from '../assets/images/bir007bg-B8J4JQNK.png';
import flowerImg from '../assets/images/oiflower-B4yLkwdB.png';
import topDesignImg from '../assets/images/oitopdesign-Dsx6g2Hw.png';
import mobileTopImg from '../assets/images/oimobiletop-hNuu1rwf.png';
import sealDesignImg from '../assets/images/oidesign-CDSYQKzX.png';

export default function OpenInvite({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 1200);
  };

  return (
    <section className={`oi-section ${opened ? 'opened' : ''}`}>
      <div className="oi-bottom">
        <img src={bgImg} className="oi-bg" alt="" />
        <img src={flowerImg} className="oi-bottom-flower" alt="" />
      </div>
      <div className="oi-top">
        <picture>
          <source media="(max-width:768px)" srcSet={mobileTopImg} />
          <img src={topDesignImg} className="oi-top-design" alt="" />
        </picture>
        <button className="oi-open-btn" onClick={handleOpen} type="button" aria-label="Open Invitation">
          <img src={sealDesignImg} alt="" />
          <span>Open</span>
        </button>
      </div>
    </section>
  );
}
