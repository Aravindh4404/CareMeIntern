"use client";
import React from "react";
import Image from "next/image";
import birdingImage from "./Images/birding.jpg";
import ReactPlayer from "react-player";
// import { YouTubePlayer } from 'react-youtube';

const WebinarPage = () => {
  const webinars = {
    id: 1,
    title: "Webinar: Birding Adventures",
    description: `Explore the world of birds and learn about different species, habitats, and bird-watching techniques. 
                  Join us as we dive into the diverse avian ecosystems, from lush rainforests to arid deserts, 
                  and discover the mesmerizing behaviors and adaptations that make each bird unique.`,
    speaker: "Jane Smith",
    date: "2023-08-15",
    image: birdingImage,
    videoUrl: "https://youtu.be/Kp19cYALr7c",
  };

  return (
    <div className="w-full bg-blue-100  py-10">
      <h1 className="mb-4 px-20 pb-3 text-3xl font-semibold text-blue-800">
        {webinars.title}
      </h1>
      <p className="px-20 text-xl text-gray-600">{webinars.description}</p>
      <div className="mt-6">
        <div className="mx-auto my-10 h-[220px] w-[280px] px-2 md:h-[520px] md:w-[700px]">
          <ReactPlayer
            className="react-player "
            url={webinars.videoUrl}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;
