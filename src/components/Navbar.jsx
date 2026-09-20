import React from 'react';

export default function Navbar({ activeTab, onTabChange }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const handleItemClick = (id) => {
    if (onTabChange) {
      onTabChange(id);
    }
  };

  return (
    <div className={`bir007-shared-navbar-container ${activeTab === 'gallery' ? 'bir007-navbar-light' : 'bir007-navbar-dark'}`}>
      <nav className="shared-navbar fixed bir007-navbar">
        {items.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <span
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={item.label}
              onClick={() => handleItemClick(item.id)}
              onKeyDown={(e) => e.key === 'Enter' && handleItemClick(item.id)}
              className={`shared-nav-item ${isActive ? 'bir007-active' : ''}`}
            >
              <span className="nav-label">{item.label}</span>
            </span>
          );
        })}
      </nav>
    </div>
  );
}
