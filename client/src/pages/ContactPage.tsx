import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Ship, 
  Building2, 
  Settings, 
  Wrench, 
  Briefcase, 
  Globe,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { contactDepartments } from '../constant/Demodata';
import TopNav from '../components/TopNav/TopNav';
import FrontFooter from '../components/FrontMenu/FrontFooter';
import FrontNav from '../components/FrontMenu/FrontNav';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: 'other',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('ship') || t.includes('export') || t.includes('import')) return <Ship size={32} strokeWidth={1.5} />;
    if (t.includes('office')) return <Building2 size={32} strokeWidth={1.5} />;
    if (t.includes('operation')) return <Globe size={32} strokeWidth={1.5} />;
    if (t.includes('technical')) return <Wrench size={32} strokeWidth={1.5} />;
    if (t.includes('purchasing')) return <Briefcase size={32} strokeWidth={1.5} />;
    return <Settings size={32} strokeWidth={1.5} />;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwD5zzXh2EoQ9xLbOzpMyllYIa693e4j5v6VytmueciFYyYQ8x83-tLT6hwER893Zy1JA/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ fullName: '', email: '', serviceType: 'other', message: '' }); 
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error!', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopNav />
      <div className='relative z-10 bg-black sm:py-3 py-1 pb-5 sm:pb-2'>
        <FrontNav />
      </div>

      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex mb-4 text-sm text-gray-500 uppercase tracking-widest font-medium">
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-orange-600">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-[#f26508]">Us</span>
          </h1>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left Side: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
              {contactDepartments.map((dept, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="text-sky-500 mb-4 transition-transform group-hover:scale-110">
                    <div className="w-16 h-16 border border-sky-200 rounded-xl flex items-center justify-center shadow-sm bg-white">
                      {getIcon(dept.title)}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3 uppercase tracking-tight">{dept.title}</h3>
                  {dept.details.map((detail, i) => (
                    <div key={i} className="text-[15px] text-gray-600 space-y-3">
                      <p className="flex items-center justify-center gap-2 hover:text-sky-600 transition-colors">
                        <Mail size={16} className="text-sky-500" /> {detail.email}
                      </p>
                      {detail.phone && (
                        <p className="flex items-center justify-center gap-2 font-medium text-gray-700">
                          <Phone size={16} className="text-sky-500" /> {detail.phone}
                        </p>
                      )}
                      {/* লোকেশন লিঙ্ক এখানে যোগ করা হয়েছে */}
                      {detail.locationUrl && (
                        <a 
                          href={detail.locationUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start justify-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mt-2 max-w-[220px] mx-auto text-sm leading-snug"
                        >
                          <MapPin size={24} className="text-sky-500 shrink-0" /> 
                          <span className="text-center">MQ Plaza, 1st Floor, 36 No. Ward, Fakirhat, Bandar, Chattogram</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Side: Form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Get a Quotation</h2>
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 animate-pulse">
                  <CheckCircle2 size={20} />
                  <span>Quotation sent successfully!</span>
                </div>
              )}
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full Name" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none">
                  <option value="other">Other</option>
                  <option value="Ship Chandler">Ship Chandler</option>
                  <option value="Import/Export">Import/Export</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Your Message" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none"></textarea>
                <button type="submit" disabled={loading} className="w-full bg-[#f26508] hover:bg-[#e05a07] text-white font-bold py-4 rounded-lg transition-all flex justify-center items-center gap-2">
                  {loading ? <Loader2 className="animate-spin" size={20} /> : 'Request Quote'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-8 rounded-t-[3rem]">
        <FrontFooter />
      </div>
    </>
  );
};

export default ContactPage;