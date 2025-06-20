import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import flow from '../assets/img/flow.png';
import MonitorBanner1 from '../assets/img/MonitorBanner/MonitorBanner1.png';
import MonitorBanner2 from '../assets/img/MonitorBanner/MonitorBanner2.png';
import MonitorBanner3 from '../assets/img/MonitorBanner/MonitorBanner3.png';
import MonitorBanner4 from '../assets/img/MonitorBanner/MonitorBanner4.png';
import icon1 from '../assets/icon/monitor section/1.png';
import icon2 from '../assets/icon/monitor section/2.png';
import icon3 from '../assets/icon/monitor section/3.png';
import icon4 from '../assets/icon/monitor section/4.png';
import icon5 from '../assets/icon/monitor section/5.png';
import icon6 from '../assets/icon/monitor section/6.png';

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

const bannerImages = [MonitorBanner1, MonitorBanner2, MonitorBanner3, MonitorBanner4];

const MonitoringSection = () => {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setActiveImage((prevActive) => (prevActive + 1) % bannerImages.length);
        }, 4000);

        return () => {
        clearInterval(timer);
        };
    }, [activeImage]);

    return (
        <div id="monitoring" className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
          <motion.div
            className="mx-auto mt-4 flex w-full max-w-6xl items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={flow}
              alt="Monitoring Flow"
              className="h-auto w-full object-contain"
            />
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {monitoringItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
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
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12 max-w-6xl mx-auto relative bg-gradient-to-br from-[#DFB2F3] to-[#5244A5] p-4 md:p-12 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-2/5 text-white">
                <h2 className="text-2xl md:text-4xl font-bold">Overview</h2>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Monitoring Tool</h2>
                <div className="text-xs md:text-base space-y-3 md:space-y-4 font-light">
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
            <div className="w-full md:w-3/5">
                <img
                src={bannerImages[activeImage]}
                alt="Overview Monitoring Tool"
                className="h-auto w-full object-contain rounded-lg shadow-lg"
                />
            </div>
            {/* Vertical Dots */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-y-3 hidden md:flex">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                    activeImage === index ? 'bg-[#5244A5]' : 'bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
}

export default MonitoringSection; 