import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src="/pixelvault_logo.png" alt="PixelVault Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#home">
                <img src="/ui_buttons.png" alt="Home" style={{clipPath: 'inset(100px 0 0 600px)'}} />
                HOME
              </a>
            </li>
            <li>
              <a href="#collection">
                <img src="/ui_buttons.png" alt="Collection" style={{clipPath: 'inset(100px 0 0 400px)'}} />
                COLLECTION
              </a>
            </li>
            <li>
              <a href="#profile">
                <img src="/ui_buttons.png" alt="Profile" style={{clipPath: 'inset(100px 0 0 200px)'}} />
                PROFILE
              </a>
            </li>
          </ul>
        </nav>
        <button className="login-btn">
          <img src="/ui_buttons.png" alt="Login" style={{clipPath: 'inset(300px 0 0 0)'}} />
        </button>
      </header>

      <section className="hero container">
        <h1>Collect Pixel Treasures</h1>
        <img src="/pixel_mascot.png" alt="PixelVault Mascot" className="mascot pixel-animation" />
        <button className="cta-button">
          <img src="/ui_buttons.png" alt="Start Collecting" style={{clipPath: 'inset(0 0 500px 0)'}} />
        </button>
      </section>

      <section className="collection container">
        <h2>RARE COLLECTIBLES</h2>
        <div className="collection-grid">
          {/* Common Card */}
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Common Sword" style={{clipPath: 'inset(0 75% 0 0)'}} />
          </div>
          
          {/* Uncommon Card */}
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Uncommon Potion" style={{clipPath: 'inset(0 50% 0 25%)'}} />
          </div>
          
          {/* Rare Card */}
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Rare Character" style={{clipPath: 'inset(0 25% 0 50%)'}} />
          </div>
          
          {/* Legendary Card */}
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Legendary Dragon" style={{clipPath: 'inset(0 0 0 75%)'}} />
          </div>
          
          {/* Additional cards for the grid */}
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Common Sword" style={{clipPath: 'inset(0 75% 0 0)'}} />
          </div>
          
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Uncommon Potion" style={{clipPath: 'inset(0 50% 0 25%)'}} />
          </div>
          
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Rare Character" style={{clipPath: 'inset(0 25% 0 50%)'}} />
          </div>
          
          <div className="collectible-card">
            <img src="/collectible_cards.png" alt="Legendary Dragon" style={{clipPath: 'inset(0 0 0 75%)'}} />
          </div>
        </div>
      </section>

      <section className="features container">
        <h2>FEATURES</h2>
        <div className="features-grid">
          <div className="feature">
            <img src="/ui_buttons.png" alt="Collect Feature" style={{clipPath: 'inset(500px 0 0 0)'}} />
            <h3>COLLECT</h3>
            <p>Discover and collect rare pixel treasures from different categories</p>
          </div>
          
          <div className="feature">
            <img src="/ui_buttons.png" alt="Trade Feature" style={{clipPath: 'inset(300px 0 200px 0)'}} />
            <h3>TRADE</h3>
            <p>Exchange your collectibles with other treasure hunters</p>
          </div>
          
          <div className="feature">
            <img src="/ui_buttons.png" alt="Showcase Feature" style={{clipPath: 'inset(200px 0 300px 0)'}} />
            <h3>SHOWCASE</h3>
            <p>Display your rarest finds in your personal pixel gallery</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-nav">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#collection">COLLECTION</a>
            <a href="#contact">CONTACT</a>
          </div>
          <p className="copyright">© 2025 PixelVault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
