const skills = [
    "Python",
    "JavaScript",
    "C / C++",
    "Java",
    "React",
    "Node.js",
    "Express.js",
    "Supabase",
    "WebRTC",
    "Socket.IO",
    "Tailwind CSS",
    "MediaPipe",
    "OpenCV",
    "Git",
    "GitHub",
  ];
  
  const Skills = () => {
    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
  
    return (
      <section id="skills" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
  
          <h2 className="text-4xl font-bold mb-12 text-white">
            My <span className="text-green-400">Skills</span>
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                onMouseMove={handleMove}
                className="glow-card bg-black/40 backdrop-blur
                           border border-green-500/20 rounded-xl p-5
                           hover:border-green-400 transition"
              >
                <p className="text-slate-200 font-medium">{skill}</p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Skills;