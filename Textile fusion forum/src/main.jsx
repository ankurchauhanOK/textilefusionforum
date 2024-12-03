import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h2>About the Event</h2>
          <p>Learn more about the Textile Fusion Forum 2025.</p>
        </section>
        <section id="highlights">
          <h2>Event Highlights</h2>
          <ul>
            <li>150+ Exhibitors</li>
            <li>100+ Overseas Buyers</li>
            <li>5000+ Sq. Meter Area</li>
            <li>20+ Knowledge Sessions</li>
            <li>3000 Trade Visitors</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;

