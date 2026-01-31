const academics = [
    {
      year: "2020 - 2021",
      title: "Secondary School (10th)",
      place: "National Model Secondary School",
      description: "Completed SSLC with strong fundamentals in  Mathematics and Science",
    },
    {
      year: "2022 - 2023",
      title: "Higher Secondary (12th)",
      place: "Sri Chaitanya Techno School",
      description: "Specialized in Computer Science with a focus on programming and problem-solving.",
    },
    {
      year: "2023 – Present",
      title: "B.Tech – CSE (AI & ML)",
      place: "SRM Institute of Science & Technology",
      description: "Pursuing Computer Science with specialization in Artificial Intelligence & Machine Learning.",
    },
  ];
  
  const Academics = () => {
    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
  
    return (
      <section id="academics" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Academic <span className="text-green-400">Journey</span>
          </h2>
  
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-green-500/30 hidden md:block"></div>
  
            <div className="space-y-16">
              {academics.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
  
                  {/* Card */}
                  <div
                    onMouseMove={handleMove}
                    className={`glow-card bg-black/40 backdrop-blur
                                border border-green-500/20 rounded-2xl p-6
                                max-w-md w-full
                                ${index % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}
                               `}
                  >
                    <span className="text-green-400 font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 mt-1">
                      {item.place}
                    </p>
                    <p className="text-slate-400 mt-3 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Academics;