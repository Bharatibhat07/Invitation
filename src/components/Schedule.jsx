import React from 'react';
import useInView from '../hooks/useInView';
import cornerTopRight from '../assets/images/righttop-zf1tabel.png';
import cornerBottomLeft from '../assets/images/leftbottom-1peHbNyq.png';
import eventLineOrnament from '../assets/images/eventline-oViOqxnm.png';
import buttonLineOrnament from '../assets/images/buttonline--xsgdwbP.png';
import icons from '../assets/icons.json';

export default function Schedule({ date, data }) {
  const [sectionRef, isInView] = useInView({ threshold: 0.15, resetOnExit: true });
  const venue = data?.venue || {};
  const scheduleList = data?.schedule || [];
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
      })
    : "Saturday, 31 Oct 2026";

  return (
    <section className={`schedule-section ${isInView ? 'is-in-view' : ''}`} id="bir007-schedule-section" ref={sectionRef}>
      <img src={cornerTopRight} alt="" className="schedule-corner schedule-corner-tr anim-scale-up" aria-hidden="true" />
      <img src={cornerBottomLeft} alt="" className="schedule-corner schedule-corner-bl anim-scale-up" aria-hidden="true" />

      <div className="nimbus-container schedule-wrapper">
        <div className="schedule-columns">
          {/* Column 1: Event Details */}
          <div className="schedule-col anim-slide-left delay-1">
            <h3 className="schedule-col-heading">
              <img src={icons.Rp} alt="" className="schedule-arrow" />
              Event Details
              <img src={icons.Fp} alt="" className="schedule-arrow" />
            </h3>

            <div className="schedule-details-body">
              <div className="schedule-row">
                <img src={icons.CD2} alt="" className="schedule-icon" />
                <div>
                  <div className="schedule-details-content">
                    <p className="schedule-label">Date</p>
                    <p className="schedule-value">{formattedDate}</p>
                  </div>
                </div>
              </div>

              <div className="schedule-row">
                <img src={icons.jD2} alt="" className="schedule-icon" />
                <div>
                  <div className="schedule-details-content">
                    <p className="schedule-label">Venue</p>
                    <p className="schedule-value">{venue.venue_name}</p>
                    <p className="schedule-value">{venue.venue_description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Divider */}
          <div className="schedule-divider anim-scale-up delay-2">
            <span className="schedule-divider-line"></span>
            <img src={eventLineOrnament} alt="" className="schedule-divider-ornament" />
            <span className="schedule-divider-line"></span>
          </div>

          {/* Column 2: Program Schedule */}
          <div className="schedule-col anim-slide-right delay-1">
            <h3 className="schedule-col-heading">
              <img src={icons.Rp} alt="" className="schedule-arrow" />
              Program Schedule
              <img src={icons.Fp} alt="" className="schedule-arrow" />
            </h3>

            <div className="schedule-list">
              {scheduleList.map((item, idx) => (
                <div className="schedule-row" key={idx}>
                  <img src={icons.KD2} alt="" className="schedule-icon" />
                  <div className="schedule-details-content">
                    <p className="schedule-label">{item.eventTime}</p>
                    <p className="schedule-value">{item.eventDetails}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="schedule-buttons anim-fade-up delay-3">
          <button
            className="schedule-btn"
            onClick={() => window.open(`tel:${venue.phone}`)}
            type="button"
          >
            <img src={icons.ZD2} alt="" className="schedule-btn-icon" />
            Contact
          </button>

          <img src={buttonLineOrnament} alt="" className="schedule-buttons-ornament" aria-hidden="true" />
          <img src={icons.DH} alt="" className="schedule-buttons-ornament-mobile" aria-hidden="true" />

          <button
            className="schedule-btn"
            onClick={() => window.open(venue.venue_location_link, "_blank")}
            type="button"
          >
            <img src={icons.TH} alt="" className="schedule-btn-icon" />
            Location
          </button>
        </div>
      </div>
    </section>
  );
}
