import React from 'react';
import '../pagescss/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Locally</h1>
        <p>Your trusted local service provider platform</p>
      </header>

      <section className="overview">
        <h2>Services We Offer</h2>
        <p>
          Find trusted maids, electricians, plumbers, nannies, and many more
          professionals — all verified and available in your local area.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="flowchart">
          <div className="step">
            <div className="bubble">
              <span className="bubble-number">1</span>
              <span className="bubble-text">Sign Up</span>
            </div>
          </div>
          <div className="wave">➝</div>
          <div className="step">
            <div className="bubble">
              <span className="bubble-number">2</span>
              <span className="bubble-text">Browse</span>
            </div>
          </div>
          <div className="wave">➝</div>
          <div className="step">
            <div className="bubble">
              <span className="bubble-number">3</span>
              <span className="bubble-text">Connect</span>
            </div>
          </div>
          <div className="wave">➝</div>
          <div className="step">
            <div className="bubble">
              <span className="bubble-number">4</span>
              <span className="bubble-text">Get the Job Done</span>
            </div>
          </div>
        </div>
      </section>



      <section className="cta-buttons">
        <button onClick={() => navigate('/signup?role=customer')}>Hire a Service</button>
        <button onClick={() => navigate('/signup?role=provider')}>Join as a Provider</button>
      </section>

    </div>
  );
}

export default Home;
