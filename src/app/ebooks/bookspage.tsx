"use client"
import React from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";

import harryPotterImage from './Images/harrypotter.jpeg';

const StorybookDetail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const storybook = {
    
      id: 1,
      title: 'Harry Potter',
      description: 'Join young wizard Harry Potter as he embarks on his magical journey at Hogwarts School of Witchcraft and Wizardry, where he discovers his true identity, makes new friends, and faces the dark forces of the wizarding world.',
      author: 'J.K. Rowling',
      rating: 4.8,
      image: harryPotterImage,
      audience: 'Readers of all ages who enjoy fantasy and adventure, and those who want to immerse themselves in the enchanting world of wizards and spells.',
      highlights: [
        'Experience the wonder of the wizarding world through the eyes of Harry Potter',
        'Follow Harry\'s adventures as he learns about magic, friendship, and bravery',
        'Encounter iconic characters like Hermione Granger, Ron Weasley, and the wise Dumbledore',
        'Uncover the mysteries surrounding the Sorcerer\'s Stone and its powers',
      ],
    };
  

  return (
    //story descriptipn div
    <div className="bg-gray-100">
    <div className="container mx-auto py-12 my-5">
      <h1 className="text-4xl font-serif font-bold text-blue-800 py-5">{storybook.title}</h1>
      <div className="bg-blue-100 rounded-lg text-left p-5">
        <Image
          src={harryPotterImage}
          alt={storybook.title}
          width={400}
          height={400}
          className="rounded mx-auto my-5 hover:scale-110 duration-300"
        />
        <div className="flex justify-center mb-5">
        <a href="#accessform" className="block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 text-center">
              Get Access
        </a>
      </div>
         
        <div className="md:p-12 mx-auto md:w-[50%]">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold text-blue-600 mb-4">{storybook.title}</h1>
          <p className="text-gray-800 mb-4 text-lg font-serif">{storybook.description}</p>
          <h2 className="text-lg md:text-xl font-semibold mb-2">Who is this book for?</h2>
          <p className="text-gray-600 mb-4 text-lg font-serif">{storybook.audience}</p>
          <h2 className="text-lg md:text-xl font-semibold mb-2">What is inside?</h2>
          <ul className="text-gray-600 text-lg font-serif">
            {storybook.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>


 {/* Subscription adv */}
      <div className="mt-8 bg-blue-100 rounded-lg p-16">
 <h2 className="text-2xl font-bold mb-5 text-blue-700">Advantages of Subscription</h2>
    <div className="grid md:grid-cols-2 grid-cols-1  gap-8">
    <div className="bg-blue-700 rounded-lg p-4 text-white">
      <div className="flex items-center justify-center w-12 h-12 bg-white text-purple-700 rounded-full mb-4">
        <span className="text-xl font-bold">1</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Access to a growing library of enchanting stories</h3>
      <p className="text-gray-300">
        Immerse yourself in a diverse collection of captivating stories from various genres, ranging from fantasy and adventure to mystery and romance. Enjoy hours of reading pleasure with unlimited access.
      </p>
    </div>
    <div className="bg-blue-700 rounded-lg p-4 text-white">
      <div className="flex items-center justify-center w-12 h-12 bg-white text-purple-700 rounded-full mb-4">
        <span className="text-xl font-bold">2</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Exclusive content, behind-the-scenes, and author insights</h3>
      <p className="text-gray-300">
        Gain access to behind-the-scenes details, author interviews, and exclusive content that provides a deeper understanding of the stories and characters. Get a glimpse into the creative process and the minds behind the stories.
      </p>
    </div>
    <div className="bg-blue-700 rounded-lg p-4 text-white">
      <div className="flex items-center justify-center w-12 h-12 bg-white text-purple-700 rounded-full mb-4">
        <span className="text-xl font-bold">3</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Early access to new releases and updates</h3>
      <p className="text-gray-300">
        Be the first to enjoy newly released stories and receive updates on upcoming releases, ensuring you never miss out on the latest adventures. Stay informed about exciting new additions to the library.
      </p>
    </div>
    <div className="bg-blue-700 rounded-lg p-4 text-white">
      <div className="flex items-center justify-center w-12 h-12 bg-white text-purple-700 rounded-full mb-4">
        <span className="text-xl font-bold">4</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Connect with a community of fellow readers and enthusiasts</h3>
      <p className="text-gray-300">
        Join a vibrant community of readers and enthusiasts to discuss your favorite stories, share insights, and connect with like-minded individuals. Engage in meaningful conversations and expand your literary horizons.
      </p>
    </div>
  </div>
</div>


{/* form */}
        
<div className="mt-8 flex bg-blue-100 rounded-lg p-6 w-full md:w-[50%] mx-auto ">
  <div className="mx-auto">
    <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-4">Get Access to the Ebook</h2>
    <p className="text-gray-800 mb-4">Enter your details below to access the ebook and start your magical journey!</p>
    <form className="flex flex-col space-y-4" id="accessform" >
      <div className="flex flex-col space-y-1">
        <label htmlFor="fullName" className="text-gray-600 font-semibold">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Full Name"
          className={`border p-2 rounded-lg ${errors.fullName && 'border-red-500'}`}
          {...register('fullName', { required: true })}
        />
        {errors.fullName && <span className="text-red-500">Full Name is required</span>}
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-gray-600 font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className={`border p-2 rounded-lg ${errors.email && 'border-red-500'}`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="country" className="text-gray-600 font-semibold">
          Country
        </label>
        <input
          type="text"
          id="country"
          placeholder="Country"
          className={`border p-2 rounded-lg ${errors.country && 'border-red-500'}`}
          {...register('country', { required: true  })}
        />
        {errors.country && <span className="text-red-500">Country is required</span>}
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="phoneNumber" className="text-gray-600 font-semibold">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Phone Number"
          className={`border p-2 rounded-lg ${errors.phoneNumber && 'border-red-500'}`}
          {...register('phoneNumber', {
            required: 'Phone Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Invalid phone number (10 digits)',
            },
          })}
        />
        {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="organization" className="text-gray-600 font-semibold">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          placeholder="Organization"
          className={`border p-2 rounded-lg ${errors.organization && 'border-red-500'}`}
          {...register('organization', { required: 'Organization is required' })}
        />
        {errors.organization && <span className="text-red-500">Organisation is required</span>}
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="jobTitle" className="text-gray-600 font-semibold">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          placeholder="Job Title"
          className={`border p-2 rounded-lg ${errors.jobTitle && 'border-red-500'}`}
          {...register('jobTitle', { required: true })}
        />
        {errors.jobTitle && <span className="text-red-500">Job Title is required</span>}
      </div>

      <button
      onClick={handleSubmit(onSubmit)}
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
      >
        Get Access
      </button>
    </form>
  </div>
</div>

      </div>
    </div>
  );
};

export default StorybookDetail;
