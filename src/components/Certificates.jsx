import { FaExternalLinkAlt, FaDownload, FaTimes } from "react-icons/fa";
import { useState } from "react";

const certificates = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    year: "2024",
    skills: "Python · Data Science · AI · Development",
    file: "/certificates/IBM-(Coursera).pdf",
  },
  {
    title: "Go for Gold – iAspire",
    issuer: "Accenture",
    year: "2025",
    skills: "Problem Solving · Technology Aptitude · Professional Skills",
    file: "/certificates/iAspire-certificate.pdf",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2026",
    skills: "Data Analytics · Excel · Data Visualisation",
    file: "/certificates/Forage-Certificate.pdf",
  },
  {
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB University",
    year: "2024",
    skills: "NoSQL · MongoDB · Database Design",
    file: "/certificates/MangoDB-Certificate.pdf",
  },
  {
    title: "SAP Certified - Data Analyst - SAP Analytics Cloud",
    issuer: "SAP",
    year: "2025",
    skills: "ERP · SAP Modules · Enterprise Solutions",
    file: "/certificates/SAP-Certificate.pdf",
  },
  {
    title: "Business Intelligence",
    issuer: "Infosys Springboard",
    year: "2025",
    skills: "BI Tools · Data Analysis · Reporting",
    file: "/certificates/INFOSYS- Business Intelligence.pdf",
  },
];

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const isImage = (file) => /\.(jpg|jpeg|png|webp)$/i.test(file);

  return (
    <>
      <section id="certificates" className="py-20 px-5 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-green-400">Certificates</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                onMouseMove={handleMove}
                onClick={() => setActiveCert(cert)}
                className="glow-card cursor-pointer bg-black/40 backdrop-blur
                           border border-green-500/20 rounded-2xl p-6
                           hover:border-green-400 transition-all duration-300
                           flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-green-400 text-sm mb-1">
                    {cert.issuer} · {cert.year}
                  </p>
                  <p className="text-slate-400 text-sm">{cert.skills}</p>
                </div>
                <span className="text-green-400 text-sm mt-5 inline-block">
                  Tap to preview →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-black/80 backdrop-blur border border-green-500/30
                        rounded-3xl w-full max-w-3xl p-5 sm:p-6 relative
                        animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-green-400 transition"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 pr-8">
              {activeCert.title}
            </h3>
            <p className="text-green-400 text-sm mb-4">
              {activeCert.issuer} · {activeCert.year}
            </p>

            <div className="w-full h-[50vh] sm:h-[60vh] rounded-xl border border-green-500/20 overflow-hidden bg-zinc-900 flex items-center justify-center">
              {isImage(activeCert.file) ? (
                <img
                  src={activeCert.file}
                  alt={activeCert.title}
                  className="max-h-full max-w-full object-contain rounded-xl"
                />
              ) : (
                <iframe
                  src={activeCert.file}
                  className="w-full h-full"
                  title={activeCert.title}
                />
              )}
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              <a
                href={activeCert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                           bg-green-500 text-black hover:bg-green-400 transition text-sm"
              >
                <FaExternalLinkAlt />
                Open in new tab
              </a>
              <a
                href={activeCert.file}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                           border border-green-500/40 text-green-400 text-sm
                           hover:border-green-400 hover:bg-green-500/10 transition"
              >
                <FaDownload />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;