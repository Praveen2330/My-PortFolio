import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "SRM Connect",
    tech: "React · Node.js · Supabase · WebRTC · Socket.IO",
    description:
      "A secure real-time dating and chat platform exclusively for SRM students with live messaging and random video chat matching.",
    bullets: [],
    github: "https://github.com/Praveen2330/SRM-Connect",
    website: "https://srmconnect2025.vercel.app/",
  },
  {
    title: "Fishing Zone Recommendation System",
    tech: "Python · Pandas · NumPy · PyTorch · U-Net CNN · ConvLSTM · Satellite Data Analytics",
    description:
      "Deep learning system that recommends optimal fishing zones by analysing oceanographic satellite data, achieving 87% accuracy — a 20% improvement over traditional methods.",
    bullets: [
      "Processed 6 oceanographic parameters (SST, SSH, velocity, chlorophyll, plankton) from Copernicus satellite data (2018–2025) across 15,000+ images; achieved 87% accuracy and IoU of 0.78.",
      "Designed a ConvLSTM-based spatiotemporal model capturing temporal ocean dynamics; built U-Net CNN segmentation pipeline for precise fishing zone boundary detection.",
      "Created interactive visualization dashboard with color-coded fishing zone maps and GPS coordinates — demonstrating ₹7–10 lakhs potential annual savings per vessel.",
    ],
    github: "",
    website: "",
  },
  {
    title: "Driver Drowsiness Detection",
    tech: "Python · MediaPipe · OpenCV · Computer Vision",
    description:
      "Real-time AI system that detects driver fatigue using eye-blink pattern analysis and facial landmark detection with audio/visual alerts.",
    bullets: [
      "Built a real-time computer vision pipeline using MediaPipe facial landmark detection and eye-blink ratio (EAR) analysis to classify driver fatigue with high reliability.",
      "Triggered real-time audio/visual alerts on drowsiness detection; improved model robustness using MediaPipe's multi-face feature extraction across varied lighting conditions.",
    ],
    github: "",
    website: "",
  },
  {
    title: "School Website Project",
    tech: "HTML · CSS · JavaScript · Node.js",
    description:
      "Dynamic and responsive school website with backend integration and improved UI accessibility.",
    bullets: [],
    github: "",
    website: "",
  },
];

const futureProjects = [1];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <section id="projects" className="py-20 px-5 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-green-400">Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                onMouseMove={handleMove}
                onClick={() => setActiveProject(project)}
                className="glow-card bg-black/40 backdrop-blur
                           border border-green-500/20 rounded-2xl p-5 sm:p-6
                           hover:border-green-400
                           transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-green-400 mb-3">{project.tech}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-green-400
                                 hover:text-green-300 transition text-sm"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2
                                 px-4 py-1.5 rounded-lg text-sm
                                 border border-green-500/40 text-green-400
                                 hover:border-green-400 hover:bg-green-500/10 transition"
                    >
                      Live Site
                    </a>
                  )}
                  <span className="ml-auto text-green-400/60 text-xs">View details →</span>
                </div>
              </div>
            ))}

            {futureProjects.map((i) => (
              <div
                key={i}
                className="bg-black/20 backdrop-blur
                           border border-dashed border-green-500/30
                           rounded-2xl p-6 flex items-center justify-center
                           text-slate-500 text-sm"
              >
                🚀 New project coming soon
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-black/80 backdrop-blur border border-green-500/30
                        rounded-3xl w-full max-w-2xl p-6 sm:p-8 relative
                        animate-[fadeIn_0.3s_ease-out] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-green-400 transition"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 pr-8">
              {activeProject.title}
            </h3>
            <p className="text-green-400 text-sm mb-4">{activeProject.tech}</p>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
              {activeProject.description}
            </p>

            {activeProject.bullets.length > 0 && (
              <ul className="space-y-3 mb-6">
                {activeProject.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-green-400 mt-0.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-3">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             px-4 py-2 rounded-xl text-sm
                             bg-green-500 text-black hover:bg-green-400 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {activeProject.website && (
                <a
                  href={activeProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             px-4 py-2 rounded-xl text-sm
                             border border-green-500/40 text-green-400
                             hover:border-green-400 hover:bg-green-500/10 transition"
                >
                  <FaExternalLinkAlt />
                  Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;