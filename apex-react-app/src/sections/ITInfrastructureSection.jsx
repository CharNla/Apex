import { motion } from 'framer-motion';
import bg2 from '../assets/img/bg2.png';
import ITimg1 from '../assets/img/IT Section/ITimg1.png';
import ITimg2 from '../assets/img/IT Section/ITimg2.png';
import ITimg3 from '../assets/img/IT Section/ITimg3.png';
import ITimg4 from '../assets/img/IT Section/ITimg4.png';
import ITimg5 from '../assets/img/IT Section/ITimg5.png';

const ITInfrastructureSection = () => {
    return (
        <div id="it-infrastructure" className="w-full py-12 md:py-20" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                   className="text-center"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ duration: 0.8 }}
                >
                   <h1 className="text-xl md:text-5xl font-bold text-white mb-3 md:mb-6">IT Infrastructure</h1>
                  <div className="max-w-7xl mx-auto">
                    <p className="text-xs md:text-base text-gray-300 leading-normal md:leading-relaxed">
                      ที่ปรึกษาด้าน IT Infrastructure: ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษา วิเคราะห์ความต้องการ และวางแผนเพื่อสร้างระบบ ITมุ่งเน้นการออกแบบและพัฒนา
                    </p>
                    <p className="text-xs md:text-base text-gray-300 leading-normal md:leading-relaxed">
                      ทั้งในส่วนของHardware Software และระบบ Network ให้สามารถรองรับการขยายตัวในอนาคตหรือการปรับตัวให้เข้ากับเทคโนโลยีใหม่ ๆ
                    </p>
                  </div>
                </motion.div>
    
                {/* Images Grid */}
                <div className="mt-12 space-y-4">
                   {/* Top Row */}
                  <motion.div
                     className="grid grid-cols-1 md:grid-cols-5 gap-4"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ staggerChildren: 0.2 }}
                  >
                    {/* Tech Image with Text Overlay (Span 3 cols) */}
                    <motion.div
                       className="relative md:col-span-3 rounded-lg shadow-2xl overflow-hidden"
                       variants={{
                         hidden: { opacity: 0, y: 20 },
                         visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                       }}
                    >
                       <img src={ITimg1} alt="Tech" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                       <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                         <h2 className="text-2xl md:text-3xl font-bold">การออกแบบระบบ</h2>
                         <h2 className="text-2xl md:text-3xl font-bold">Server</h2>
                         <p className="mt-2 text-sm md:text-base font-light text-gray-300 max-w-md">
                           วางแผนและออกแบบระบบ Server ให้รองรับงานที่มีปริมาณการใช้งานสูง และสามารถขยายระบบได้ตามความต้องการของธุรกิจ
                         </p>
                       </div>
                    </motion.div>
                    {/* Cloud Image with Text Overlay (Span 2 cols) */}
                    <motion.div
                       className="relative md:col-span-2 rounded-lg shadow-2xl overflow-hidden"
                       variants={{
                         hidden: { opacity: 0, y: 20 },
                         visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                       }}
                    >
                       <img src={ITimg2} alt="Cloud" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                       <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white w-full">
                         <h2 className="text-xl md:text-2xl font-bold">การออกแบบ</h2>
                         <h2 className="text-xl md:text-2xl font-bold">Cloud Computing</h2>
                         <ul className="mt-2 space-y-2 text-xs md:text-sm font-light text-gray-200">
                           <li className="flex gap-2">
                             <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300"></span>
                             <span>ออกแบบระบบที่ผสานรวมระหว่าง Cloud Public, Private หรือ Hybrid Cloud เพื่อลดต้นทุนและเพิ่มความยืดหยุ่นในการปรับทรัพยากรให้สอดคล้องกับความต้องการ</span>
                           </li>
                           <li className="flex gap-2">
                             <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300"></span>
                             <span>ให้คำแนะนำในการป้องกันการจู่โจมและการบริหารจัดการข้อมูลบนระบบ Cloud อย่างมีประสิทธิภาพ</span>
                           </li>
                         </ul>
                       </div>
                    </motion.div>
                  </motion.div>
                   {/* Bottom Row */}
                   <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ staggerChildren: 0.2 }}
                   >
                        {/* serverRoomImage with Text Overlay */}
                       <motion.div
                          className="relative rounded-lg shadow-2xl overflow-hidden"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                          }}
                       >
                          <img src={ITimg3} alt="Server Room" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-0 p-4 md:p-6 text-white w-full">
                            <h2 className="text-xl font-bold">การออกแบบ</h2>
                            <h2 className="text-xl font-bold">Data Center</h2>
                            <p className="mt-2 text-xs md:text-sm font-light text-gray-200">
                              ให้คำปรึกษาด้านการบริหารจัดการ การวางแผน ออกแบบ รวมถึงการบำรุงรักษา Data Center เพื่อรองรับ Power Backup, ระบบรักษาความปลอดภัย รวมถึงความต่อเนื่องของการให้บริการที่ไม่สะดุด
                            </p>
                          </div>
                       </motion.div>
     
                        {/* grayImage with Text Overlay */}
                       <motion.div
                          className="relative rounded-lg shadow-2xl overflow-hidden"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                          }}
                       >
                          <img src={ITimg4} alt="Gray" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-0 p-4 md:p-6 text-white w-full">
                            <h2 className="text-xl font-bold">Network</h2>
                            <h2 className="text-xl font-bold">Infrastructure</h2>
                            <ul className="mt-2 space-y-2 text-xs md:text-sm font-light text-gray-200">
                              <li className="flex gap-2">
                                <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-gray-300"></span>
                                <span>ออกแบบและตั้งระบบเครือข่ายที่ครอบคลุมและปลอดภัย ทั้งในส่วนของ LAN, WAN และ Internet Connectivity</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-gray-300"></span>
                                <span>ให้คำแนะนำในการเลือกใช้ Firewall, VPN และระบบโทรศัพท์เพื่อบ่งชี้การแก้ไขให้ตรงประสงค์</span>
                              </li>
                            </ul>
                          </div>
                       </motion.div>
     
                        {/* engineerImage with Text Overlay */}
                       <motion.div
                          className="relative rounded-lg shadow-2xl overflow-hidden"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                          }}
                       >
                          <img src={ITimg5} alt="Engineer" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-0 p-4 md:p-6 text-white w-full">
                            <h2 className="text-xl font-bold">จำหน่ายและติดตั้งอุปกรณ์</h2>
                            <h2 className="text-xl font-bold">Server</h2>
                            <p className="mt-2 text-xs md:text-sm font-light text-gray-200">
                              บริการให้เช่าอุปกรณ์ Server เรามีทีมผู้เชี่ยวชาญให้คำปรึกษาและติดตั้งอุปกรณ์ให้ตรงกับความต้องการของธุรกิจ พร้อมทั้งทดสอบและให้คำแนะนำเพื่อให้ได้ประสิทธิภาพ
                            </p>
                          </div>
                       </motion.div>
                   </motion.div>
                  </div>
              </div>
          </div>
    );
}

export default ITInfrastructureSection; 