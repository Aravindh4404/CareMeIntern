"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsBlogs } from "../blogdata";

const NewsBlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-10">
        <div className="py-10">
          <Link legacyBehavior href="/blog">
            <a className="text-xl text-blue-600 hover:underline">
              Blog Homepage
            </a>
          </Link>
          <span className="text-xl text-gray-600"> / News</span>
        </div>
        <div className="mb-20 rounded-xl bg-lime-100 px-16 py-16">
          <h1 className="text-left text-6xl font-semibold text-blue-500">
            News
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {newsBlogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg bg-white shadow-sm hover:shadow-xl"
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
                <h2 className="text-primary-600 mb-2 mt-2 text-xl font-semibold sm:h-20 md:h-12">
                  {blog.title}
                </h2>
                <p className="mb-2 text-gray-600 sm:h-20 md:h-12">
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
      </div>
    </div>
  );
};

export default NewsBlogPage;
