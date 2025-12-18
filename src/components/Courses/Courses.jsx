import './Courses.css';
import course1 from "../../assets/course1.png"
import course2 from "../../assets/course2.png"
import course3 from "../../assets/course3.png"
import course4 from "../../assets/course4.png"



const courses = [
  {
    id: 1,
    category: 'Development',
    title: 'Statistics Data Science And Business..',
    author: 'Angela',
    rating: 4.7,
    price: 60,
    oldPrice: 120,
    lessons: 2,
    duration: '4h 50m',
    students: 'Students',
    image: course1,
  },
  {
    id: 2,
    category: 'Development',
    title: 'Statistics Data Science And Business..',
    author: 'Angela',
    rating: 4.7,
    price: 60,
    oldPrice: 120,
    lessons: 2,
    duration: '4h 50m',
    students: 'Students',
    image: course2,
    
  },
  {
    id: 3,
    category: 'Development',
    title: 'Statistics Data Science And Business..',
    author: 'Angela',
    rating: 4.7,
    price: 60,
    oldPrice: 120,
    lessons: 2,
    duration: '4h 50m',
    students: 'Students',
    image: course3,
  },
  {
    id: 4,
    category: 'Development',
    title: 'Statistics Data Science And Business..',
    author: 'Angela',
    rating: 4.7,
    price: 60,
    oldPrice: 120,
    lessons: 2,
    duration: '4h 50m',
    students: 'Students',
    image: course4,
  },
];
export default function Courses() {
  return (
    <section className="courses">
    
      <div className="courses-header">
        <div>
          <span className="section-tag">TOP POPULAR COURSE</span>
          <h2>Explore Featured Courses</h2>
        </div>

        <button className="browse-btn">Browse Edunity Courses</button>
      </div>
      <div className="courses-grid">
        {courses.map(course => (
       <div className="course-card" key={course.id}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <span className="course-badge">{course.category}</span>
            </div>
            <div className="course-content">
              <div className="rating">
                ⭐⭐⭐⭐⭐ <span>({course.rating})</span>
              </div>

              <h3>{course.title}</h3>

              <p className="author">
                By <strong>{course.author}</strong> in {course.category}
              </p>

              <div className="price">
                ${course.price}
                <span>${course.oldPrice}</span>
              </div>
            </div>
            <div className="course-footer">
              <span>📘 {course.lessons} Lessons</span>
              <span>⏱ {course.duration}</span>
              <span>👥 {course.students}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
