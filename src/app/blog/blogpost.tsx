"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import natureImage from "./Images/nature.jpg";
import facebookLogo from "../headfoot/Images/facebook.png";
import instagramLogo from "../headfoot/Images/instagram.png";
import twitterLogo from "../headfoot/Images/twitter.png";
import { newsBlogs } from "./blogdata";
import backgroundheaderimage from "./Images/backheader.png";

const BlogPage = () => {
  const blog = {
    id: 1,
    title: "Discover the beauty of nature through our latest adventure",
    description: "Discover the beauty of nature through our latest adventure.",
    created_on: "2023-06-18",
    timeToRead: 5,
    category: "Nature",
    created_by: "Aravindh",
    image: natureImage,
  };

  const headerStyle = {
    backgroundImage: `url(${backgroundheaderimage.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* Header */}
      <header
        className="headerbackground py-10 text-center shadow"
        style={headerStyle}
      >
        <div className="container mx-auto ">
          <div className="flex items-center justify-center">
            <div className={`rounded-lg bg-red-400 px-3 py-1 text-white`}>
              {blog.category}
            </div>
          </div>
          <h2 className="mx-auto my-4 max-w-4xl text-center text-3xl font-semibold leading-tight tracking-normal text-secondary md:text-5xl">
            {blog.title}
          </h2>

          <div className="pt-1">
            <a href="#" className="text-blue-600 hover:underline">
              {blog.created_by}
            </a>
            {" • CEO"}
          </div>
          <div className="my-4 text-gray-600">
            <span>{blog.timeToRead} min read</span>
            <span className="mx-2">•</span>
            <span>Posted: {blog.created_on}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 ">
            {/* Left Column (visible on large screens) */}
            <aside className="sticky top-16 ml-2 hidden max-h-[calc(100vh-16rem)] lg:block ">
              <h4 className="mb-4 pt-10 text-xl font-semibold">Content</h4>
              <div className="max-h-[400px] overflow-auto">
                <ul className="space-y-2 text-lg text-gray-600">
                  <li>
                    <Link href="#section1" className="hover:underline">
                      Intro
                    </Link>
                  </li>
                  <li>
                    <Link href="#section2" className="hover:underline">
                      Subtopic
                    </Link>
                  </li>
                  <li>
                    <Link href="#section3" className="hover:underline">
                      Conclusion
                    </Link>
                  </li>
                  <li>
                    <Link href="#section4" className="hover:underline">
                      Section 1
                    </Link>
                  </li>
                  <li>
                    <Link href="#section5" className="hover:underline">
                      Section 2
                    </Link>
                  </li>
                  <li>
                    <Link href="#section6" className="hover:underline">
                      Section 3
                    </Link>
                  </li>
                  <li>
                    <Link href="#section7" className="hover:underline">
                      Section 4
                    </Link>
                  </li>
                  <li>
                    <Link href="#section8" className="hover:underline">
                      Section 5
                    </Link>
                  </li>
                  <li>
                    <Link href="#section9" className="hover:underline">
                      Section 6
                    </Link>
                  </li>
                  <li>
                    <Link href="#section10" className="hover:underline">
                      object storage across multiple data centers, you can
                      improve the overall performance of your application and
                      provide exceptional cust
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Center Column */}
            <article className="pt-10 text-xl md:col-span-5 lg:col-span-3">
              <p className="mb-8 text-gray-700">{blog.description}</p>
              <div>
                <p>
                  Businesses increasingly rely on cloud computing solutions to
                  streamline operations and drive innovation. Naturally, this
                  technology comes with risk—service disruption can mean lost
                  revenue, diminished customer trust, and reputational damage.
                  Being thoughtful and intentional about the data centers you
                  use as a business can help mitigate these risks.
                </p>
                <p id="section1">
                  Businesses increasingly rely on cloud computing solutions to
                  streamline operations and drive innovation. Naturally, this
                  technology comes with risk—service disruption can mean lost
                  revenue, diminished customer trust, and reputational damage.
                  Being thoughtful and intentional about the data centers you
                  use as a business can help mitigate these risks.
                </p>
                <p id="section2">
                  While it’s essential to choose the right data center location
                  for your business operations, there are various scenarios
                  where using multiple data centers can help you more
                  effectively grow and scale your business while making your
                  business more resilient against risk.
                </p>
                <p id="section3">
                  This article will discuss reasons for deploying across
                  multiple data centers rather than relying on a single data
                  center.
                </p>
                <p id="section4">
                  1. Regulatory compliance Many laws and regulations govern how
                  data is collected, shared, and stored. An essential aspect of
                  some of these regulations is that they often prohibit storing
                  certain data outside national boundaries. For instance,
                  consider an application accessed by customers living in
                  Cleveland, Ohio, and Toronto, Canada. In this situation, it
                  might be necessary to host the application in two data center
                  locations—Canada and The United States, even if the Toronto
                  data center is closer to both locations. Using data centers in
                  different geographies may be an important part of a company’s
                  overall regulatory compliance strategy.
                </p>
                <p id="section5">
                  2. Recover quickly from failures Despite the best efforts of
                  cloud service providers, data center failures can occur.
                  Recovering quickly is essential to ensure customer retention
                  and avoid data loss. Data loss can occur for various reasons,
                  including hardware failures, outages, natural disasters, and
                  failure of environmental controls resulting in fire.
                  Businesses must protect themselves, and their customers, from
                  these situations.
                </p>
                <p id="section6">
                  While it’s important for businesses to back-up data, restoring
                  data from backups can be time-consuming and inadequate in some
                  situations. To help mitigate the consequences of a data center
                  failure, you can deploy your application across several data
                  centers. The application hosted in one data center can serve
                  the incoming traffic, and the application hosted in another
                  data center (somewhere relatively close to the primary data
                  center) can serve as a backup node. If the first data center
                  goes offline for any reason, you can reroute the incoming
                  traffic to the application deployed in the second data center,
                  thereby preventing or minimizing data loss.
                </p>
                <p id="section7">
                  3. Optimize workloads by scaling resources geographically
                  Deploying across multiple data centers can improve your
                  application’s overall performance by optimizing various parts
                  of the workload, especially when you have a global customer
                  base.
                </p>
                <p id="section8">
                  Optimize unstructured data I/O If your application generates
                  and serves up unstructured data (static assets) like media and
                  text files, you can use object storage to store the data and
                  CDN to serve and distribute the data. The combination of
                  object storage and CDN can speed up unstructured data
                  distribution and improve content availability, especially for
                  applications with a global reach. For instance, if you
                  anticipate high user activity (i.e., users
                  uploading/downloading unstructured data) in a secondary
                  region, you can spin up an object storage instance in a data
                  center closer to that region.
                </p>
                <p id="section9">
                  Spinning up an object storage instance allows you to speed up
                  the data movement between the CDN endpoint and object storage
                  location and potentially prevent performance bottlenecks. When
                  users upload static assets to the CDN endpoint, the CDN
                  endpoint can quickly write the data to the object storage.
                  Similarly, the static assets stored in the object storage can
                  be promptly synced to the CDN location, reducing the wait time
                  and speeding up the download process.
                </p>
                <p id="section10">
                  By scaling your object storage across multiple data centers,
                  you can improve the overall performance of your application
                  and provide exceptional customer experiences.
                </p>
              </div>
            </article>

            {/* Right Column (visible on medium and large screens) */}
            <aside className="hidden flex-col items-center justify-start lg:flex">
              <div className="mb-4 text-center">
                <h4 className="text-xl font-semibold text-blue-600">Share:</h4>
                <div className="mt-2 flex space-x-4">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    <Image
                      src={facebookLogo}
                      alt="Facebook"
                      className="h-10 w-10 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    <Image
                      src={instagramLogo}
                      alt="Instagram"
                      className="h-10 w-10 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    <Image
                      src={twitterLogo}
                      alt="Twitter"
                      className="h-10 w-10 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
              <div className="w-48 rounded-3xl bg-gradient-to-br from-cyan-400 to-cyan-100 p-5 shadow-sm">
                <p className="mb-4 text-base text-gray-800 md:text-lg">
                  You&#39;ve got unique business needs. We&#39;ve got powerful
                  solutions to meet them.
                </p>
                <p className="cursor-pointer text-base font-bold text-blue-600 transition-transform hover:translate-x-3 md:text-lg">
                  Contact sales {"->"}
                </p>
              </div>
            </aside>
          </div>

          <section className="my-10 pt-10 md:mx-20">
            <h2 className="mb-6 pb-5 text-center text-4xl font-semibold text-secondary">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {newsBlogs.slice(0, 3).map((blog, index) => (
                <div key={blog.id} className="w-full">
                  <div className="cursor-pointer rounded-3xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                    <div className="relative h-48 md:h-64 lg:h-72">
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
