const About = () => {
    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
  
    return (
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
  
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              About <span className="text-green-400">Me</span>
            </h2>
  
            <p className="text-slate-400 leading-relaxed mb-6">
              I am a Computer Science & Engineering student specializing in
              Artificial Intelligence and Machine Learning at SRM University.
              I enjoy building scalable full-stack applications, real-time systems,
              and AI-powered solutions that solve real-world problems.
            </p>
  
            <p className="text-slate-400 leading-relaxed">
              I have hands-on experience with modern web technologies, backend
              systems, and computer vision frameworks, and I actively participate
              in hackathons and technical competitions.
            </p>
          </div>
  
          {/* RIGHT INFO CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              ["🎓 Education", "B.Tech CSE (AI & ML)"],
              ["🏫 University", "SRM Institute of Science & Technology"],
              ["📍 Location", "Chennai, India"],
              ["💼 Focus", "Full-Stack & AI Systems"],
            ].map(([title, value]) => (
              <div
                key={title}
                onMouseMove={handleMove}
                className="glow-card bg-black/40 backdrop-blur
                           border border-green-500/20 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-slate-400">{value}</p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default About;