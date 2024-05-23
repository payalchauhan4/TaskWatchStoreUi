import React from 'react';
import './WatchSection.css';

const WatchSection = () => {
  return (
    <div className="watch-section">
      <div className="watch-content">
        <div className="main-watch">
          <img src="../images/banner.png" alt="Main Watch" className="main-watch-image" />
        </div>
        <div className="watch-info">
          <div className="info-item">
            <h2>01</h2>
            <p>Built to last, our watches offer durability and longevity, making them a valuable investment.</p>
          </div>
          <div className="info-item">
            <h2>02</h2>
            <p>Expertly crafted & made with the highest quality materials and meticulous attention to detail.</p>
          </div>
          <div className="info-item">
            <h2>03</h2>
            <p>Designed for both aesthetics and comfort, our watches are pleasing to wear as they are to look at.</p>
          </div>
        </div>
      </div>
      <div className="watch-thumbnails">
        <img src="../images/watch3.png" alt="Watch 1" className="thumbnail" />
        <img src="../images/watch4.png" alt="Watch 2" className="thumbnail" />
        <img src="../images/watch5.png" alt="Watch 3" className="thumbnail" />
      </div>
    </div>
  );
}

export default WatchSection;
