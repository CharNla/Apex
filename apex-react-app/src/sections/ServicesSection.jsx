import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicesBg from '../assets/img/ServicesBg.png';

const serviceData = [
  {
    title: 'บริการออกแบบพัฒนาเว็บไซต์และระบบซอฟต์แวร์',
    details: [
      'เว็บไซต์บริษัท / เว็บไซต์องค์กร',
      'เว็บไซต์ขายสินค้า (E-Commerce)',
      'เว็บไซต์แสดงผลงาน (Portfolio)',
      'ระบบลงทะเบียน / จองคิว / สมัครสมาชิก',
      'ระบบจัดการภายในองค์กร (HR, Inventory, CRM, ERP)',
      'ระบบรายงานและวิเคราะห์ข้อมูล (Dashboard, Data Visualization)',
      'ระบบสั่งซื้อ / ระบบบริหารร้านค้า / ระบบคลังสินค้า',
      'Web Application แบบ Single Page Application (SPA) หรือ Progressive Web App (PWA)',
    ],
  },
  {
    title: 'บริการพัฒนา Mobile Application',
    details: [
      'แอปพลิเคชันสำหรับ iOS และ Android',
      'เชื่อมต่อกับระบบหลังบ้าน (Backend Integration)',
      'Push Notifications และ Real-time features',
      'รองรับการชำระเงิน (Payment Gateway)',
    ],
  },
  {
    title: 'บริการเสริมอื่น ๆ',
    details: [
      'ดูแลและบำรุงรักษาระบบ (Maintenance)',
      'ให้คำปรึกษาด้านเทคนิค (Technical Consulting)',
      'ปรับปรุงและเพิ่มประสิทธิภาพระบบเดิม (System Revamp & Optimization)',
      'บริการด้าน Cloud (Cloud Service & Migration)',
    ],
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="mb-3 overflow-hidden rounded-lg">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center p-4 text-left bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
    >
      <h3 className="text-base font-semibold text-white">{item.title}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="bg-white/5 backdrop-blur-sm"
        >
          <div className="p-4">
            <ul className="space-y-2 text-white/90">
              {item.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-purple-300">-</span>
                  <span className="text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      id="services"
      className="min-h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${ServicesBg})` }}
    >
      <div className="flex items-center justify-end min-h-screen">
        <div className="w-full max-w-xl p-4 md:p-8 md:mr-60">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-left mb-6 md:mb-10">
                Software House Detail
            </h2>
            {serviceData.map((item, index) => (
                <AccordionItem 
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
