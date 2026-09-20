import React from 'react';
import ScrollDown from './ScrollDown';
import useInView from '../hooks/useInView';
import leftPillarImg from '../assets/images/leftdesign-Dd0YdqO8.png';
import rightPillarImg from '../assets/images/rightdesign-CqDO3QYQ.png';
import iconBorderImg from '../assets/images/handborder-CN8eU4UQ.png';
import handIconImg from '../assets/images/hand-BQmCmA48.png';

export default function Welcome({ data }) {
  const [sectionRef, isInView] = useInView({ threshold: 0.15, resetOnExit: true });

  const description = data?.birthday?.birthday_description || 
    "With the Divine Blessings of Sri Lakshmi Narasimha Swamy, it is with immense joy and gratitude that we warmly invite you and your family to join us in celebrating a very special milestone in the life of our beloved family elder, Sri G. L. Narasimha Murthy, on the auspicious occasion of his Kālaswaroopa Souri Shanti (Celebrating his 90th Birthday). As he completes 90 glorious years of life, we are blessed to commemorate this sacred occasion by celebrating his remarkable journey, expressing our gratitude for his enduring love, wisdom, and guidance, and seeking his invaluable blessings for the years to come. Your gracious presence and wishes will make this celebration truly memorable and complete.\nWith love, Smt. Suvarnamma, along with their children and daughters-in-law, G. N. Sreedhar & Dr. Suma S, G. N. Vasu & Hemalatha B. L., and G. N. Kiran & Shruthi N. D. and their grandchildren Sahana, Pranav, Pratyush, Arav, Amrita & Ankita";

  return (
    <section className={`welcome-section ${isInView ? 'is-in-view' : ''}`} id="welcome-section" ref={sectionRef}>
      <img src={leftPillarImg} alt="" className="welcome-pillar welcome-pillar-left anim-slide-left" aria-hidden="true" />
      <img src={rightPillarImg} alt="" className="welcome-pillar welcome-pillar-right anim-slide-right" aria-hidden="true" />

      <div className="welcome-content">
        <div className="welcome-icon-frame anim-scale-up royal-glow delay-1">
          <img src={iconBorderImg} alt="" className="welcome-icon-border" />
          <img src={handIconImg} alt="Namaste Greeting" className="welcome-icon-img" />
        </div>

        <h2 className="welcome-heading anim-fade-up delay-2">Warm Welcome</h2>
        <div className="welcome-details anim-fade-up delay-3">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: index < description.split('\n').length - 1 ? '1.6rem' : 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <ScrollDown />
    </section>
  );
}
