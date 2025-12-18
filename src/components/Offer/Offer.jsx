import './Offer.css'
import offer from '../../assets/offer.png';

export default function Offer() {
  return (
    <section className="offer">
      <div className="offer-overlay">
        <div className="offer-content">
          <span className="offer-tag">ARE YOU READY FOR THIS OFFER</span>

          <h2>40% offer for very first 100</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <div className="offer-buttons">
            <button className="btn-primary">Admission Now</button>
            <button className="btn-secondary">Our Courses</button>
          </div>
        </div>
        <div className="offer-video">
          <img src={offer} alt="" />
      </div>
      </div>
    </section>
  );
}
