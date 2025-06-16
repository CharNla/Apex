import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner3.png';
import bg1 from '../assets/img/พื้นหลังพญานาค.png';
import bg2 from '../assets/img/bg2.png';
import ApexCircle from '../components/ui/Apexcircle';
import flow from '../assets/img/flow.png';
import overviewMonitoring from '../assets/img/OverviewMonitoring.png';
import icon1 from '../assets/icon/monitor section/1.png';
import icon2 from '../assets/icon/monitor section/2.png';
import icon3 from '../assets/icon/monitor section/3.png';
import icon4 from '../assets/icon/monitor section/4.png';
import icon5 from '../assets/icon/monitor section/5.png';
import icon6 from '../assets/icon/monitor section/6.png';

const banners = [banner1, banner2, banner3];

const monitoringItems = [
  {
    icon: icon1,
    title: 'Server Monitoring',
    details: [
      'ตรวจสอบสถานะการทำงานของ Server เช่น CPU, RAM, Disk, Load, Temperature',
      'รองรับทั้ง Physical และ Virtual Server',
      'แจ้งเตือนเมื่อ Server down หรือมีการใช้งานทรัพยากรเกินค่าที่กำหนด',
    ],
  },
  {
    icon: icon2,
    title: 'Network Monitoring',
    details: [
      'ตรวจสอบอุปกรณ์ Network เช่น Router, Switch, Firewall, Load Balancer',
      'วิเคราะห์ปริมาณทราฟฟิก (Traffic Analysis), Bandwidth Usage และ Latency',
      'แจ้งเตือนเมื่อพบปัญหา เช่น Packet Loss, Interface Down หรือ Link Fail',
      'รองรับ SNMP, NetFlow, ICMP และ Protocol อื่น ๆ',
    ],
  },
  {
    icon: icon3,
    title: 'Cloud Monitoring',
    details: [
      'รองรับผู้ให้บริการ Cloud ชั้นนำ (AWS, Azure, Google Cloud, Oracle Cloud ฯลฯ)',
      'ตรวจสอบ Virtual Machine, Storage, Load Balancer และ Cloud Database',
      'วิเคราะห์ค่าการใช้งาน เช่น CPU Credit, Storage IOPS, Cost Estimation',
      'แจ้งเตือนการใช้งานเกินงบ หรือการเข้าถึงที่ผิดปกติ',
    ],
  },
  {
    icon: icon4,
    title: 'IoT Monitoring',
    details: [
      'ตรวจสอบอุปกรณ์ IoT ทั้งในอุตสาหกรรมและ Smart Devices',
      'ตรวจสอบสถานะการเชื่อมต่อ, เช่นเซ็นเซอร์, แรงดันไฟ, อุณหภูมิ และค่าการวัดอื่น ๆ',
      'รองรับโปรโตคอล MQTT, HTTP, CoAP, Modbus',
      'แจ้งเตือนแบบ Real-time เมื่ออุปกรณ์ไม่ตอบสนองหรือมีข้อมูลผิดปกติ',
    ],
  },
  {
    icon: icon5,
    title: 'Application Monitoring (APM)',
    details: [
      'ตรวจสอบการทำงานของเว็บไซต์, ระบบ ERP, CRM, eCommerce และ Mobile App',
      'วิเคราะห์ Response Time, Error Rate, Transaction Trace',
      'รองรับ Framework ยอดนิยม (Node.js, PHP, .NET, Java, Python ฯลฯ)',
      'แจ้งเตือนเมื่อเกิด Downtime',
    ],
  },
  {
    icon: icon6,
    title: 'Database Monitoring',
    details: [
      'ตรวจสอบ Database Server เช่น MySQL, PostgreSQL, SQL Server, Oracle, MongoDB',
      'วิเคราะห์ Query Performance, Slow Query, Connection Pool',
      'ตรวจสอบ Disk Usage, Table Lock, Backup Status',
      'แจ้งเตือนเมื่อฐานข้อมูลล่มหรือมีการใช้งานผิดปกติ',
    ],
  },
];

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (    <div className="relative w-full overflow-hidden bg-[#1E1B3C] font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto flex flex-col"
      >
        <div className="relative w-full h-[45vh] md:h-[calc(100vh-48px)]">
          <AnimatePresence mode="wait">
            {banners.map((banner, index) =>
              currentBanner === index ? (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full flex items-start justify-center relative">
                    <motion.img
                      src={banner}
                      alt={`Banner ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </motion.div>
              ) : null
            )}          </AnimatePresence>
          <div className="absolute bottom-[200px] w-full hidden md:flex justify-center items-center z-20">
            <motion.div
              className="flex space-x-4 px-4 py-2 rounded-full bg-black/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {banners.map((_, dotIndex) => (
                <motion.button
                  key={dotIndex}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentBanner === dotIndex ? 'bg-[#B05AE7]' : 'bg-white/60'
                  } hover:bg-[#B05AE7]`}
                  onClick={() => setCurrentBanner(dotIndex)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="w-full -mt-40 md:-mt-48 relative flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src={bg1}
            alt="พญานาค"
            className="w-full h-auto object-contain"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ApexCircle className="w-[180px] h-[180px] md:w-[500px] md:h-[500px]" />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-full relative">
            <img
              src={bg2}
              alt="bg2"
              className="w-full h-auto object-contain"
            />            {/* IT Infrastructure Section */}
            <div className="absolute top-[65%] md:top-[14%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 md:px-0 w-full">
              <h1 className="text-xl md:text-5xl font-bold text-white mb-3 md:mb-6">IT Infrastructure</h1>
              <div>
                <p className="text-xs md:text-base text-gray-300 max-w-7xl mx-auto leading-normal md:leading-relaxed">
                  ที่ปรึกษาด้าน IT Infrastructure: ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษา วิเคราะห์ความต้องการ และวางแผนเพื่อสร้างระบบ IT มุ่งเน้นการออกแบบและพัฒนา
                </p>
                <p className="text-xs md:text-base text-gray-300 max-w-7xl mx-auto leading-normal md:leading-relaxed">
                  ทั้งในส่วนของHardware Software และระบบ Network ให้สามารถรองรับการขยายตัวในอนาคตหรือการปรับตัวให้เข้ากับเทคโนโลยีใหม่ ๆ
                </p>
              </div>
            </div>
          </div>
      {/* Monitoring Section */}
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-3 text-xl font-bold text-black md:mb-6 md:text-5xl">
              Monitoring
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="mx-auto text-xs leading-normal text-gray-600 md:text-base md:leading-relaxed">
                Monitoring Tool หรือระบบตรวจสอบสถานะการทำงานของอุปกรณ์ เป็นเครื่องมือหรือโปรแกรมที่ใช้ในการติดตามและตรวจสอบสถานะของอุปกรณ์ต่างๆ ทางด้านไอที ไม่ว่าจะเป็น Server, Cloud, Network, Hardware ต่างๆ รวมถึงอุปกรณ์ IOT และ Application Service ต่างๆ โดยทั่วไปมักใช้สำหรับเฝ้าดูสถานะการดำเนินการของระบบ นอกจากนี้ยังช่วยในการตรวจจับปัญหาที่เกิดขึ้นก่อนที่จะส่งผลกระทบต่อผู้ใช้งานหรือธุรกิจ
              </p>
              <p className="mx-auto mt-4 text-xs leading-normal text-gray-600 md:text-base md:leading-relaxed">
                คุณสมบัติของ Monitoring Tool ประกอบไปด้วย :
              </p>
            </div>
          </div>
          <div className="mx-auto mt-4 flex w-full max-w-6xl items-center justify-center">
            <img
              src={flow}
              alt="Monitoring Flow"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {monitoringItems.map((item) => (
              <div key={item.title} className="flex items-start space-x-4">
                <img src={item.icon} alt="" className="w-16 h-16 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                  <ul className="mt-2 space-y-2">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-[#B05AE7]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="mt-4 inline-block font-semibold text-[#B05AE7] hover:underline">
                    เพิ่มเติม
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-6xl mx-auto relative">
            <img
              src={overviewMonitoring}
              alt="Overview Monitoring"
              className="h-auto w-full object-contain rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center text-white">
              <div className="w-2/5 p-4 md:p-8">
                <h2 className="text-lg md:text-3xl font-bold">Overview</h2>
                <h2 className="text-lg md:text-3xl font-bold mb-1 md:mb-3">Monitoring Tool</h2>
                <div className="text-[10px] md:text-sm space-y-1 md:space-y-2">
                  <p>
                    ฟีเจอร์เสริมที่ลูกค้าได้รับ ระบบ Dashboard แบบเรียลไทม์<br />
                    แสดงสถานะของทุกระบบในมุมมองเดียว
                  </p>
                  <p>
                    Alert System แจ้งเตือนผ่าน Email, LINE, Telegram หรือ<br />
                    Mobile App Reports & Analytics
                  </p>
                  <p>
                    รายงานประสิทธิภาพระบบแบบรายวัน รายสัปดาห์ และรายเดือน
                  </p>
                  <p>
                    Historical Logs เก็บข้อมูลย้อนหลังสำหรับการวิเคราะห์ปัญหา<br />
                    และแนวโน้ม ระบบ SLA Tracking
                  </p>
                  <p>
                    สำหรับองค์กรที่ต้องการตรวจสอบการให้บริการของทีม IT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;