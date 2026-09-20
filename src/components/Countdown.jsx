import React, { useState, useEffect } from 'react';
import ScrollDown from './ScrollDown';
import useInView from '../hooks/useInView';
import leftMandala from '../assets/images/designleft-CFphG0F5.png';
import rightMandala from '../assets/images/designright-BtJD6ak7.png';
import underlineImg from '../assets/images/underline-BXokCbKG.png';
import separatorLine from '../assets/images/Line-B26Q-M-H.png';

export default function Countdown({ date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 40,
    hours: 10,
    minutes: 44,
    seconds: 36,
    isPast: false
  });

  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    resetOnExit: true
  });

  useEffect(() => {
    const target = new Date(date || "2026-10-31T08:30:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [date]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hrs', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds }
  ];

  return (
    <section
      id="bir007-Countdown"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '440px',
        backgroundColor: '#8b181b',
        backgroundImage: 'url(/assets/bg-Bh2fK3rq.png)',
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Left Mandala Flourish - Starts at Center, Glides to Left Screen Edge on Scroll */}
      <img
        src={leftMandala}
        alt=""
        style={{
          position: 'absolute',
          left: isInView ? '0' : 'calc(50% - clamp(90px, 11vw, 135px))',
          top: '50%',
          width: 'clamp(95px, 11vw, 140px)',
          height: 'auto',
          maxHeight: '360px',
          objectFit: 'contain',
          transform: 'translateY(-50%)',
          transition: 'left 1.25s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none',
          zIndex: 4
        }}
      />

      {/* Right Mandala Flourish - Starts at Center, Glides to Right Screen Edge on Scroll */}
      <img
        src={rightMandala}
        alt=""
        style={{
          position: 'absolute',
          right: isInView ? '0' : 'calc(50% - clamp(90px, 11vw, 135px))',
          top: '50%',
          width: 'clamp(95px, 11vw, 140px)',
          height: 'auto',
          maxHeight: '360px',
          objectFit: 'contain',
          transform: 'translateY(-50%)',
          transition: 'right 1.25s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none',
          zIndex: 4
        }}
      />

      {/* Center Countdown Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
          width: '100%',
          maxWidth: '750px',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(18px)',
          transition: 'opacity 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.25s, transform 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.25s'
        }}
      >
        {/* Title: Event starts in */}
        <h2
          style={{
            fontFamily: "'Alex Brush', cursive",
            fontSize: 'clamp(3.8rem, 5vw, 5.2rem)',
            color: '#f3d466',
            fontWeight: '400',
            textAlign: 'center',
            letterSpacing: '1.5px',
            marginBottom: '6px'
          }}
        >
          {timeLeft.isPast ? "Welcome" : "Event starts in"}
        </h2>

        {/* Golden Horizontal Divider Bar below title */}
        <img
          src={underlineImg}
          alt=""
          style={{
            width: '260px',
            maxWidth: '75%',
            height: 'auto',
            marginBottom: '32px',
            filter: 'brightness(1.15)'
          }}
        />

        {/* 4-Column Timer Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '0'
          }}
        >
          {units.map((unit, index) => (
            <React.Fragment key={unit.label}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: 'clamp(65px, 8vw, 90px)',
                  padding: '0 4px'
                }}
              >
                <span
                  style={{
                    fontFamily: "'Alex Brush', cursive",
                    fontStyle: 'italic',
                    fontSize: 'clamp(4.2rem, 5.6vw, 6rem)',
                    color: '#f3d466',
                    lineHeight: '1',
                    marginBottom: '4px'
                  }}
                >
                  {unit.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Alex Brush', cursive",
                    fontSize: 'clamp(2.4rem, 3.2vw, 3.4rem)',
                    color: '#f3d466',
                    lineHeight: '1'
                  }}
                >
                  {unit.label}
                </span>
              </div>

              {/* Vertical Ornate Golden Divider */}
              {index < units.length - 1 && (
                <img
                  src={separatorLine}
                  alt=""
                  style={{
                    height: '65px',
                    width: 'auto',
                    margin: '0 clamp(10px, 2vw, 24px)',
                    objectFit: 'contain',
                    alignSelf: 'center',
                    filter: 'brightness(1.1)'
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <ScrollDown />
    </section>
  );
}
