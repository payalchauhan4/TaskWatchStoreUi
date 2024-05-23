import React from 'react';
import './ImageSection.css';

const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="info-cards">
        <div className="card">
          <h2>01</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus.</p>
        </div>
        <div className="card">
          <h2>02</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus.</p>
        </div>
        <div className="card">
          <h2>03</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus.</p>
        </div>
      </div>
      <div className="content">
        <div className="text-content">
          <h1>Elegant Timepieces Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam. Lorem ipsum dolor.</p>
          <button className="explore-button">Explore</button>
        </div>
        <div className="images-content">
          <img src="../images/watch1.png" alt="Watch 1" className="watch-image" />
          <img src="../images/watch2.png" alt="Watch 2" className="watch-image" />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
