const skillCategories = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: ["Python", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Technologies",
    icon: "🌐",
    skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "WebRTC", "Socket.IO", "Flask", "HTML", "CSS"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS (EC2, S3)", "Docker", "Kubernetes", "VPC", "Subnets"],
  },
  {
    category: "Data Science & Analysis",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Matplotlib", "Tableau", "Excel"],
  },
  {
    category: "Machine Learning & AI",
    icon: "🤖",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "U-Net CNN", "ConvLSTM", "MediaPipe", "Model Evaluation"],
  },
  {
    category: "Computer Vision",
    icon: "👁️",
    skills: ["OpenCV", "Facial Landmark Detection", "Satellite Image Processing"],
  },
  {
    category: "Version Control & Tools",
    icon: "🔧",
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="skills" className="py-20 px-5 bg-black">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-green-400">Skills</span>
        </h2>

        <div className="flex flex-col gap-8">
          {skillCategories.map(({ category, icon, skills }) => (
            <div key={category}>
              {/* Category header */}
              <h3 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-4 flex items-center gap-2">
                <span>{icon}</span>
                {category}
              </h3>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    onMouseMove={handleMove}
                    className="glow-card bg-black/40 backdrop-blur
                               border border-green-500/20 rounded-xl
                               px-4 py-2
                               hover:border-green-400 transition cursor-default"
                  >
                    <p className="text-slate-200 font-medium text-sm whitespace-nowrap">{skill}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-8 border-t border-green-500/10" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;