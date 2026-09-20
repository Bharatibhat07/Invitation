import React, { useState } from 'react';
import ScrollDown from './ScrollDown';
import useInView from '../hooks/useInView';
import leftFlower from '../assets/images/inputleft-B0dakmNR.png';
import rightFlower from '../assets/images/inputright-CXtuSvn5.png';

// White sparkles SVG for the AI suggestion circle in Image 2
const sparklesIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
    <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
  </svg>
);

const sampleWishes = [
  "Wishing you a very blessed and joyful 90th birthday! May Lord Lakshmi Narasimha always shower you with good health, long life, and happiness.",
  "Hearty congratulations on completing 90 glorious years! Your life, wisdom, and dedication continue to inspire our entire family.",
  "Dearest Sir, wishing you abundant peace, radiant health, and boundless joy on your milestone Kalaswaroopa Souri Shanthi celebration!"
];

export default function SendWishes({ personName, birthdayYear, onAddWish }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestionIdx, setSuggestionIdx] = useState(0);

  const [sectionRef, isInView] = useInView({ threshold: 0.15, resetOnExit: true });

  const handleSparkleClick = () => {
    setMessage(sampleWishes[suggestionIdx % sampleWishes.length]);
    setSuggestionIdx(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatusMsg("Please fill all fields");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      if (onAddWish) {
        onAddWish({
          authorName: name.trim(),
          message: message.trim(),
          date: new Date().toISOString()
        });
      }
      setName('');
      setMessage('');
      setStatusMsg("Your wishes have been submitted successfully!");
      setIsSubmitting(false);

      setTimeout(() => setStatusMsg(''), 4000);
    }, 400);
  };

  return (
    <section
      id="bir007-send-wishes"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        backgroundColor: '#f8e8b6',
        backgroundImage: 'url(/assets/sendbg-DVWE2I4E.png)',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '70px 20px 90px',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Heading: Send your Wishes matching Image 2 */}
      <h2
        style={{
          fontFamily: "'Alex Brush', cursive",
          fontSize: 'clamp(4.2rem, 5.5vw, 5.8rem)',
          color: '#8b181b',
          fontWeight: '400',
          textAlign: 'center',
          marginBottom: '35px',
          zIndex: 5,
          position: 'relative',
          letterSpacing: '1px',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(-25px)',
          transition: 'all 0.85s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        Send your Wishes
      </h2>

      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 5,
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(30px)',
          transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s'
        }}
      >
        {/* Left and Right decorative wheat / leaf ornaments matching Image 2 */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '-90px',
            transform: isInView ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(-50px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <img src={leftFlower} alt="" style={{ width: '150px', display: 'block' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '40%',
            right: '-90px',
            transform: isInView ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(50px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <img src={rightFlower} alt="" style={{ width: '150px', display: 'block' }} />
        </div>

        <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Your Name Input */}
          <div style={{ width: '100%' }}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
              style={{
                width: '100%',
                height: '56px',
                backgroundColor: '#ffffff',
                border: '2px solid #caa464',
                borderRadius: '10px',
                padding: '0 20px',
                fontSize: '1.8rem',
                fontFamily: 'Kameron, serif',
                color: '#8b181b',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Your Wishes Textarea */}
          <div style={{ position: 'relative', width: '100%' }}>
            <textarea
              placeholder="Your Wishes"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={250}
              disabled={isSubmitting}
              style={{
                width: '100%',
                minHeight: '210px',
                backgroundColor: '#ffffff',
                border: '2px solid #caa464',
                borderRadius: '10px',
                padding: '18px 20px 45px',
                fontSize: '1.8rem',
                fontFamily: 'Kameron, serif',
                color: '#8b181b',
                outline: 'none',
                resize: 'none',
                boxSizing: 'border-box'
              }}
            />

            {/* Red AI sparkle button in bottom right corner */}
            <button
              type="button"
              onClick={handleSparkleClick}
              title="Generate a heartfelt wish"
              style={{
                position: 'absolute',
                bottom: '14px',
                right: '14px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#8b181b',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                transition: 'transform 0.2s ease'
              }}
            >
              {sparklesIcon}
            </button>
          </div>

          {statusMsg && (
            <div style={{ color: '#8b181b', fontSize: '1.6rem', fontFamily: 'Kameron, serif', textAlign: 'center' }}>
              {statusMsg}
            </div>
          )}

          {/* Submit Button matching Image 2 */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              height: '56px',
              backgroundColor: '#8b181b',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '2.6rem',
              fontWeight: '500',
              fontFamily: 'Kameron, serif',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease, filter 0.2s ease',
              marginTop: '4px'
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <ScrollDown />
    </section>
  );
}
