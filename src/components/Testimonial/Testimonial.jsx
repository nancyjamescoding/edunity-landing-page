import './Testimonial.css';

import studentImg  from "../../assets/testimonial.png"
import avatar from '../../assets/avator.png';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonial-image">
          <img src={studentImg} alt="Student testimonial" />
        </div>
        <div className="testimonial-card">
          <span className="quote-icon">“</span>

          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <div className="testimonial-author">
            <img src={avatar} alt="Gloria Burnett" />
            <div>
              <h4>Gloria Burnett</h4>
              <span>Software Developer</span>
            </div>
          </div>
          <div className="testimonial-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
