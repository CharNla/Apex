import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const InfoItem = ({ icon, text, text2 }) => (
  <div className="flex items-start space-x-4">
    <div className="text-purple-400 mt-1">{icon}</div>
    <div className="text-gray-300 font-bold">
      <p>{text}</p>
      {text2 && <p>{text2}</p>}
    </div>
  </div>
);

const FormInput = ({ label, type = 'text', placeholder = '', name, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-gray-200 text-gray-800 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

const FormSelect = ({ label, options, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <select 
        name={name} 
        value={value} 
        onChange={onChange} 
        className="w-full bg-gray-200 text-gray-800 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
    >
      {options.map(option => <option key={option}>{option}</option>)}
    </select>
  </div>
);

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        businessType: 'กรุณาระบุ',
        service: 'กรุณาระบุ',
        budget: '',
        consent: false,
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.consent) {
            setStatus('กรุณายอมรับเงื่อนไขก่อนส่งข้อมูล');
            return;
        }

        setStatus('กำลังส่ง...');

        // --- PASTE YOUR EMAILJS KEYS HERE ---
        const SERVICE_ID = 'service_owmvsx9';
        const TEMPLATE_ID = 'template_cilsbyh';
        const PUBLIC_KEY = '1RpwBMEUwVDhFD_LO';
        // ------------------------------------

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            reply_to: formData.email,
            phone: formData.phone,
            company: formData.company,
            business_type: formData.businessType,
            service_interest: formData.service,
            budget: formData.budget,
            message: `New contact from ${formData.firstName}`
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('ส่งข้อมูลเรียบร้อยแล้ว!');
                setFormData({
                    firstName: '', lastName: '', email: '', phone: '',
                    company: '', businessType: 'กรุณาระบุ', service: 'กรุณาระบุ',
                    budget: '', consent: false
                });
            }, (err) => {
                console.error('FAILED...', err);
                setStatus(`เกิดข้อผิดพลาด: ${err.text}`);
            });
    };

  return (
    <div id="contact" className="min-h-screen flex items-center font-sans" style={{ backgroundColor: '#2A293A' }}>
      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Left Side: Contact Info */}
          <div className="md:col-span-2 text-white space-y-8 md:pl-16">
            <h2 className="text-4xl font-bold mb-4">ติดต่อเรา</h2>
            <p className="text-xl text-gray-300">บริษัท เอเพ็กซ์ เคพเอเบิ้ล เทค จำกัด</p>
            <div className="space-y-6">
              <InfoItem 
                icon={<FaMapMarkerAlt size={20} />} 
                text="373/31 ถนนนวลจันทร์ แขวงสีกัน"
                text2="เขตดอนเมือง กรุงเทพ 10210"
              />
              <InfoItem 
                icon={<FaPhoneAlt size={20} />} 
                text="090-985-2913, 062-453-2828"
              />
              <InfoItem 
                icon={<FaEnvelope size={20} />} 
                text="info@apex-capable.com"
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-3 bg-[#2B2D32] p-8 rounded-lg shadow-2xl border-2 border-white/20">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="ชื่อ" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <FormInput label="นามสกุล" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="อีเมล" type="email" name="email" value={formData.email} onChange={handleChange} required />
                <FormInput label="เบอร์ติดต่อ" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="ชื่อบริษัท" name="company" value={formData.company} onChange={handleChange} />
                <FormSelect label="ประเภทธุรกิจ" name="businessType" value={formData.businessType} onChange={handleChange} options={['กรุณาระบุ', 'ธุรกิจส่วนตัว', 'บริษัทจำกัด', 'อื่น ๆ']} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FormSelect label="บริการที่สนใจ" name="service" value={formData.service} onChange={handleChange} options={['กรุณาระบุ', 'Web Development', 'Mobile App', 'Monitoring']} />
                 <FormInput label="งบประมาณ" name="budget" value={formData.budget} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">อนุญาตให้ติดต่อกลับผ่านข้อมูลที่ให้ไว้</label>
                <div className="flex items-start space-x-3">
                    <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                    <label htmlFor="consent" className="text-sm text-gray-400">
                        หากคุณอนุญาตที่จะให้เราจัดเก็บและประมวลผลข้อมูล คลิกที่กล่องเพื่อดำเนินการต่อ
                    </label>
                </div>
              </div>
              {status && <p className="text-center text-sm text-gray-300">{status}</p>}
              <button type="submit" disabled={status === 'กำลังส่ง...'} className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-500">
                ส่งข้อมูล
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
