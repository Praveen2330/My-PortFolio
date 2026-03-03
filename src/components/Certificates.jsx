import { FaExternalLinkAlt, FaDownload, FaTimes } from "react-icons/fa";
import { useState } from "react";

const certificates = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (Coursera)",
    year: "2024",
    skills: "Python · Data Science · AI · Development",
    file: "/certificates/IBM (Coursera).jpg",
  },
  {
    title: "Go for Gold – iAspire",
    issuer: "Accenture",
    year: "2025",
    skills: "Problem Solving · Technology Aptitude · Professional Skills",
    file: "/certificates/iAspire certificate.jpg",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    year: "2026",
    skills: "Data Science · Tableau · Excel",
    file: "/certificates/Deloitte-certificate.jpg",
  },
  {
    title: "Software Engineering Internship",
    issuer: "SRM University",
    year: "2024",
    skills: "Full-Stack · AI/ML",
    file: "/certificates/internship.pdf",
  },
];

const futureCertificates = [1, 2, 3];

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
      <section id="certificates" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            My <span className="text-green-400">Certificates</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                onMouseMove={handleMove}
                onClick={() => setActiveCert(cert)}
                className="glow-card cursor-pointer bg-black/40 backdrop-blur
                           border border-green-500/20 rounded-2xl p-6
                           hover:border-green-400 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-green-400 text-sm mb-1">
                  {cert.issuer} · {cert.year}
                </p>
                <p className="text-slate-400 text-sm mb-4">{cert.skills}</p>
                <span className="text-green-400 text-sm">Click to preview →</span>
              </div>
            ))}
            {futureCertificates.map((i) => (
              <div
                key={`future-${i}`}
                onMouseMove={handleMove}
                className="glow-card bg-black/20 backdrop-blur
                           border border-dashed border-green-500/30
                           rounded-2xl p-6 flex flex-col items-center justify-center
                           text-center text-slate-400
                           hover:border-green-400 transition-all duration-300"
              >
                <span className="text-2xl mb-2">📜</span>
                <p className="text-sm">New certificate coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-black/70 backdrop-blur border border-green-500/30
                          rounded-3xl max-w-3xl w-full p-6 relative
                          animate-[fadeIn_0.3s_ease-out]">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-green-400 transition"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-1">{activeCert.title}</h3>
            <p className="text-green-400 text-sm mb-4">
              {activeCert.issuer} · {activeCert.year}
            </p>

            <div className="w-full h-[60vh] rounded-xl border border-green-500/20 overflow-hidden bg-zinc-900 flex items-center justify-center">
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

            <div className="flex gap-4 mt-5">
              <a
                href={activeCert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                           bg-green-500 text-black hover:bg-green-400 transition"
              >
                <FaExternalLinkAlt />
                Open in new tab
              </a>
              <a
                href={activeCert.file}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                           border border-green-500/40 text-green-400
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