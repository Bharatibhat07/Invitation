import React from 'react';
import ScrollDown from './ScrollDown';
import useInView from '../hooks/useInView';
import photoFrameImg from '../assets/images/photoframe-DFzDX5sd.png';
import fallbackPersonPhoto from '../assets/images/6ac44ca8-4000-42fd-a384-3f0e52ec299f_image.jpg';

export default function Blessing({ data }) {
  const [sectionRef, isInView] = useInView({ threshold: 0.15, resetOnExit: true });

  const parseOrdinal = (val) => {
    if (!val) return { number: '', suffix: '' };
    const num = parseInt(String(val).match(/\d+/)?.[0], 10);
    if (isNaN(num)) return { number: '', suffix: '' };
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

  const ordinal = parseOrdinal(data?.birthday?.birthday_year || "90th");
  const personName = data?.birthday?.person_name || "Sri G L Narasimha Murthy";
  const personPhoto = data?.birthday?.person_photo || fallbackPersonPhoto;
  
  const aboutText = data?.birthday?.about_person || 
    "G. L. Narasimha Murthy was born on 31st October 1936 in Gandasi, Hassan, to Lakshminarayan Jois & Savithramma. As the eldest of ten children, he moved to Bengaluru at the age of twelve to pursue higher education. His unwavering dedication to learning led him to earn four academic degrees, reflecting his lifelong commitment to knowledge and personal growth.\n\nAt the age of twenty-seven, he married and was blessed with a loving family comprising three children and six grandchildren. He devoted his professional life to the field of education, serving with distinction as both a teacher and later as a Headmaster, inspiring generations of students through his leadership and dedication.\n\nFollowing his retirement, Shri G. L. Narasimha Murthy continued to serve society by actively engaging in social welfare and charitable activities, exemplifying a life guided by compassion, service, and integrity.";

  const paragraphs = aboutText.split('\n').map(p => p.trim()).filter(Boolean);

  return (
    <section className={`bday-section ${isInView ? 'is-in-view' : ''}`} id="bday-section" ref={sectionRef}>
      <span className={`bday-chain bday-chain-left ${isInView ? 'bday-chain-run' : ''}`} aria-hidden="true"></span>
      <span className={`bday-chain bday-chain-right ${isInView ? 'bday-chain-run' : ''}`} aria-hidden="true"></span>

      <div className="bday-inner">
        <div className="bday-heading anim-fade-up">
          <p className="bday-eyebrow">
            A Journey Through {ordinal.number} Wonderful Years of
          </p>
          <h1 className="bday-name">{personName}</h1>
        </div>

        <div className="bday-content">
          <div className="bday-photo-wrap anim-scale-up delay-1">
            <div className="bday-photo-frame">
              <div className="bday-photo-inner">
                <img src={photoFrameImg} alt="" className="bday-photoframe" />
                <img src={personPhoto} alt={personName} className="bday-photo" />
              </div>
            </div>
          </div>

          <div className="bday-details anim-fade-up delay-2">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="bday-para">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      <ScrollDown />
    </section>
  );
}
