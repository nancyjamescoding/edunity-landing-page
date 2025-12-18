import './About.css';
import aboutone from '../../assets/about1.png';
import abouttwo from '../../assets/about2.png';
import screenIcon from '../../assets/abouticon1.png';
import controlIcon from '../../assets/abouticon2.png';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-images">
          <img src={aboutone} alt="Online Learning" className="about-img-main" />
          <img src={abouttwo} alt="Mentorship" className="about-img-sub" />
          <span className="decor-square purple"></span>
          <span className="decor-square green"></span>
        </div>

        <div className="about-content">
          <span className="section-tag">ABOUT US</span>

          <h2>
            We Are Always Ensure Best <br />
            Course For Your Learning
          </h2>

          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="about-feature">
            <img src={screenIcon} alt="Sharing Screen" />
            <div>
              <h4>Sharing a Screen</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <img src={controlIcon} alt="Presenter Control" />
            <div>
              <h4>Presenter Control</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>

          <button className="about-btn">ADMISSION NOW</button>
        </div>

      </div>
    </section>
  );
}
