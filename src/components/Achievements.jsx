const achievements = [
  "🏆 Winner – TechKnow 2024",
  "🥈 Runner Up – Hack & Time (SRM)",
  "🥈 Runner Up – SDG-4 UN Hackfinity",
  "🥈 Runner Up – Arduino Competition (Aaruush)",
];

const Achievements = () => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="achievements" className="py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white text-center">
          My <span className="text-green-400">Achievements</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a) => (
            <div
              key={a}
              onMouseMove={handleMove}
              className="glow-card bg-black/40 backdrop-blur border border-green-500/20
                         rounded-xl p-5 sm:p-6 text-slate-200 font-medium text-sm sm:text-base"
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