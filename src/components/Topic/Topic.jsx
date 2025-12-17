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
      <div className="topics-gap"/>
      <div className="topics-header">
        <div className="topic-header-left">
            <div className="category">CATEGORY</div>
            <div className="card-topic">Favorite Topics To Learn</div>
        </div>
        <div className="topic-header-right">
            <button className="browse-btn">Browse Edunity Courses</button>
        </div>
      </div>
      <div className="topics-gap"/>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div className="topic-card" key={index}>
            <img src={topic.icon} alt={topic.title} />
            <p>{topic.title}</p>
          </div>
        ))}
      </div>
      <div className="topics-gap"/>
    </section>
  );
}
