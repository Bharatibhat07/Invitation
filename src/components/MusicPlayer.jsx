import React, { useState, useRef } from 'react';
import backgroundMusic from '../assets/audio/background-music.mp3';

// Pure white phone handset icon (matching Image 1)
const phoneIconWhite = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

// Pure white music note with diagonal slash when muted (matching Image 1)
const musicMutedIconWhite = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
    <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73l4.73 4.73L21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2V7z" />
  </svg>
);

// Pure white active music note when unmuted
const musicPlayingIconWhite = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

export default function MusicPlayer({ contact, music }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const audioSrc = music?.custom_song || backgroundMusic;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Audio play blocked by browser policy:", err));
    }
  };

  return (
    <div className="bir007-music-section">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      {contact && (
        <button
          id="call-btn"
          type="button"
          aria-label="Call Contact"
          onClick={() => window.open(`tel:${contact}`)}
          title={`Call ${contact}`}
          style={{
            backgroundColor: '#8b181b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          {phoneIconWhite}
        </button>
      )}

      <button
        id="music-btn-main"
        type="button"
        aria-label="Toggle Audio"
        onClick={togglePlay}
        title={isPlaying ? "Pause Music" : "Play Vedic Chant"}
        style={{
          backgroundColor: '#8b181b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          border: 'none'
        }}
      >
        {isPlaying ? musicPlayingIconWhite : musicMutedIconWhite}
      </button>
    </div>
  );
}
