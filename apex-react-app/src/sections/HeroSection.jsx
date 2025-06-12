import { useState, useEffect } from 'react';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner3.png';

const banners = [banner1, banner2, banner3];

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full bg-white">
      <div className="relative w-full min-h-[600px] h-screen overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentBanner === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center bg-white">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full max-h-screen object-contain"
              />
            </div>
          </div>
        ))}

        {/* Navigation dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentBanner === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;