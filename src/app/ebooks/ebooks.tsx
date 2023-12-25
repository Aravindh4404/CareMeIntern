import Image from "next/image";
import harryPotterImage from "./Images/harrypotter.jpeg";
import mazeRunnerImage from "./Images/mazerunner.jpg";
import gotImage from "./Images/gameofthrones.jpeg";
import wonderImage from "./Images/wonder.jpg";
import aladdinImage from "./Images/aladdin.jpg";
import lotrImage from "./Images/lordofrings.jpg";

const Ebooks = () => {
  const ebooks = [
    {
      id: 1,
      title: "Harry Potter",
      description:
        "Join young wizard Harry Potter as he embarks on his magical journey at Hogwarts.",
      author: "J.K. Rowling",
      rating: 4.8,
      image: harryPotterImage,
      audience:
        "Readers of all ages who enjoy fantasy and adventure, and those who want to immerse themselves in the enchanting world of wizards and spells.",
      highlights: [
        "Experience the wonder of the wizarding world through the eyes of Harry Potter",
        "Follow Harry's adventures as he learns about magic, friendship, and bravery",
        "Encounter iconic characters like Hermione Granger, Ron Weasley, and the wise Dumbledore",
        "Uncover the mysteries surrounding the Sorcerer's Stone and its powers",
      ],
    },
    {
      id: 2,
      title: "The Maze Runner",
      description:
        "Follow Thomas as he wakes up in a mysterious maze with no memory of how he got there.",
      author: "James Dashner",
      rating: 4.2,
      image: mazeRunnerImage,
      highlights: [
        "Embark on a thrilling and mysterious adventure in a maze",
        "Experience the suspense and challenges that Thomas faces",
      ],
    },
    {
      id: 3,
      title: "Game of Thrones",
      description:
        "Enter the world of Westeros, where noble families vie for control of the Iron Throne.",
      author: "George R.R. Martin",
      rating: 4.5,
      image: gotImage,
      highlights: [
        "Immerse yourself in the intricate politics and power struggles of Westeros",
        "Encounter a rich cast of characters from noble houses",
        "Experience epic battles and unexpected twists",
      ],
    },
    {
      id: 4,
      title: "Wonder",
      description:
        "Experience the heartwarming story of Auggie, a boy with facial differences, as he navigates school and friendships.",
      author: "R.J. Palacio",
      rating: 4.7,
      image: wonderImage,
      highlights: [
        "Learn valuable lessons about kindness, empathy, and acceptance",
        "Follow Auggie's journey as he overcomes challenges and makes friends",
      ],
    },
    {
      id: 5,
      title: "Aladdin",
      description:
        "Discover the magical tale of Aladdin, a young man who finds a magical lamp and a genie. A wonderful book that will take you to the deserts of Arabia.",
      author: "Unknown",
      rating: 4.3,
      image: aladdinImage,
      highlights: [
        "Embark on a fantastical journey in the vibrant world of Arabia",
        "Experience the magic of the genie and the enchanting story of Aladdin",
      ],
    },
    {
      id: 6,
      title: "The Lord of the Rings",
      description:
        "Embark on an epic journey with Frodo and his companions to destroy the One Ring and save Middle-earth.",
      author: "J.R.R. Tolkien",
      rating: 4.9,
      image: lotrImage,
      highlights: [
        "Join a fellowship on a quest to save Middle-earth from the dark power of the One Ring",
        "Explore a rich and immersive fantasy world",
        "Experience themes of friendship, courage, and the battle between good and evil",
      ],
    },
  ];

  return (
    <div className="bg-blue-100 py-20">
      <div className="container mx-auto">
        <h1 className="mb-10 ml-7 text-4xl font-bold text-violet-800">
          Latest Ebooks
        </h1>
        <p className="mb-6 ml-7 text-2xl text-gray-700">
          Explore our collection of latest ebooks and immerse yourself in these
          captivating stories.
        </p>
        <div className="flex flex-wrap">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="w-full p-7 sm:w-1/2 lg:w-1/3">
              <div className="cursor-pointer rounded-lg bg-white shadow-2xl duration-300 hover:scale-110 hover:bg-purple-100">
                <div className="p-4">
                  <div className="bg-gray-300">
                    <div className="mx-auto flex w-60 items-center justify-center">
                      <Image
                        src={ebook.image}
                        alt={ebook.title}
                        width={400}
                        height={400}
                        layout="responsive"
                        className="max-w-60 max-h-80 rounded-md"
                      />
                    </div>
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-purple-600">
                    {ebook.title}
                  </h2>
                  <p className="mb-3 text-gray-800">{ebook.description}</p>
                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Author: {ebook.author}
                    </span>
                    <span className="text-gray-500">
                      Rating: {ebook.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="mb-4 ml-7 text-2xl font-bold text-violet-800">
            Subscribe to Access
          </h2>
          <p className="mb-6 ml-7 text-lg text-gray-700">
            Enter your details below to subscribe and gain access to these
            amazing ebooks.
          </p>
          <form className="ml-7 flex flex-col items-start">
            <input
              type="text"
              placeholder="First Name"
              className="mb-3 rounded-lg border p-2 md:w-80"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="mb-3 rounded-lg border p-2 md:w-80"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-3 rounded-lg border p-2 md:w-80"
            />
            <input
              type="integer"
              placeholder="Phone"
              className="mb-3 rounded-lg border p-2 md:w-80"
            />
            <input
              type="text"
              placeholder="Country"
              className="mb-3 rounded-lg border p-2 md:w-80"
            />
            <button
              type="submit"
              className="rounded-lg bg-violet-800 px-6 py-2 text-white transition duration-300 hover:bg-violet-600"
            >
              Subscribe and Access
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ebooks;
