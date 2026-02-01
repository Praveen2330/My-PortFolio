import { useEffect, useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

        {/* LEFT LOGO */}
        <a
          href="#home"
          className="text-xl font-bold text-white hover:text-green-400 transition"
        >
          My Portfolio<span className="text-green-400">.</span>
        </a>

        {/* CENTER NAV LINKS */}
        <div className="flex justify-center gap-10 text-slate-300">
          <a
            href="#home"
            className={`relative transition ${
              active === "home"
                ? "text-green-400 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full"
                : "hover:text-green-400 text-slate-300"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`relative transition ${
              active === "about"
                ? "text-green-400 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full"
                : "hover:text-green-400 text-slate-300"
            }`}
          >
            About
          </a>
          <a
            href="#academics"
            className={`relative transition ${
              active === "academics"
                ? "text-green-400 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full"
                : "hover:text-green-400 text-slate-300"
            }`}
          >
            Academics
          </a>
          <a
            href="#projects"
            className={`relative transition ${
              active === "projects"
                ? "text-green-400 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full"
                : "hover:text-green-400 text-slate-300"
            }`}
          >
            Projects
          </a>
          <a
            href="#achievements"
            className={`relative transition ${
              active === "achievements"
                ? "text-green-400 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full"
                : "hover:text-green-400 text-slate-300"
            }`}
          >
            Achievements
          </a>
          <a
            href="#contact"
            className={`relative transition ${
              active === "contact"
                ? "text-green-400 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full"
                : "hover:text-green-400 text-slate-300"
            }`}
          >
            Contact
          </a>
        </div>

        {/* RIGHT RESUME BUTTON */}
        <div className="flex justify-end">
          <a
            href="/praveen-resume.pdf"
            download
            className="px-5 py-2 rounded-xl text-sm font-medium
                       bg-green-500 text-black
                       hover:bg-green-400
                       transition shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            Download Resume
          </a>
        </div>

      </div>
    </nav>
  );
};
  
  export default Navbar;