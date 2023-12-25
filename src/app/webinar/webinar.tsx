"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import birdingImage from "./Images/birding.jpg";
import trekkingImage from "./Images/trekking.jpg";
import aiImage from "./Images/ai.jpg";
import racingImage from "./Images/racing.jpg";
import cookingImage from "./Images/cooking.jpg";
import astronomyImage from "./Images/astronomy.jpg";
import sustainableLivingImage from "./Images/sustainableLiving.jpg";
import mindfulnessImage from "./Images/mindfulness.jpg";
import storytellingImage from "./Images/storytelling.jpg";
import sustainableFashionImage from "./Images/sustainableFashion.jpg";
import urbanGardeningImage from "./Images/urbanGardening.jpg";
import ancientCivilizationsImage from "./Images/ancientCivilizations.jpg";
import ReactPaginate from "react-paginate";

const Webinar = () => {
  const webinars = [
    {
      id: 1,
      title: "Webinar: Birding Adventures",
      description: `Explore the world of birds and learn about different species, habitats, and bird-watching techniques. 
                    Join us as we dive into the diverse avian ecosystems, from lush rainforests to arid deserts, 
                    and discover the mesmerizing behaviors and adaptations that make each bird unique.`,
      speaker: "Jane Smith",
      date: "2023-08-15",
      image: birdingImage,
      videoUrl: "https://youtu.be/Kp19cYALr7c",
    },
    {
      id: 2,
      title: "Webinar: Trekking and Outdoor Exploration",
      description: `Discover the thrill of trekking and outdoor adventures, including hiking, camping, and wilderness survival. 
                    Explore the untouched landscapes, breathtaking vistas, and hidden gems that await outdoor enthusiasts.`,
      speaker: "John Doe",
      date: "2023-08-20",
      image: trekkingImage,
      videoUrl: "https://youtu.be/nt6W-HWkS_E",
    },
    {
      id: 3,
      title: "Webinar: Artificial Intelligence Demystified",
      description: `Unravel the mysteries of AI and learn about its applications, challenges, and future possibilities. 
                    From self-driving cars to medical diagnoses, we'll delve into the transformative impact of artificial intelligence.`,
      speaker: "Alex Johnson",
      date: "2023-08-25",
      image: aiImage,
      videoUrl: "https://www.youtube.com/live/YzMwVZdHvmM?feature=share",
    },
    {
      id: 4,
      title: "Webinar: High-Speed Racing Techniques",
      description: `Experience the adrenaline of high-speed racing and discover the techniques used by professional racers. 
                    From mastering hairpin turns to achieving perfect braking points, we'll explore the art and science of racing.`,
      speaker: "Michelle Rodriguez",
      date: "2023-08-28",
      image: racingImage,
      videoUrl: "https://youtu.be/cKAzSmBtGQY",
    },
    {
      id: 5,
      title: "Webinar: Culinary Masterclass",
      description: `Embark on a culinary journey and learn cooking techniques, flavor profiles, and gourmet recipes. 
                    Join Chef Gordon Ramsay as he shares his culinary expertise and guides you through the intricacies of gastronomy.`,
      speaker: "Chef Gordon Ramsay",
      date: "2023-09-02",
      image: cookingImage,
      videoUrl: "https://www.youtube.com/live/ZthXyRGL_wo?feature=share",
    },
    {
      id: 6,
      title: "Webinar: Exploring the Night Sky",
      description: `Delve into the wonders of astronomy and stargazing, uncovering the mysteries of celestial objects. 
                    From constellations to galaxies, we'll navigate the cosmos and reveal the beauty of the night sky.`,
      speaker: "Dr. Neil deGrasse Tyson",
      date: "2023-09-08",
      image: astronomyImage,
      videoUrl: "https://youtu.be/6dZ7H75oC6U",
    },
    {
      id: 7,
      title: "Webinar: Sustainable Living Practices",
      description: `Learn about sustainable living practices and how to make environmentally conscious choices in your daily life. 
                    Discover strategies for reducing your carbon footprint, conserving resources, and promoting a greener future.`,
      speaker: "Emily Green",
      date: "2023-09-15",
      image: sustainableLivingImage,
      videoUrl: "https://youtu.be/6dZ7H75oC6U",
    },
    {
      id: 8,
      title: "Webinar: Mindfulness Meditation Workshop",
      description: `Immerse yourself in the art of mindfulness meditation and cultivate inner peace and emotional well-being. 
                    Join us for a transformative workshop that explores mindfulness techniques to enhance your mental clarity and resilience.`,
      speaker: "Meditation Guru",
      date: "2023-09-22",
      image: mindfulnessImage,
      videoUrl: "https://youtu.be/6dZ7H75oC6U",
    },
    {
      id: 9,
      title: "Webinar: The Power of Storytelling",
      description: `Unlock the secrets of impactful storytelling and learn how to captivate and engage your audience through narrative. 
                    Discover the elements of compelling storytelling and harness its influence in various forms of communication.`,
      speaker: "Sarah Storyteller",
      date: "2023-09-29",
      image: storytellingImage,
      videoUrl: "https://youtu.be/6dZ7H75oC6U",
    },
    {
      id: 10,
      title: "Webinar: Sustainable Fashion Revolution",
      description: `Join the movement for sustainable fashion and explore ethical practices, eco-friendly materials, and conscious consumerism. 
                    Learn how your choices can contribute to positive change in the fashion industry and promote a more sustainable future.`,
      speaker: "Fashion Activist",
      date: "2023-10-06",
      image: sustainableFashionImage,
      videoUrl: "https://youtu.be/6dZ7H75oC6U",
    },
    {
      id: 11,
      title: "Webinar: Urban Gardening and Green Spaces",
      description: `Discover the joys of urban gardening and how to create lush green spaces in urban environments. 
                    Learn about container gardening, vertical planters, and transforming small spaces into thriving gardens.`,
      speaker: "Green Thumb Expert",
      date: "2023-10-13",
      image: urbanGardeningImage,
      videoUrl: "https://youtu.be/6dZ7H75oC6U",
    },
    {
      id: 12,
      title: "Webinar: Exploring Ancient Civilizations",
      description: `Embark on a journey through time as we explore the mysteries and achievements of ancient civilizations. 
                    Uncover the secrets of ancient cultures, architectural marvels, and their enduring impact on the modern world.`,
      speaker: "Historical Archaeologist",
      date: "2023-10-20",
      image: ancientCivilizationsImage,
      videoUrl: "https://youtu.be/6dZ7H75oC6U",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const webinarsPerPage = 3;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * webinarsPerPage;
  const currentWebinars = webinars.slice(offset, offset + webinarsPerPage);

  return (
    <div className="bg-blue-100 py-20">
      <div className="container mx-auto py-8">
        <h1 className="mb-10 text-4xl font-bold text-violet-800">
          Latest Webinars
        </h1>
        <div className="flex flex-col">
          {currentWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="mb-7 flex flex-col rounded-lg bg-white p-7 md:flex-row"
            >
              <div className="flex flex-col pr-5">
                <h2 className="mb-2 text-xl font-semibold text-purple-600">
                  {webinar.title}
                </h2>
                <p className="mb-3 text-gray-800">{webinar.description}</p>
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Speaker: {webinar.speaker}
                  </span>
                  <span className="text-gray-500">Date: {webinar.date}</span>
                </div>
              </div>

              <a href={webinar.videoUrl} target="_blank">
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-blue-800">
          <ReactPaginate
            className="mr-2 flex"
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(webinars.length / webinarsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"mx-2"}
            previousClassName={"mx-2"}
            nextClassName={"mx-2"}
          />
        </div>
      </div>
    </div>
  );
};
export default Webinar;
