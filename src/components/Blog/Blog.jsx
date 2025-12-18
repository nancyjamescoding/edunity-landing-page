import './Blog.css';
import  blog1 from "../../assets/blog1.png"
import  blog2 from "../../assets/blog2.png"
const posts = [
  {
    image: blog1,
    author: 'Sunilra smoth',
    date: 'March 28, 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.',
  },
  {
    image: blog2,
    author: 'Sunilra smoth',
    date: 'March 28, 2023',
    title:
      'Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.',
  },
];

export default function Blog() {
  return (
    <section className="blog">
      <div className="blog-header">
        <div>
          <span className="blog-tag">POPULAR COURSES</span>
          <h2>
            Our Latest News <br />  Upcoming Blog Posts
          </h2>
        </div>

        <button className="view-all">View All Recent Post</button>
      </div>
    <div className="blog-grid">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} />

            <div className="blog-content">
              <div className="blog-meta">
                <span>👤 {post.author}</span>
                <span>📅 {post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <button className="read-more">Read More</button>
            </div>
      </div>
        ))}
      </div>
    </section>
  );
}
