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
      className="min-h-screen flex items-center px-5 pt-28 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT : TEXT + SOCIALS */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            I Turn{" "}
            <span className="text-slate-300 font-semibold">
              "What If"
            </span>{" "}
            into <br />
            <span className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.35)]">
              "It Works"
            </span>
          </h1>

          <p className="mt-5 text-slate-400 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            Software Developer· (AI&ML)· Data Analytics · Full-Stack Developer ·
            SRM University
          </p>

          <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
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

            <a
              href="/praveen-resume.pdf"
              download
              className="ml-2 px-5 py-2.5 rounded-xl text-sm font-medium
                         bg-green-500 text-black hover:bg-green-400
                         transition shadow-[0_0_25px_rgba(34,197,94,0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT : PROFILE CARD */}
        <div className="order-1 lg:order-2 max-w-xs sm:max-w-sm mx-auto w-full group relative">
          {/* Ambient Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-green-500/20 via-emerald-500/10 to-transparent rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />

          {/* Main Card */}
          <div
            onMouseMove={handleMove}
            className="relative glow-card bg-slate-950/70 backdrop-blur-xl
                       border border-green-500/30 hover:border-green-400/50
                       rounded-3xl p-5 shadow-2xl transition-all duration-300"
          >
            {/* Image Container with Studio Lighting */}
            <div className="relative overflow-hidden rounded-2xl mb-5 bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-green-500/20">
              {/* Backlight Aura behind subject */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/25 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              {/* Subtle Radial Ambient Mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-green-500/30 text-[11px] font-medium text-green-400 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Roles
              </div>

              {/* Cutout Portrait */}
              <img
                src="/profile-transparent.png"
                alt="Praveen"
                className="relative z-10 w-full h-64 sm:h-80 object-cover object-top filter contrast-[1.04] brightness-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Smooth Bottom Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Profile Info */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Praveen N
              </h3>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-mono font-medium">
                @Praveen2330
              </span>
            </div>

            <p className="text-slate-400 mt-1 text-sm font-medium">
              Software Developer · (AI&amp;ML) · Data Analytics
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-xl bg-green-500/10 text-green-300 border border-green-500/20 font-medium">
                Software Developer
              </span>
              <span className="px-3 py-1 text-xs rounded-xl bg-green-500/10 text-green-300 border border-green-500/20 font-medium">
                AI &amp; ML
              </span>
              <span className="px-3 py-1 text-xs rounded-xl bg-green-500/10 text-green-300 border border-green-500/20 font-medium">
                Data Analytics
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;