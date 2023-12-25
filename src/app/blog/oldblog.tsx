
import Image from 'next/image';
import React from 'react';
import natureImage from './Images/nature.jpg'
import culinaryImage from './Images/culinary.jpg'
import artImage from './Images/art.jpg'
import ancientruinImage from './Images/ancientruins.jpg'
import techImage from './Images/tech.jpg'
import meditationImage from './Images/meditation.jpg'

const OldBlog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Exploring Nature',
      description: 'Discover the beauty of nature through our latest adventure.',
      created_on: '2023-06-18',
      created_by: 'Aravindh',
      image: natureImage,
    },
    {
      id: 2,
      title: 'A Culinary Journey',
      description: 'Embark on a delightful culinary journey with our new recipes.',
      created_on: '2023-07-25',
      created_by: 'Sanjay',
      image: culinaryImage,
    },
    {
      id: 3,
      title: 'Artistic Expressions',
      description: 'Unveiling the world of art and creativity in our latest exhibit.',
      created_on: '2023-08-12',
      created_by: 'John',
      image: artImage,
    },
    {
      id: 4,
      title: 'Exploring Ancient Ruins',
      description: 'Step back in time and explore the mysteries of ancient ruins.',
      created_on: '2023-09-05',
      created_by: 'Miles',
      image: ancientruinImage,
    },
    {
      id: 5,
      title: 'Tech Innovations',
      description: 'Stay updated with the latest tech innovations and breakthroughs.',
      created_on: '2023-10-18',
      created_by: 'Rithik',
      image: techImage,
    },
    {
      id: 6,
      title: 'Mindful Meditation',
      description: 'Achieve inner peace and mindfulness through meditation.',
      created_on: '2023-11-30',
      created_by: 'Wick',
      image: meditationImage,
    },

  ];

  return (
        <div className="bg-blue-100 py-20">
        <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-violet-800 ml-7 mb-10">Latest Blogs</h1>
        <div className="flex flex-wrap">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full sm:w-1/2 lg:w-1/3 p-7">
              <div className="bg-white shadow-2xl rounded-lg hover:bg-blue-100 hover:scale-110 duration-300 cursor-pointer">
                <div className="p-4">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={150}
                    height={900}
                    layout="responsive"
                    className="max-w-50 max-h-60 mb-4 rounded-md"
                  />
                  <h2 className="text-xl font-semibold text-purple-600 mb-2">{blog.title}</h2>
                  <p className="text-gray-800 mb-3">{blog.description}</p>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Posted on: {blog.created_on}</span>
                    <span className="text-gray-500">Posted by: {blog.created_by}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
  );
};

export default OldBlog;
