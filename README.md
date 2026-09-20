# 🪔 Digital Event Invitation — Kalaswaroopa Souri Shanthi

An elegant, interactive digital invitation and event website celebrating the **90th Birthday (Kalaswaroopa Souri Shanthi)** of **Sri G L Narasimha Murthy**. Built with **React** and **Vite**, featuring traditional Indian aesthetics, smooth micro-animations, and interactive guest features.

---

## ✨ Features

- **💌 Interactive Envelope Opening**: An animated welcome envelope screen (`OpenInvite`) inviting guests into the celebration.
- **⏳ Live Countdown Timer**: Dynamic countdown ticking down to the auspicious event time (**October 31, 2026 at 8:30 AM**).
- **🎶 Ambient Music Player**: Plays background chants (*Vedic Chant - Shatamaanam Bhavati*) with play/pause controls.
- **🙏 Divine Blessings & Biography**: Dedicated sections sharing family gratitude, life journey, and achievements.
- **📜 Event Schedule / Itinerary**: Clean timeline outlining the day's events:
  - *8:30 AM* — Kalaswaroopa Souri Shanthi Pooja
  - *11:30 AM* — Felicitation Ceremony
  - *12:30 PM Onwards* — Maha Prasada
- **✍️ Interactive Wishes Wall (Guestbook)**: Enables family, friends, and well-wishers to write and submit their blessings directly on the site.
- **📍 Venue & Map Integration**: Direct Google Maps link and venue details for **S L N Party Hall, Vijayanagar, Bengaluru**.
- **🖼️ Photo Gallery**: Interactive photo showcase highlighting precious family memories.
- **📱 Fully Responsive**: Designed for all device sizes, optimized for mobile viewing and instant messaging sharing (WhatsApp, Telegram, etc.).

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with custom theme variables and responsive layout
- **Typography**: Google Fonts (*Alex Brush*, *Cormorant Garamond*, *Kameron*)
- **Icons & Graphics**: Custom traditional motifs and SVG icons

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bharatibhat07/Invitation.git
   cd Invitation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, vectors, background textures)
├── src/
│   ├── assets/             # Project icons, audio files, and imagery
│   │   ├── audio/          # Background devotional chanting audio
│   │   └── images/         # Profile and event pictures
│   ├── components/         # Modular React components
│   │   ├── Blessing.jsx    # Family blessings and gratitude section
│   │   ├── Countdown.jsx   # Live event countdown clock
│   │   ├── Footer.jsx      # Page footer and contact info
│   │   ├── Gallery.jsx     # Photo gallery view
│   │   ├── HeroSection.jsx # Hero showcase with milestone badge
│   │   ├── MusicPlayer.jsx # Audio player controller
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── OpenInvite.jsx  # Envelope open interaction screen
│   │   ├── Schedule.jsx    # Event timeline and ceremony itinerary
│   │   ├── SendWishes.jsx  # Wishes submission form
│   │   ├── Welcome.jsx     # Welcome address
│   │   └── WishesSection.jsx # Display list of submitted wishes
│   ├── data/
│   │   └── templateData.js # Centralized configuration for event details & text
│   ├── hooks/              # Custom React hooks (e.g. useInView)
│   ├── styles/             # Modular CSS stylesheets
│   ├── App.jsx             # Main application orchestrator
│   └── main.jsx            # Application entry point
├── index.html              # HTML template with SEO and font tags
├── package.json            # Project scripts and dependencies
└── vite.config.js          # Vite configuration
```

---

## ⚙️ Customizing Event Information

All event-specific details (person name, venue, timings, photos, initial wishes) can be edited in a single file:

👉 [`src/data/templateData.js`](src/data/templateData.js)

```javascript
export const templateData = {
  venue: {
    phone: "+91 6364469555",
    venue_name: "S L N party hall",
    venue_location_link: "https://maps.google.com/...",
    venue_description: "..."
  },
  birthday: {
    EventName: "Kalaswaroopa Souri Shanthi",
    person_name: "Sri G L Narasimha Murthy",
    birthday_year: "90th",
    birthday_date: "2026-10-31T08:30",
    ...
  },
  ...
};
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
