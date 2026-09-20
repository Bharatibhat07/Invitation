import React from 'react';
import ScrollDown from './ScrollDown';
import useInView from '../hooks/useInView';
import leftTopImg from '../assets/images/lefttop-idvBS6g9.png';
import rightTopImg from '../assets/images/righttop-BForGYUU.png';
import leftBottomImg from '../assets/images/leftbottom-DN0T6dAK.png';
import rightBottomImg from '../assets/images/rightbottom-HR95P8A3.png';
import deityImg from '../assets/images/6d505785-b7ba-4c7c-b30a-d85608e0c5e1_image.jpg';
import underlineImg from '../assets/images/underline-BXokCbKG.png';

// SVG map pin for Google Maps button
const mapPinIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%23931711'%20width='20'%20height='20'%3e%3cpath%20d='M12%202C8.13%202%205%205.13%205%209c0%205.25%207%2013%207%2013s7-7.75%207-13c0-3.87-3.13-7-7-7zm0%209.5c-1.38%200-2.5-1.12-2.5-2.5s1.12-2.5%202.5-2.5%202.5%201.12%202.5%202.5-1.12%202.5-2.5%202.5z'/%3e%3c/svg%3e";

export default function HeroSection({ data, date }) {
  const [sectionRef, isInView] = useInView({ threshold: 0.15, resetOnExit: true });

  const parseOrdinal = (val) => {
    if (!val) return { number: '90', suffix: 'th' };
    const num = parseInt(String(val).match(/\d+/)?.[0], 10);
    if (isNaN(num)) return { number: '90', suffix: 'th' };
    let sfx = 'th';
    if (num % 100 < 11 || num % 100 > 13) {
      switch (num % 10) {
        case 1: sfx = 'st'; break;
        case 2: sfx = 'nd'; break;
        case 3: sfx = 'rd'; break;
        default: sfx = 'th';
      }
    }
    return { number: num, suffix: sfx };
  };

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
      })
    : "Saturday, 31 Oct 2026";

  const venue = data?.venue || {};
  const ordinal = parseOrdinal(data?.birthday?.birthday_year || "90th");
  const heroImage = data?.birthday?.event_photo || deityImg;

  return (
    <section className={`hero-section ${isInView ? 'is-in-view' : ''}`} id="home" ref={sectionRef}>
      <img src={leftTopImg} className="hero-lefttop anim-scale-up" alt="" />
      <img src={rightTopImg} className="hero-righttop anim-scale-up" alt="" />
      <div className="hero-chain hero-chain-left" aria-hidden="true"></div>
      <div className="hero-chain hero-chain-right" aria-hidden="true"></div>
      <img src={leftBottomImg} className="hero-leftbottom anim-scale-up" alt="" />
      <img src={rightBottomImg} className="hero-rightbottom anim-scale-up" alt="" />

      <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Lord Lakshmi Narasimha Swamy Deity Image */}
        <img
          src={heroImage}
          className="hero-om anim-scale-up delay-1 royal-glow"
          alt="Lord Sri Lakshmi Narasimha Swamy"
          style={{
            width: '140px',
            height: '140px',
            objectFit: 'contain',
            borderRadius: '50%',
            marginBottom: '16px',
            display: 'block'
          }}
        />
        
        <div className="hero-title anim-fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1>{data?.birthday?.EventName || "Kalaswaroopa Souri Shanthi"}</h1>
          <img src={underlineImg} alt="" style={{ maxWidth: '280px', margin: '0 auto' }} />
        </div>

        <span className="hero-content-and anim-fade-up delay-2" style={{ textAlign: 'center' }}>&</span>

        <div className="hero-number anim-scale-up delay-3" style={{ textAlign: 'center' }}>
          {ordinal.number}
          <span>{ordinal.suffix}</span>
        </div>

        {/* Centered birthday invitation info */}
        <div className="hero-info anim-fade-up delay-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <h2>Birthday Celebration</h2>
          <p>of our beloved</p>
          <div className="hero-name">{data?.birthday?.person_name || "Sri G L Narasimha Murthy"}</div>
        </div>

        <div className="hero-date-venue-details anim-fade-up delay-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', width: '100%' }}>
          <div className="hero-date-details">
            <div className="hero-date-content">
              <p>{formattedDate}</p>
            </div>
          </div>
          <div className="hero-date-details">
            <div className="hero-date-content">
              <p>{venue.venue_name || "S L N party hall"}</p>
            </div>
          </div>
        </div>

        <button
          className="bir007-hero-btn anim-fade-up delay-5"
          onClick={() => window.open(venue.venue_location_link, "_blank")}
          type="button"
          style={{ margin: '24px auto 0' }}
        >
          <img src={mapPinIcon} alt="" className="schedule-btn-icon" />
          Open in Maps
        </button>
      </div>

      <ScrollDown />
    </section>
  );
}
