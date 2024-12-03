import React from "react";
import "./App.css"; // Add a CSS file for styling

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Textile Fusion Forum 2025</h1>
        <p>Weaving the Future of the Textile Industry</p>
        <p>11th-13th April 2025 | NSIC Ground Okhla, Delhi</p>
      </header>

      <section className="event-highlights">
        <h2>Event Highlights</h2>
        <ul>
          <li><strong>150+</strong> Exhibitors</li>
          <li><strong>100+</strong> Overseas Buyers</li>
          <li><strong>5000+</strong> Sq. Meter Area</li>
          <li><strong>20+</strong> Knowledge Sessions</li>
          <li><strong>3000</strong> Trade Visitors</li>
        </ul>
      </section>

      <section className="about">
        <h2>About Textile Fusion Forum</h2>
        <p>
          Welcome to the Textile Fusion Forum, where tradition meets innovation. 
          Experience the fusion of traditional Indian craftsmanship and modern 
          innovations at our premier event. This is more than a platform; it’s 
          where Indian textile excellence meets global demand.
        </p>
      </section>

      <section className="registration">
        <h2>Register Now</h2>
        <p>Secure your booth or register as a visitor today!</p>
        <button onClick={() => alert("Registration coming soon!")}>
          Register
        </button>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Phone: 011 - 42503540, +91 9818599623</p>
        <p>Email: <a href="mailto:exhibitor@textilefusionforum.com">exhibitor@textilefusionforum.com</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Textile Fusion Forum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
