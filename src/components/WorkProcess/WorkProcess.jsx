import './WorkProcess.css';

export default function WorkProcess() {
  return (
    <section className="work-process">
      <span className="process-tag">WORKING STRATEGY</span>
      <h2>Our Work Process</h2>
      <div className="process-cards">
        <div className="process-card dashed">
          <div className="process-icon dark">
            🎓
          </div>
          <h4>START COURSE</h4>
          <p>
            Duis aute irure dolor reprehenderit in voluptate velit esse
            cillum dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>
        <div className="process-card active">
          <div className="process-icon light">
            🎓
          </div>
          <h4>MAKE DECISION</h4>
          <p>
            Duis aute irure dolor reprehenderit in voluptate velit esse
            cillum dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>
        <div className="process-card dashed">
          <div className="process-icon dark">
            🎓
          </div>
          <h4>GET A CERTIFICATE</h4>
          <p>
            Duis aute irure dolor reprehenderit in voluptate velit esse
            cillum dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>
      </div>
    </section>
  );
}
