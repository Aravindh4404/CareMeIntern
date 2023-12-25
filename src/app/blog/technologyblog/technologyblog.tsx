"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { technologyBlogs } from "../blogdata";

const TechnologyBlogPage = () => {
  const initialBlogsToShow = 6;
  const [blogsToShow, setBlogsToShow] = useState(initialBlogsToShow);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setBlogsToShow(blogsToShow + 6);
  };

  const visibleBlogs = technologyBlogs.slice(0, blogsToShow);

  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-10">
        <div className="py-10">
          <Link legacyBehavior href="/blog">
            <a className="text-xl text-blue-600 hover:underline">
              Blog Homepage
            </a>
          </Link>
          <span className="text-xl text-gray-600"> / Technology</span>
        </div>
        <div className="mb-20 rounded-xl bg-lime-100 px-6 py-8 sm:px-16 sm:py-16">
          <h1 className="text-left text-4xl font-semibold text-green-700 sm:text-6xl">
            Technology
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg bg-white shadow-sm hover:shadow-xl "
            >
              <div className="relative h-56 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-primary-600 mb-2 mt-2 text-xl font-semibold sm:h-16 sm:text-2xl md:h-12">
                  {blog.title}
                </h2>
                <p className="mb-2 text-gray-600 sm:h-16 md:h-12">
                  {blog.description}
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  {blog.created_by}
                </a>
                <div className="flex items-center text-gray-500">
                  <span>{blog.created_on}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.timeToRead} min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleBlogs.length < technologyBlogs.length && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="rounded-sm bg-bgcolor px-4 py-2 text-white hover:bg-lime-100"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyBlogPage;
