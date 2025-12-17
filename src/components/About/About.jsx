import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src="../assets/about1.png" alt="About Edunity" />
      </div>

      <div className="about-content">
        <span className="section-tag">ABOUT US</span>

        <h2>
          We Are Always Ensure Best <br />
          Course For Your Learning
        </h2>

        <p>
          Edunity is an online learning platform that provides high-quality
          education resources from top instructors around the world.
        </p>

        <ul className="about-list">
          <li>
            {/* <img src={check} alt="check" /> */}
            Expert instructors with real experience
          </li>
          <li>
            {/* <img src={check} alt="check" /> */}
            Lifetime access to all courses
          </li>
          <li>
            {/* <img src={check} alt="check" /> */}
            Online  offline learning support
          </li>
        </ul>

        <button className="about-btn">Discover More</button>
      </div>
    </section>
  );
}
