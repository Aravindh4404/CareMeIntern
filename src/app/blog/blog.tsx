/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronLeft, BsChevronRight, BsSliders } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  educationBlogs,
  newsBlogs,
  technologyBlogs,
  topPicks,
} from "./blogdata";

const Blog = () => {
  const ButtonGroup = ({
    next,
    previous,
  }: {
    next: () => void;
    previous: () => void;
  }) => {
    return (
      <>
        <div
          style={{ right: "10px", top: "180px" }}
          className="carousel-button-group mt-md-0 mt-2 hidden md:absolute md:inline-block"
        >
          <div className="d-flex justify-content-center flex-row">
            <button
              aria-label="Go to previous slide"
              className="m-1 ml-1 rounded-md border-2 border-gray-400 p-1"
              onClick={() => previous()}
            >
              <BsChevronLeft color="#7a7373" size={30} />
            </button>
            <button
              aria-label="Go to next slide"
              className="m-1 ml-1 rounded-md border-2 border-gray-400 p-1"
              onClick={() => next()}
            >
              <BsChevronRight size={30} color="#7a7373" />
            </button>
          </div>
        </div>
      </>
    );
  };

  const ButtonGrouptoppick = ({
    next,
    previous,
  }: {
    next: () => void;
    previous: () => void;
  }) => {
    return (
      <>
        <div
          style={{ right: "100px" }}
          className="carousel-button-group mt-md-0 mt-2 hidden md:absolute md:inline-block"
        >
          <div className="d-flex justify-content-center flex-row">
            <button
              aria-label="Go to previous slide"
              className="m-1 ml-1 rounded-md border-2 border-gray-400 p-1"
              onClick={() => previous()}
            >
              <BsChevronLeft color="#7a7373" size={30} />
            </button>
            <button
              aria-label="Go to next slide"
              className="m-1 ml-1 rounded-md border-2 border-gray-400 p-1"
              onClick={() => next()}
            >
              <BsChevronRight size={30} color="#7a7373" />
            </button>
          </div>
        </div>
      </>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const categoryBlogs: any = {
    Technology: { id: "technology", blogs: technologyBlogs },
    Education: { id: "education", blogs: educationBlogs },
    News: { id: "news", blogs: newsBlogs },
    Art: { id: "art", blogs: educationBlogs },
    Nature: { id: "nature", blogs: newsBlogs },
    Culinary: { id: "culinary", blogs: technologyBlogs },
    Music: { id: "music", blogs: educationBlogs },
  };

  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((category) => ({
        id: categoryBlogs[category].id,
        element: document.getElementById(categoryBlogs[category].id),
      }));

      const currentSection = sections.find(
        (section) =>
          section.element &&
          section.element.offsetTop <= window.scrollY + 100 &&
          section.element.offsetTop + section.element.offsetHeight >
            window.scrollY + 100
      );

      if (currentSection && currentSection.id !== activeCategory) {
        setActiveCategory(currentSection.id);
      } else if (!currentSection) {
        setActiveCategory("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCategory]);

  const handleCategoryClick = (category: any) => {
    const targetElement = document.getElementById(category);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setActiveCategory(category);
  };

  const categoryColors = [
    "bg-pink-400",
    "bg-orange-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-blue-400",
    "bg-red-400",
  ];

  const categories = [
    "Education",
    "News",
    "Technology",
    "Art",
    "Nature",
    "Culinary",
    "Music",
  ];

  const mostFamousBlog = topPicks.find((blog) => blog.id === 1);

  if (!mostFamousBlog) {
    return <p>Most famous blog not found</p>;
  }

  return (
    <div className="bg-primary ">
      {/* Permanent Header */}
      <div className="top-16 z-10 hidden w-full justify-center bg-bgcolor pb-4 pt-6 md:fixed md:flex">
        {categories.map((category) => (
          <Link
            key={categoryBlogs[category].id}
            legacyBehavior
            href={`#${categoryBlogs[category].id}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory(categoryBlogs[category].id);
                const targetElement = document.getElementById(
                  categoryBlogs[category].id
                );
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`mx-4 rounded-lg border-gray-500 px-4 py-1 text-lg hover:border ${
                activeCategory === categoryBlogs[category].id
                  ? "bg-secondary font-bold text-primary"
                  : "text-primary-600 bg-transparent"
              } transition-colors`}
            >
              {category}
            </button>
          </Link>
        ))}
      </div>

      <div className=" mx-auto pt-10 text-center md:py-48 md:pt-40">
        <h1 className="mb-5 text-5xl font-bold text-secondary">
          Mental health Blog
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Dive into the world of captivating articles related to various topics
          of mental health.
        </p>

        {/* Most Famous Blog Card */}
        <div className="container mb-10  flex flex-col text-left md:flex-row md:px-20">
          <div className="p-4 md:w-1/2">
            <a href="#">
              <div className="cursor-pointer rounded-3xl bg-white shadow-sm transition-shadow duration-300  hover:shadow-xl">
                <Image
                  src={mostFamousBlog.image}
                  alt={mostFamousBlog.title}
                  width={400}
                  height={400}
                  layout="responsive"
                  className="rounded-t-3xl"
                />
                <div className="px-10 py-4">
                  <h2 className="text-primary-600 mb-2 mt-3 text-3xl font-semibold">
                    {mostFamousBlog.title}
                  </h2>
                  <div className="pt-1">
                    <a href="#" className="text-blue-600 hover:underline">
                      {mostFamousBlog.created_by}
                    </a>
                    {" • CEO"}
                  </div>
                  <div className="pt-1 text-gray-500">
                    {mostFamousBlog.created_on}
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-col justify-between p-4 md:w-1/2">
            {/* Categories Card */}
            <div className="mb-4 rounded-3xl bg-bgcolor px-20 py-32">
              <h2 className="mb-4 py-4 text-3xl font-bold text-secondary">
                Categories
              </h2>
              <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                  <Link
                    href={`/blog/${category.toLowerCase()}blog`}
                    key={index}
                  >
                    <button
                      className={`rounded-lg px-4 py-2 text-center font-bold hover:scale-110 ${
                        categoryColors[index % categoryColors.length]
                      }`}
                    >
                      {category}
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us Card */}
            <div className="rounded-3xl bg-gradient-to-br from-green-200 to-yellow-100 px-16 pb-5 pt-10 shadow-sm">
              <p className="mb-4 text-lg text-gray-800">
                You&#39;ve got unique business needs. We&#39;ve got powerful
                solutions to meet them. Chat with us to get started.
                <p className="mt-4 cursor-pointer text-xl font-bold text-secondary transition-transform hover:translate-x-3">
                  Contact sales 🢂
                </p>
              </p>
            </div>
          </div>
        </div>

        {/* Top picks */}
        <div className="container px-6 text-left">
          <div className="my-6 border-t-4 border-gray-300"></div>
          <h2 className="mb-4 text-3xl font-semibold text-secondary">
            Togthr&#39;s top picks
          </h2>
          <div>
            <Carousel
              arrows={false}
              additionalTransfrom={0}
              renderButtonGroupOutside={true}
              customButtonGroup={
                <ButtonGrouptoppick
                  next={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  previous={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
              centerMode={false}
              containerClass="carousel-container"
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {topPicks.map((blog) => (
                <div key={blog.id} className="w-full flex-shrink-0 md:w-72">
                  <div
                    className={`cursor-pointer rounded-3xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                      categoryColors[blog.id % categoryColors.length]
                    }`}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-3xl"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <h2 className="text-primary-600 sm:h-30 mb-1 mt-1 text-lg font-semibold md:h-20">
                        {blog.title}
                      </h2>
                      <div className="pt-1">
                        <a href="#" className="text-blue-600 hover:underline">
                          {blog.created_by}
                        </a>
                        {" • CEO"}
                      </div>
                      <div className="pt-1 text-gray-500">
                        {blog.created_on}
                      </div>
                      <div className="pt-1">
                        <span
                          className={`rounded-lg px-2 py-1 text-sm text-white ${
                            categoryColors[blog.id % categoryColors.length]
                          }`}
                        >
                          {categories[blog.id % categories.length]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="mt-20  border-t-4 border-gray-300"></div>
        </div>

        {/* Caretgory blogs */}
        <div className="md:mx-12">
          {categories.map((category) => (
            <div
              key={categoryBlogs[category].id}
              id={categoryBlogs[category].id}
              className="category-section relative text-left md:px-6"
            >
              <div className="mb-4 flex justify-between  px-3 md:flex md:justify-start md:px-0 md:pt-20">
                <h2 className="text-3xl font-bold text-secondary md:mb-4 md:mr-7 md:text-4xl ">
                  {category}
                </h2>
                <Link href={`blog/${category.toLowerCase()}blog`}>
                  <button className="ml-2 cursor-pointer rounded-lg border-2 p-2 text-lg font-semibold text-gray-700 transition duration-500 hover:bg-bgcolor hover:text-white md:ml-4 md:px-4 md:py-2">
                    View All
                  </button>
                </Link>
              </div>

              <Carousel
                arrows={false}
                additionalTransfrom={0}
                renderButtonGroupOutside={true}
                customButtonGroup={
                  <ButtonGroup
                    next={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    previous={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                }
                centerMode={false}
                containerClass="carousel-container"
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {categoryBlogs[category].blogs.map((blog: any) => (
                  <div key={blog.id} className="w-full p-2">
                    <div className="cursor-pointer rounded-3xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                      <div className="relative h-64">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-3xl"
                        />
                      </div>
                      <div className="px-6 py-4">
                        <h2 className="text-primary-600 mb-4 mt-2 text-lg font-semibold sm:h-20 md:h-12">
                          {blog.title}
                        </h2>
                        <a
                          href="#"
                          className="text-left text-blue-600 hover:underline"
                        >
                          {blog.created_by}
                        </a>
                        <div className="flex items-center text-gray-500">
                          <span>{blog.created_on}</span>
                          <span className="mx-2">•</span>
                          <span>{blog.timeToRead} min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          ))}
        </div>
        <div className="hidden-sm bottom-5 right-5 opacity-60 transition-opacity hover:opacity-100 md:fixed">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
            Contact sales
          </button>
        </div>
      </div>
    </div>
  );
};
export default Blog;
