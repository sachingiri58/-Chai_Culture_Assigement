import "./App.css";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="page">
      <div className="card">
      <img src={logo} alt="Chai Culture Logo" className="logo" />


        <h1 className="title">Brew the Royal Tradition</h1>

        <p className="description">
          Experience premium instant chai inspired by royal Indian households.
        </p>

        <div className="badge">Launching Soon</div>

        <div className="email-box">
          <input type="email" placeholder="Enter your email" />
          <button>Notify Me</button>
        </div>

        <div className="socials">
          Instagram • Facebook • Twitter
        </div>
      </div>
    </div>
  );
}
