import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SRM Connect",
    tech: "React · Node.js · Supabase · WebRTC · Socket.IO",
    description:
      "A secure real-time dating and chat platform exclusively for SRM students with live messaging and random video chat matching.",
    github: "https://github.com/Praveen2330/SRM-Connect",
    website: "https://YOUR_SRM_CONNECT_LIVE_URL", // add real link when available
  },
  {
    title: "Driver Drowsiness Detection",
    tech: "Python · MediaPipe · OpenCV",
    description:
      "Real-time AI system that detects driver fatigue using eye-blink pattern analysis and facial landmarks.",
    github: "", // add later if needed
    website: "",
  },
  {
    title: "School Website Project",
    tech: "HTML · CSS · JavaScript · Node.js",
    description:
      "Dynamic and responsive school website with backend integration and improved UI accessibility.",
    github: "", // add later if needed
    website: "",
  },
];

// empty cards for future projects
const futureProjects = [1, 2];

const Projects = () => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-green-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* REAL PROJECTS */}
          {projects.map((project) => (
            <div
              key={project.title}
              onMouseMove={handleMove}
              className="glow-card bg-black/40 backdrop-blur
                         border border-green-500/20 rounded-2xl p-6
                         hover:border-green-400
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-green-400 mb-3">
                {project.tech}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400
                               hover:text-green-300 transition"
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
                    className="inline-flex items-center gap-2
                               px-4 py-1.5 rounded-lg text-sm
                               border border-green-500/40 text-green-400
                               hover:border-green-400 hover:bg-green-500/10
                               transition"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* FUTURE PROJECT PLACEHOLDERS */}
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
  );
};

export default Projects;