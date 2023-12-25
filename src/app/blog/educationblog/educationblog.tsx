'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { educationBlogs } from '../blogdata'; 

const EducationBlogPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


    return (
        <div className='bg-primary'>
        <div className="container mx-auto py-10 px-4">
        <div className="py-10">
                    <Link legacyBehavior href="/blog">
                        <a className="text-blue-600 text-xl hover:underline">Blog Homepage</a>
                    </Link>
                    <span className="text-gray-600 text-xl"> / Education</span>
                </div>
      <div className="bg-bgcolor px-16 py-16 mb-20 rounded-xl">
        <h1 className="text-4xl sm:text-6xl font-semibold text-secondary text-left">Education</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {educationBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl">
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
              <h2 className="text-xl font-semibold text-primary-600 md:h-12 sm:h-20 mt-2 mb-2">{blog.title}</h2>
              <p className="text-gray-600 md:h-12 sm:h-20 mb-2">{blog.description}</p>
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
    
    export default EducationBlogPage;