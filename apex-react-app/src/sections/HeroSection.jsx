import { useState, useEffect } from 'react';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner3.png';
import bg1 from '../assets/img/พื้นหลังพญานาค.png';
import bg2 from '../assets/img/พื้นหลัง2.png';
import apex from '../assets/img/ปีศาจมาร.png';

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
    <>
      <div className="relative w-full overflow-hidden bg-[#1E1B3C]">
        <div className="container mx-auto flex flex-col">
          <div className="relative w-full h-[calc(100vh-48px)]">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentBanner === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full flex items-start justify-center relative">
                  <img
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                  {/* Navigation dots - moved inside the banner container */}
                  <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 px-4 py-2 rounded-full">
                    {banners.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          currentBanner === dotIndex ? 'bg-[#B05AE7]' : 'bg-white/60'
                        } hover:bg-[#B05AE7]`}
                        onClick={() => setCurrentBanner(dotIndex)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full -mt-48 relative">
            <img
              src={bg1}
              alt="พญานาค"
              className="w-full h-auto object-contain"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={apex}
                alt="Apex"
                className="w-[800px] h-auto"
              />
            </div>
          </div>
          <div className="w-full relative">
            <img
              src={bg2}
              alt="พื้นหลัง2"
              className="w-full h-auto object-contain"
            />
            {/* IT Infrastructure Section */}
            <div className="absolute top-[14%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-5xl font-bold text-white mb-6">IT Infrastructure</h1>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                ที่ปรึกษาด้าน IT Infrastructure: ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษา วิเคราะห์ความต้องการ และวางแผนเพื่อสร้างระบบ IT มุ่งเน้นการออกแบบและพัฒนาทั้งในส่วนของHardware Software และระบบ Network ให้สามารถรองรับการขยายตัวในอนาคตหรือการปรับตัวให้เข้ากับเทคโนโลยีใหม่ ๆ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;