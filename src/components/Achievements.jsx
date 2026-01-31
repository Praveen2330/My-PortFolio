const achievements = [
    "Winner – TechKnow 2024",
    "Runner Up – Hack & Time (SRM)",
    "Runner Up – SDG-4 UN Hackfinity",
    "Runner Up – Arduino Competition (Aaruush)",
  ];
  
  const Achievements = () => {
    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
  
    return (
      <section id="achievements" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Achievements
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((a) => (
              <div
                key={a}
                onMouseMove={handleMove}
                className="glow-card bg-black/40 backdrop-blur border border-green-500/20 rounded-xl p-6"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Achievements;