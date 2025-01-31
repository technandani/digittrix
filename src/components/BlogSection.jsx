import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "images/19.png",
      title: "Immigration Challenges and Solutions: Overview",
      description:
        "Immigration challenges and solutions vary greatly depending on the country, region, and context.",
    },
    {
      id: 2,
      image: "images/17.png",
      title: "How to Choose the Right Immigration Firm",
      description:
        "Choosing the right immigration firm is a crucial step in your journey to immigrate to a new country.",
    },
    {
      id: 3,
      image: "images/18.png",
      title: "Immigration Process Myths vs. Facts",
      description:
        "To foster a better understanding of this issue, it's essential to distinguish between myths and facts.",
    },
    {
      id: 4,
      image: "images/16.png",
      title: "Navigating the Immigration Process",
      description:
        "Immigrating to a new country is a life-changing decision that comes with its fair share of challenges.",
    },
  ];

  return (
    <section
      className=" py-16 bg-gray-200 padding "
      style={{ paddingTop: "150px", paddingBottom: "60px" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between pb-3 disnone">
          <div>
            <div className="text-3xl font-semibold text-blue-900">
              Recent Blogs
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Stay updated with our latest immigration insights!
            </p>
          </div>
          <div>
            <button className="mt-8 px-6 py-2 w-[120px] text-white bg-blue-900 rounded">
              View All
            </button>
          </div>
        </div>
          <div className="text-3xl font-semibold text-blue-900 maxNone py-2">
              Recent Blogs
            </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
