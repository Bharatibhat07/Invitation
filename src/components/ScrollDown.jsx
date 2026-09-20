import React, { useRef, useEffect } from 'react';

const sectionIds = [
  "welcome-section",
  "bday-section",
  "bir007-Countdown",
  "bir007-send-wishes",
  "bir007-wishes-section",
  "bir007-schedule-section"
];

const arrowSvg = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='40px'%20viewBox='0%20-960%20960%20960'%20width='40px'%20fill='%23fff'%3e%3cpath%20d='M446.67-800v513l-240-240L160-480l320%20320%20320-320-46.67-47-240%20240v-513h-66.66Z'/%3e%3c/svg%3e";

export default function ScrollDown() {
  const arrowRef = useRef(null);

  const handleClick = () => {
    if (window.scrollY < 50) {
      document.getElementById("welcome-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    let currentIdx = 0;
    for (let i = 0; i < sectionIds.length; i++) {
      const el = document.getElementById(sectionIds[i]);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom > 150) {
        currentIdx = i;
        break;
      }
    }
    const nextIdx = Math.min(currentIdx + 1, sectionIds.length - 1);
    document.getElementById(sectionIds[nextIdx])?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button className="scroll-down-button" onClick={handleClick} aria-label="Scroll Down" type="button">
      <img ref={arrowRef} src={arrowSvg} alt="Scroll Down" className="scroll-down-arrow" />
    </button>
  );
}
