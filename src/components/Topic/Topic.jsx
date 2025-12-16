import React from "react";
import "./Topic.css"
import business from '../../assets/icons/webdesign.png';
import design from '../../assets/icons/webdesign.png';
import dev from '../../assets/icons/webdesign.png';
import marketing from '../../assets/icons/marketing.png';
import photo from '../../assets/icons/contentwriting.png';

const topics = [
  { title: 'Business', icon: business },
  { title: 'Design', icon: design },
  { title: 'Development', icon: dev },
  { title: 'Marketing', icon: marketing },
  { title: 'Photography', icon: photo },
];

export default function Topics() {
  return (
    <section className="topics">
      <div className="topics-header">
        <span className="category">CATEGORY</span>
        <button className="browse-btn">Browse Edunity Courses</button>
      </div>
      <h2>Favorite Topics To Learn</h2>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div className="topic-card" key={index}>
            <div className="topic-icon">
              <img src={topic.icon} alt={topic.title} />
            </div>
            <p>{topic.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
