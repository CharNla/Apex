import { useState } from 'react';
import ProjectPreview from '../assets/img/ProjectPreview.png';
import { FiZoomIn, FiZoomOut, FiMaximize } from 'react-icons/fi';

const ProjectSection = () => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev / 1.2, 0.5));
  const handleResetZoom = () => setScale(1);

  return (
    <div id="portfolio" className="bg-white pt-16 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ours Project</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          สร้างสรรค์ประสบการณ์สำหรับการทำเว็ปไซต์
        </p>
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
        >
          <img
            src={ProjectPreview}
            alt="Project Preview"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button onClick={handleZoomIn} className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition">
            <FiZoomIn size={20} />
          </button>
          <button onClick={handleZoomOut} className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition">
            <FiZoomOut size={20} />
          </button>
           <button onClick={handleResetZoom} className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition">
            <FiMaximize size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
