import { useState } from "react";
import { FaExternalLinkAlt, FaDownload, FaTimes, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "UI Design Intern",
    domain: "UI Designs",
    company: "Titan Company Limited",
    duration: "Jun 2025 – Jul 2025",
    type: "Live Project Internship",
    description:
      "Completed a Live Project on the topic \"UI-Designs\" at Titan Company Limited under the Systems Department, guided by Mr. Madhu M C. Demonstrated sincerity, hard work, and keen interest throughout the internship project.",
    skills: ["UI Design", "Systems Department", "Figma", "User Experience", "Prototyping"],
    certificate: "/Praveen.N Live Project Completion Letter (1).pdf",
    certificateLabel: "Live Project Completion Letter – Titan Company",
  },
];

const Experience = () => {
  const [activeCert, setActiveCert] = useState(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <section id="experience" className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-white">
            My <span className="text-green-400">Experience</span>
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/60 via-green-500/20 to-transparent" />

            <div className="flex flex-col gap-10">
              {experiences.map((exp) => (
                <div key={exp.role} className="relative pl-16 sm:pl-24">
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] sm:left-[26px] top-5 w-3.5 h-3.5 rounded-full bg-green-400 shadow-[0_0_14px_rgba(34,197,94,0.7)] ring-4 ring-black" />

                  <div
                    onMouseMove={handleMove}
                    className="glow-card bg-black/40 backdrop-blur border border-green-500/20
                               rounded-2xl p-6 sm:p-8 hover:border-green-400 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FaBriefcase className="text-green-400 text-sm" />
                          <span className="text-xs text-green-400 font-semibold uppercase tracking-widest">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {exp.role}{" "}
                          <span className="text-green-400">({exp.domain})</span>
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">
                          {exp.company} · {exp.duration}
                        </p>
                      </div>

                      {/* Year badge */}
                      <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-green-500/10 text-green-300 border border-green-500/20 whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Certificate button */}
                    {exp.certificate && (
                      <button
                        onClick={() => setActiveCert(exp)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                                   bg-green-500 text-black hover:bg-green-400
                                   transition shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        View Completion Letter
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
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
              {activeCert.certificateLabel}
            </h3>
            <p className="text-green-400 text-sm mb-4">
              {activeCert.role} · {activeCert.duration}
            </p>

            <div className="w-full h-[50vh] sm:h-[60vh] rounded-xl border border-green-500/20 overflow-hidden bg-zinc-900 flex items-center justify-center">
              <iframe
                src={activeCert.certificate}
                className="w-full h-full"
                title={activeCert.certificateLabel}
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              <a
                href={activeCert.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                           bg-green-500 text-black hover:bg-green-400 transition text-sm"
              >
                <FaExternalLinkAlt />
                Open in new tab
              </a>
              <a
                href={activeCert.certificate}
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

export default Experience;
