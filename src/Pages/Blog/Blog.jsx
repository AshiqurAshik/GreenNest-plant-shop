import React, { useEffect, useState } from 'react';

const blogPromise = fetch('/blog.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  // Observe dark mode changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    blogPromise.then((data) => {
      if (data) setBlogs(data);
    });
  }, []);

  return (
    <div
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-gray-300' : 'bg-gradient-to-b from-green-50 to-green-100 text-gray-800'
      }`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-4 transition-colors duration-300 ${
            isDark ? 'text-green-300' : 'text-green-900'
          }`}
        >
          🌱 Our Blog
        </h2>
        <p
          className={`px-2 text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-green-700'
          }`}
        >
          Discover stories, guides, and insights about plant care, growth, and
          sustainability — written by plant lovers, for plant lovers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`rounded-3xl overflow-hidden transform transition-all duration-300 ${
              isDark
                ? 'bg-gray-800 shadow-gray-700 hover:-translate-y-2 hover:shadow-2xl'
                : 'bg-white shadow-lg hover:-translate-y-2 hover:shadow-2xl'
            }`}
          >
            <div className="overflow-hidden h-52">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col h-full">
              <h3
                className={`text-2xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-green-300 hover:text-green-400' : 'text-green-800 hover:text-green-900'
                }`}
              >
                {blog.title}
              </h3>
              <p className={`flex-grow transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {blog.snippet}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
