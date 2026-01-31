import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-32"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT : TEXT + SOCIALS */}
        <div>
          {/* HEADLINE */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            I Turn{" "}
            <span className="text-slate-300 font-semibold">
              “What If”
            </span>{" "}
            into <br />
            <span className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.35)]">
              “It Works”
            </span>
          </h1>

          {/* SUB LINE */}
          <p className="mt-6 text-slate-400 max-w-xl">
            Software Engineering Intern (AI & ML) · Full-Stack Developer · SRM University
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/praveen-n-2330-pn"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl
                         bg-black/40 backdrop-blur border border-green-500/20
                         hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]
                         transition"
            >
              <FaLinkedinIn className="text-green-400 text-xl" />
            </a>

            <a
              href="https://github.com/Praveen2330"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl
                         bg-black/40 backdrop-blur border border-green-500/20
                         hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]
                         transition"
            >
              <FaGithub className="text-green-400 text-xl" />
            </a>
          </div>
        </div>

        {/* RIGHT : PROFILE CARD */}
        <div
          onMouseMove={handleMove}
          className="glow-card bg-black/40 backdrop-blur
                     border border-green-500/20 rounded-3xl
                     p-6 max-w-sm mx-auto"
        >
          <div className="overflow-hidden rounded-2xl mb-6">
            <img
              src="/profile.jpg"
              alt="Praveen"
              className="w-full h-80 object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-white">
            Praveen N
          </h3>

          <p className="text-slate-400 mt-1">
            Software Engineering Intern (AI & ML)
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300">
              Full-Stack
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300">
              AI / ML
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300">
              SRM University
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;