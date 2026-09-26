import { FaCertificate, FaExternalLinkAlt, FaLinkedin, FaServer, FaLaptopCode, FaBuilding, FaAward } from 'react-icons/fa';

const mainCertificates = [
  {
    id: 1,
    title: "Google Developer Premium Tier Badge",
    issuer: "Google for Developers",
    date: "Recognized Member",
    description: "Thought leader badge awarded for contributions to developer community articles and technical expertise.",
    link: "#",
    icon: <FaAward className="text-3xl text-amber-400" />
  },
  {
    id: 2,
    title: "Advanced Kubernetes: Core Concepts",
    issuer: "LinkedIn Learning",
    date: "Feb 2026",
    description: "Deep dive into Kubernetes core concepts, container orchestration, microservices management, and pod networking.",
    credentialId: "4cd0c3cccf5efeb0834ad8b424a7de61d645c192857b589a35fcb56036c8a226",
    link: "https://www.linkedin.com/learning/certificates/4cd0c3cccf5efeb0834ad8b424a7de61d645c192857b589a35fcb56036c8a226",
    icon: <FaServer className="text-3xl text-blue-400" />
  },
  {
    id: 3,
    title: "Machine Learning with Python (V2)",
    issuer: "IBM / Credly",
    date: "Feb 2026",
    description: "Authorized by IBM. Comprehensive practical training covering ML models, regression pipelines, and algorithm evaluation.",
    credentialId: "692de9d7-7915-49fa-b458-611d2b6e17c4",
    link: "https://www.credly.com/badges/692de9d7-7915-49fa-b458-611d2b6e17c4/public_url",
    icon: <FaBuilding className="text-3xl text-cyan-400" />
  },
  {
    id: 4,
    title: "Machine Learning with Python Foundation",
    issuer: "LinkedIn Learning / TCS iON",
    date: "Feb 2026",
    description: "Foundational ML certification covering supervised/unsupervised learning algorithms and Python implementation.",
    credentialId: "9b64552e5a436223788cabd2bdfd18b6c4d9caefd3a91812dfb1f5c62c5a8e32",
    link: "https://www.linkedin.com/learning/certificates/9b64552e5a436223788cabd2bdfd18b6c4d9caefd3a91812dfb1f5c62c5a8e32",
    icon: <FaLinkedin className="text-3xl text-blue-500" />
  }
];

const otherCertificates = [
  {
    id: 5,
    title: "NIELIT 'O' Level Certification",
    issuer: "NIELIT (Govt. of India)",
    date: "2016"
  },
  {
    id: 6,
    title: "Course on Computer Concepts (CCC)",
    issuer: "NIELIT (Govt. of India)",
    date: "2015"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 md:px-10 bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Certifications & <span className="text-gradient-cyan">Recognition</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Industry-recognized credentials in Kubernetes, Machine Learning, and Cloud Infrastructure.
          </p>
        </div>

        {/* Grid Layout for Main Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mainCertificates.map((cert) => (
            <div 
              key={cert.id}
              className="group bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl flex items-start gap-4 glass-card"
            >
              <div className="bg-blue-950/60 p-3 rounded-xl border border-blue-900/60 group-hover:scale-105 transition-transform shrink-0">
                {cert.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Issued by <span className="font-semibold text-gray-200">{cert.issuer}</span> • <span className="text-blue-400">{cert.date}</span>
                </p>
                <p className="text-gray-400 text-xs md:text-sm mt-3 leading-relaxed">
                  {cert.description}
                </p>
                
                {cert.credentialId && (
                  <p className="text-[10px] text-gray-500 mt-2 font-mono break-all opacity-75">
                    ID: {cert.credentialId}
                  </p>
                )}

                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Verify Credential <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Government Certifications */}
        <div className="bg-gray-900/40 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-lg font-bold text-gray-200 mb-4 border-l-4 border-blue-500 pl-3">
            Additional Certifications & Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherCertificates.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between bg-gray-950/80 p-4 rounded-xl border border-gray-800/80">
                <div className="flex items-center gap-3">
                  <FaCertificate className="text-gray-500 text-lg" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">{cert.title}</h4>
                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-900/50">
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