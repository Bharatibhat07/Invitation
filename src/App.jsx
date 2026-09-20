import React, { useState, useEffect } from 'react';
import { templateData } from './data/templateData';
import OpenInvite from './components/OpenInvite';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Welcome from './components/Welcome';
import Blessing from './components/Blessing';
import Countdown from './components/Countdown';
import SendWishes from './components/SendWishes';
import WishesSection from './components/WishesSection';
import Schedule from './components/Schedule';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [wishes, setWishes] = useState(templateData.initialWishes || []);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (['home', 'gallery'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('popstate', handleHash);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('popstate', handleHash);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.history.pushState({ tab }, '', `#${tab}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddWish = (newWish) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <div className="bir007-theme">
      {!isOpened ? (
        <OpenInvite onOpen={() => setIsOpened(true)} />
      ) : (
        <div className="bir007-wrapper">
          <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
          
          <MusicPlayer contact={templateData.venue.phone} music={templateData.music} />

          <main>
            {activeTab === 'gallery' ? (
              <Gallery data={templateData} />
            ) : (
              <>
                <HeroSection data={templateData} date={templateData.birthday.birthday_date} />
                <Welcome data={templateData} />
                <Blessing data={templateData} />
                <Countdown date={templateData.birthday.birthday_date} />
                <SendWishes
                  personName={templateData.birthday.person_name}
                  birthdayYear={templateData.birthday.birthday_year}
                  onAddWish={handleAddWish}
                />
                <WishesSection wishes={wishes} />
                <Schedule date={templateData.birthday.birthday_date} data={templateData} />
              </>
            )}
          </main>

          <Footer />
        </div>
      )}
    </div>
  );
}
