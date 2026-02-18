import { FaCertificate, FaExternalLinkAlt, FaLinkedin, FaPython, FaServer, FaLaptopCode, FaBuilding } from 'react-icons/fa';

const mainCertificates = [
  {
    id: 1,
    title: "Advanced Kubernetes: 1 Core Concepts",
    issuer: "LinkedIn",
    date: "Feb 2026",
    description: "Deep dive into Kubernetes core concepts, architecture, and orchestration.",
    credentialId: "4cd0c3cccf5efeb0834ad8b424a7de61d645c192857b589a35fcb56036c8a226",
    link: "https://www.linkedin.com/learning/certificates/4cd0c3cccf5efeb0834ad8b424a7de61d645c192857b589a35fcb56036c8a226",
    icon: <FaServer className="text-3xl" />
  },
  {
    id: 2,
    title: "Machine Learning with Python Foundation",
    issuer: "LinkedIn",
    date: "Feb 2026",
    description: "Foundation course covering essential ML algorithms and Python implementation.",
    credentialId: "9b64552e5a436223788cabd2bdfd18b6c4d9caefd3a91812dfb1f5c62c5a8e32",
    link: "https://www.linkedin.com/learning/certificates/9b64552e5a436223788cabd2bdfd18b6c4d9caefd3a91812dfb1f5c62c5a8e32",
    icon: <FaLinkedin className="text-3xl" />
  },
  {
    id: 3,
    title: "Machine Learning with Python (V2)",
    issuer: "IBM",
    date: "Feb 2026",
    description: "Authorized by IBM. Comprehensive training on ML with Python.",
    credentialId: "692de9d7-7915-49fa-b458-611d2b6e17c4",
    link: "https://www.credly.com/badges/692de9d7-7915-49fa-b458-611d2b6e17c4/public_url",
    icon: <FaBuilding className="text-3xl" />
  },
  {
    id: 4,
    title: "Machine Learning with Python (V2)",
    issuer: "Coursera",
    date: "Feb 2026",
    description: "Completed via Coursera. Practical application of ML models using Python.",
    credentialId: "692de9d7-7915-49fa-b458-611d2b6e17c4", 
    link: "https://www.credly.com/badges/692de9d7-7915-49fa-b458-611d2b6e17c4/linked_in_profile",
    icon: <FaLaptopCode className="text-3xl" />
  }
];

const otherCertificates = [
  {
    id: 5,
    title: "NIELIT 'O' Level",
    issuer: "NIELIT (Govt. of India)",
    date: "2016"
  },
  {
    id: 6,
    title: "Course on Computer Concepts (CCC)",
    issuer: "NIELIT",
    date: "2015"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 md:px-10 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Certifications & <span className="text-blue-500">Licenses</span>
        </h2>

        {/* --- SECTION 1: MAIN CERTIFICATES (Grid Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mainCertificates.map((cert) => (
            <div 
              key={cert.id}
              className="group relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 flex items-start gap-4"
            >
              <div className="bg-blue-900/30 p-3 rounded-lg text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-800/40 transition-colors">
                {cert.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Issued by: <span className="font-semibold text-gray-300">{cert.issuer}</span> | <span className="text-gray-500">{cert.date}</span>
                </p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {cert.description}
                </p>
                
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mt-2 font-mono break-all opacity-80">
                    ID: {cert.credentialId}
                  </p>
                )}

                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-500 hover:text-blue-300 transition-colors"
                  >
                    Verify Credential <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 2: OTHER CERTIFICATIONS (Simple List) --- */}
        <div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-6 border-l-4 border-blue-500 pl-4">
                Additional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherCertificates.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-3">
                            <FaCertificate className="text-gray-500 text-xl" />
                            <div>
                                <h4 className="text-lg font-medium text-gray-200">{cert.title}</h4>
                                <p className="text-sm text-gray-500">{cert.issuer}</p>
                            </div>
                        </div>
                        <span className="text-sm font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded">
                            {cert.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;