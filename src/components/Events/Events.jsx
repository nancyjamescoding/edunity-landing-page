import './Events.css';
import  event1 from "../../assets/event1.png"
import  event2 from "../../assets/event2.png"
import  event3 from "../../assets/event3.png"

const events = [
  {
    date: '08',
    month: 'October',
    title: 'print, and publishing industries for previewing',
    time: '11:00am - 03:00pm',
    location: 'USA',
    image: event1,
  },
  {
    date: '21',
    month: 'February',
    title: 'print, and publishing industries for previewing',
    time: '11:00am - 03:00pm',
    location: 'USA',
    image: event2,
  },
  {
    date: '25',
    month: 'April',
    title: 'print, and publishing industries for previewing',
    time: '11:00am - 03:00pm',
    location: 'USA',
    image: event3,
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
