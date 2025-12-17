import './Register.css';

export default function Register() {
  return (
    <section className="register-section">
      {/* LEFT CONTENT */}
      <div className="register-left">
        <span className="section-tag">CONTACT WITH US</span>

        <h2>
          Register Now Get Premium <br /> Online Admission
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div className="countdown">
          <div className="time-box">
            <h3>112</h3>
            <span>DAYS</span>
          </div>
          <div className="time-box">
            <h3>21</h3>
            <span>HOURS</span>
          </div>
          <div className="time-box">
            <h3>2</h3>
            <span>MINUTES</span>
          </div>
          <div className="time-box">
            <h3>23</h3>
            <span>SECONDS</span>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="register-card">
        <span className="card-tag">GET IN TOUCH</span>
        <h3>Sign Up For Free Resources</h3>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">SUBMIT NOW</button>
        </form>
      </div>
    </section>
  );
}
