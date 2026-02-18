import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTimes, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // EmailJS Import kiya

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Sending State (Loading dikhane ke liye)
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Loading shuru

    // --- EMAILJS CONFIGURATION ---
    const serviceID = 'service_454z2o9';      // Yahan apni Service ID dalein
    const templateID = 'template_nsnrjoc';    // Yahan apni Template ID dalein
    const publicKey = 'Ty3O2i4tH3jip9qk3';      // Yahan apni Public Key dalein

    // Template ke variables (jo humne EmailJS website par {{name}} banaye the)
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
        setIsModalOpen(false);
        setFormData({ name: '', email: '', message: '' });
        setIsSending(false);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Failed to send message. Please try again later.");
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-900 text-white text-center border-t border-gray-800 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-blue-500">Connect</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          I'm always open to discussing new projects, AI deployment pipelines, or system architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1 cursor-pointer"
          >
            <FaEnvelope /> Email Me
          </button>
          
          {/* Social Links */}
          <a href="https://linkedin.com/in/surjeet-singh-a13a4ab2/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#0A66C2] hover:bg-[#004182] rounded-lg font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/surjeetlko" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden">
            
            <div className="bg-gray-800/50 p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaPaperPlane className="text-blue-500" /> Send Message
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors text-xl">
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  name="message" required rows="4" value={formData.message} onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className={`w-full font-bold py-3 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 mt-2 
                  ${isSending ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/30'}`}
              >
                {isSending ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;