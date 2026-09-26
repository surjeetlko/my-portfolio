import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTimes, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_454z2o9';
    const templateID = 'template_nsnrjoc';
    const publicKey = 'Ty3O2i4tH3jip9qk3';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSending(false);
        setSentSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setSentSuccess(false);
          setFormData({ name: '', email: '', message: '' });
        }, 2500);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Failed to send message. Please send an email directly to surjeetlko5@gmail.com");
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-gray-900 text-white text-center border-t border-gray-800 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Let's Build & <span className="text-gradient-cyan">Scale Together</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          Open for AI deployment engineering, MLOps leadership, microservice architecture consulting, or technical collaboration.
        </p>
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-left">
          <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 flex items-center gap-4">
            <div className="p-3 bg-blue-950/80 text-blue-400 rounded-lg border border-blue-900">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Email Direct</p>
              <a href="mailto:surjeetlko5@gmail.com" className="text-sm font-bold text-gray-200 hover:text-blue-400 transition-colors">
                surjeetlko5@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 flex items-center gap-4">
            <div className="p-3 bg-cyan-950/80 text-cyan-400 rounded-lg border border-cyan-900">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Phone / WhatsApp</p>
              <a href="tel:+919198970239" className="text-sm font-bold text-gray-200 hover:text-cyan-400 transition-colors">
                +91 9198970239
              </a>
            </div>
          </div>

          <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 flex items-center gap-4">
            <div className="p-3 bg-emerald-950/80 text-emerald-400 rounded-lg border border-emerald-900">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Location</p>
              <p className="text-sm font-bold text-gray-200">Lucknow, India</p>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 cursor-pointer"
          >
            <FaPaperPlane /> Send Instant Message
          </button>
          
          <a 
            href="https://linkedin.com/in/surjeet-singh-a13a4ab2/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-xl font-bold text-sm transition-all shadow-lg"
          >
            <FaLinkedin /> LinkedIn Profile
          </a>

          <a 
            href="https://github.com/surjeetlko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-gray-950 hover:bg-gray-800 text-white border border-gray-700 rounded-xl font-bold text-sm transition-all shadow-lg"
          >
            <FaGithub /> GitHub @surjeetlko
          </a>
        </div>
      </div>

      {/* --- POPUP EMAIL MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden text-left">
            
            <div className="bg-gray-900 p-5 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FaPaperPlane className="text-blue-400" /> Send Direct Message
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-gray-400 hover:text-red-400 transition-colors text-xl p-1"
                aria-label="Close Contact Modal"
              >
                <FaTimes />
              </button>
            </div>

            {sentSuccess ? (
              <div className="p-8 text-center space-y-4">
                <FaCheckCircle className="text-emerald-400 text-5xl mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-gray-400 text-sm">Thank you, {formData.name}. Surjeet will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="e.g. Alex Rivera"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Your Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="alex@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Message Detail</label>
                  <textarea 
                    name="message" 
                    required 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Project details, deployment requirements, or questions..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSending}
                  className={`w-full font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2 text-sm cursor-pointer
                    ${isSending ? 'bg-gray-700 cursor-not-allowed text-gray-400' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'}`}
                >
                  {isSending ? 'Sending...' : <><FaPaperPlane /> Deliver Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;