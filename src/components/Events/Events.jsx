import './Events.css';

const events = [
  {
    date: '08',
    month: 'October',
    title: 'print, and publishing industries for previewing',
    time: '11:00am - 03:00pm',
    location: 'USA',
    image: '/images/event1.jpg',
  },
  {
    date: '21',
    month: 'February',
    title: 'print, and publishing industries for previewing',
    time: '11:00am - 03:00pm',
    location: 'USA',
    image: '/images/event2.jpg',
  },
  {
    date: '25',
    month: 'April',
    title: 'print, and publishing industries for previewing',
    time: '11:00am - 03:00pm',
    location: 'USA',
    image: '/images/event3.jpg',
  },
];

export default function Events() {
  return (
    <section className="events">
      <span className="events-tag">OUR EVENTS</span>
      <h2>Yearly Events And Program</h2>

      <div className="events-grid">
        {events.map((event, i) => (
          <div className="event-card" key={i}>
            <div className="event-image">
              <img src={event.image} alt={event.title} />

              <div className="event-date">
                <h4>{event.date}</h4>
                <span>{event.month}</span>
              </div>
            </div>

            <div className="event-content">
              <h3>{event.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit,
                sed do eiusmod tempor
              </p>

              <div className="event-meta">
                <span>🕒 {event.time}</span>
                <span>📍 {event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
