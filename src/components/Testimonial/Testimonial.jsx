import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-image">
        <img src="/images/student.jpg" alt="Student" />
      </div>

      <div className="testimonial-card">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.”
        </p>

        <div className="author">
          <img src="/images/avatar.jpg" alt="avatar" />
          <div>
            <h4>Gloria Burnett</h4>
            <span>Software Developer</span>
          </div>
        </div>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
