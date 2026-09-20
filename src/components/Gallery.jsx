import React, { useState } from 'react';

// Arrow icons for pagination in Image 4
const leftArrowIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#8b181b">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>
);

const rightArrowIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" opacity="0.6">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
);

export default function Gallery({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      const newUrls = files.map(f => URL.createObjectURL(f));
      setUploadedPhotos(prev => [...prev, ...newUrls]);
    };
    input.click();
  };

  return (
    <div
      className="bir007-gallery-section"
      id="gallery"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#8b181b',
        backgroundImage: 'url(/assets/bg-Bh2fK3rq.png)',
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px 80px',
        boxSizing: 'border-box'
      }}
    >
      {/* Title: Gallery matching Image 4 */}
      <h2
        className="bir007-gallery-heading"
        style={{
          fontFamily: 'Kameron, serif',
          fontSize: '5.2rem',
          fontWeight: '700',
          color: '#ffffff',
          marginBottom: '35px',
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}
      >
        Gallery
      </h2>

      {/* Upload Pill Button matching Image 4 */}
      <button
        onClick={handleUploadClick}
        type="button"
        style={{
          backgroundColor: '#ffffff',
          color: '#8b181b',
          border: 'none',
          borderRadius: '30px',
          padding: '12px 42px',
          fontSize: '2.4rem',
          fontFamily: 'Kameron, serif',
          fontWeight: '500',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          marginBottom: uploadedPhotos.length > 0 ? '40px' : '90px',
          transition: 'transform 0.2s ease'
        }}
      >
        Upload
      </button>

      {/* Uploaded photos grid if any */}
      {uploadedPhotos.length > 0 && (
        <div
          style={{
            maxWidth: '1000px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '60px'
          }}
        >
          {uploadedPhotos.map((src, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                padding: '12px',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)'
              }}
            >
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Pagination Row matching Image 4 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px'
        }}
      >
        {/* Left white circular button */}
        <button
          type="button"
          aria-label="Previous Page"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
          }}
        >
          {leftArrowIcon}
        </button>

        {/* Page 1 text */}
        <span
          style={{
            fontFamily: 'Kameron, serif',
            fontSize: '2.4rem',
            color: '#ffffff',
            fontWeight: '500'
          }}
        >
          Page {currentPage}
        </span>

        {/* Right translucent circular button */}
        <button
          type="button"
          aria-label="Next Page"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          {rightArrowIcon}
        </button>
      </div>
    </div>
  );
}
