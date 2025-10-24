import React, { useEffect, useState } from 'react';

const blogPromise = fetch('/blog.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogPromise.then((data) => {
      if (data) setBlogs(data);
    });
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
          🌱 Our Blog
        </h2>
        <p className="text-green-700 text-lg md:text-xl max-w-2xl mx-auto">
          Discover stories, guides, and insights about plant care, growth, and
          sustainability — written by plant lovers, for plant lovers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-green-800 mb-3 hover:text-green-900 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">{blog.snippet}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
