import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const blogPromise = fetch('/blog.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const HomeBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    blogPromise.then((data) => {
      if (data) setBlogs(data);
    });

    // Observe dark mode changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const previewBlogs = blogs.slice(0, 4);

  return (
    <div
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-green-50 to-green-100'
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
          className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-green-700'
          }`}
        >
          Discover stories, guides, and insights about plant care, growth, and
          sustainability — written by plant lovers, for plant lovers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {previewBlogs.map((blog) => (
          <div
            key={blog.id}
            className={`rounded-3xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${
              isDark
                ? 'bg-gray-800 shadow-gray-700'
                : 'bg-white shadow-lg'
            }`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col h-full">
              <h3
                className={`text-2xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-green-300 hover:text-green-200' : 'text-green-800 hover:text-green-900'
                }`}
              >
                {blog.title}
              </h3>
              <p
                className={`mb-6 flex-grow transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {blog.snippet}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See All Blogs Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/blog"
          className={`px-8 py-3 font-semibold rounded-full shadow-lg transition duration-200 ${
            isDark
              ? 'bg-green-700 text-gray-200 hover:bg-green-600'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          See All Blogs
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogSection;
