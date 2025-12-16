import './Courses.css';

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
    image: '/images/course1.jpg',
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
    image: '/images/course2.jpg',
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
    image: '/images/course3.jpg',
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
    image: '/images/course4.jpg',
  },
];

export default function Courses() {
  return (
    <section className="courses">
      {/* HEADER */}
      <div className="courses-header">
        <div>
          <span className="section-tag">TOP POPULAR COURSE</span>
          <h2>Explore Featured Courses</h2>
        </div>

        <button className="browse-btn">Browse Edunity Courses</button>
      </div>

      {/* GRID */}
      <div className="courses-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            {/* IMAGE */}
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <span className="course-badge">{course.category}</span>
            </div>

            {/* CONTENT */}
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
