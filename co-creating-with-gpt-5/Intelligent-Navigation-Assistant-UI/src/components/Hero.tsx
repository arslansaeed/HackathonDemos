import React, { useState, useEffect } from 'react';

export function Hero() {
  const images = [
    '/images/main_image.jpg',
    '/images/main_image1.jpg',
    '/images/main_image2.jpg',
    '/images/main_image4.jpg',

    '/images/main_image5.jpg',

    '/images/main_image7.jpg',

    '/images/main_image8.jpg',
    '/images/main_image9.jpg',

    '/images/main_image11.jpg',
    '/images/main_image12.jpg',
    '/images/main_image13.jpg',

    '/images/main_image15.jpg',

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Navigating the World Together
            </h1>
            <p className="text-xl mb-6">
              An intelligent navigation assistant for visually impaired
              individuals, providing real-time descriptive audio feedback about
              environmental obstacles.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#download"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Download Now
              </a>
              <a
                href="#learn-more"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={images[currentIndex]}
              alt="Navigation assistance"
              className="rounded-lg shadow-2xl max-w-full h-auto transition-opacity duration-1000"
              style={{ width: "415px", height: "283px" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
}
