import './Stats.css';

const stats = [
  {
    value: '6,879+',
    label: 'Learners & counting',
  },
  {
    value: '1,327+',
    label: 'Courses & Video',
  },
  {
    value: '1,359+',
    label: 'Certified Students',
  },
  {
    value: '1,557+',
    label: 'Registered Enrolls',
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-circle" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
