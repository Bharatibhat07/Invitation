import React from 'react';
import icons from '../assets/icons.json';

const exclamationIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='%2364748B'%20width='16'%20height='16'%3e%3cpath%20d='M256%20512A256%20256%200%201%200%20256%200a256%20256%200%201%200%200%20512zm0-384c13.3%200%2024%2010.7%2024%2024V264c0%2013.3-10.7%2024-24%2024s-24-10.7-24-24V152c0-13.3%2010.7-24%2024-24zm32%20224a32%2032%200%201%201%20-64%200%2032%2032%200%201%201%2064%200z'/%3e%3c/svg%3e";
const envelopeIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='%2364748B'%20width='16'%20height='16'%3e%3cpath%20d='M48%2064C21.5%2064%200%2085.5%200%20112c0%2015.1%207.1%2029.3%2019.2%2038.4L236.8%20313.6c11.4%208.5%2027%208.5%2038.4%200L492.8%20150.4c12.1-9.1%2019.2-23.3%2019.2-38.4c0-26.5-21.5-48-48-48H48zM0%20176V384c0%2035.3%2028.7%2064%2064%2064H448c35.3%200%2064-28.7%2064-64V176L301.8%20334.2c-27.1%2020.3-64.5%2020.3-91.6%200L0%20176z'/%3e%3c/svg%3e";
const shieldIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='%2364748B'%20width='16'%20height='16'%3e%3cpath%20d='M256%200c4.6%200%209.2%201%2013.4%202.9L457.7%2082.8c22%209.3%2036.3%2030.8%2036.3%2054.6c0%20121.2-61.9%20268.4-224.2%20367.6c-8.5%205.2-19.1%205.2-27.6%200C77.9%20405.8%2016%20258.6%2016%20137.4c0-23.8%2014.3-45.3%2036.3-54.6L242.6%202.9C246.8%201%20251.4%200%20256%200z'/%3e%3c/svg%3e";

export default function Footer() {
  const handleRedirect = () => {
    window.open("https://invitationnation.in/", "_blank");
  };

  return (
    <footer
      className="shared-footer-main"
      id="shared-footer-main"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px 30px',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Branding Section matching Image 3 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
          marginBottom: '40px',
          cursor: 'pointer'
        }}
        onClick={handleRedirect}
      >
        <h2
          style={{
            fontFamily: 'Kameron, serif',
            fontSize: '2.6rem',
            color: '#1e293b',
            fontWeight: '400',
            letterSpacing: '0.5px',
            margin: 0
          }}
        >
          Birthday Invitation website by{' '}
          <span style={{ color: '#21005D', fontWeight: '700', letterSpacing: '1px' }}>
            INVITATIONNATION
          </span>
        </h2>

        {/* Circular Anime/Brand Logo from Image 3 */}
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(33, 0, 93, 0.15)'
          }}
        >
          <img src={icons.JB} alt="Invitation Nation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '1px',
          backgroundColor: '#E2E8F0',
          marginBottom: '28px'
        }}
      />

      {/* Bottom Links Row matching Image 3 */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '22px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '32px'
          }}
        >
          <a
            href="#report"
            onClick={(e) => {
              e.preventDefault();
              alert("Thank you! For support, please contact marketing@codenimbussolutions.com");
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#64748B',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'sans-serif'
            }}
          >
            <img src={exclamationIcon} alt="" />
            <span>Report a Problem</span>
          </a>

          <a
            href="mailto:marketing@codenimbussolutions.com?subject=Invitation Support"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#64748B',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'sans-serif'
            }}
          >
            <img src={envelopeIcon} alt="" />
            <span>Contact Support</span>
          </a>

          <a
            onClick={() => window.open("https://invitationnation.in/privacy", "_blank")}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#64748B',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'sans-serif',
              cursor: 'pointer'
            }}
          >
            <img src={shieldIcon} alt="" />
            <span>Privacy Policy</span>
          </a>
        </div>

        {/* POWERED BY INVITATION NATION */}
        <div
          style={{
            fontSize: '1.3rem',
            color: '#64748B',
            letterSpacing: '1px',
            fontFamily: 'sans-serif',
            cursor: 'pointer'
          }}
          onClick={handleRedirect}
        >
          POWERED BY{' '}
          <span style={{ color: '#21005D', fontWeight: '700', textDecoration: 'underline' }}>
            INVITATION NATION
          </span>
        </div>

        {/* Legal text */}
        <p
          style={{
            fontSize: '1.3rem',
            color: '#94A3B8',
            fontFamily: 'sans-serif',
            margin: '0',
            textAlign: 'center'
          }}
        >
          © 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
        </p>
      </div>
    </footer>
  );
}
