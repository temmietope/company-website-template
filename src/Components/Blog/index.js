import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogposts = [
    {
      id: "first blog-post",
      header: "New Adventure",
      date: "17 March 2019",
      post:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      id: "second blog-post",
      header: "New Adventure",
      date: "17 March 2019",
      post:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut esse cillum dolore eu fugiat."
    },
    {
      id: "third blog-post",
      header: "New Adventure",
      date: "17 March 2019",
      post:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ."
    }
  ];
  return (
    <div className="blog" id="blog">
      <p className="blog-stories">BLOG STORIES</p>
      <div className="blog-header">
        <h1>Check Our News</h1>
        <span className="arrows">
          <i className="fas fa-arrow-left small-icon" />
          <i className="fas fa-arrow-right long-icon" />
        </span>
      </div>
      <div className="blog-posts">
        {blogposts.map((post, index) => {
          return (
            <div className={post.id} key={index}>
              <h5>{post.header}</h5>
              <span>{post.date}</span>
              <p>{post.post}</p>
              <i className="fas fa-arrow-right long-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
