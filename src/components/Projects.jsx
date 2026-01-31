import { motion } from "framer-motion";

const projects = [
  {
    title: "SRM Connect",
    desc: "Secure dating & chat platform with real-time messaging and video calls.",
    tech: ["React", "Node", "Supabase", "WebRTC"],
  },
  {
    title: "Driver Drowsiness Detection",
    desc: "AI system detecting fatigue using eye-blink analysis.",
    tech: ["Python", "MediaPipe", "OpenCV"],
  },
  {
    title: "School Website",
    desc: "Dynamic full-stack website with backend integration.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-black/40 backdrop-blur border border-green-500/20
                         rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]
                         transition"
            >
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-slate-400 mt-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1 bg-green-500/10 rounded-full text-green-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;