import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#academics", label: "Academics" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-xl font-bold text-white hover:text-green-400 transition"
          onClick={handleLinkClick}
        >
          My Portfolio<span className="text-green-400">.</span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8 text-slate-300">
          {links.map(({ href, label }) => {
            const id = href.replace("#", "");
            return (
              <a
                key={href}
                href={href}
                className={`relative transition text-sm ${
                  active === id
                    ? "text-green-400 font-medium after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-green-400 after:rounded-full"
                    : "hover:text-green-400"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* DESKTOP RESUME BUTTON */}
        <div className="hidden lg:flex">
          <a
            href="/praveen-resume.pdf"
            download
            className="px-5 py-2 rounded-xl text-sm font-medium
                       bg-green-500 text-black hover:bg-green-400
                       transition shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            Download Resume
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-green-400 text-xl p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 backdrop-blur border-t border-green-500/10`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => {
            const id = href.replace("#", "");
            return (
              <a
                key={href}
                href={href}
                onClick={handleLinkClick}
                className={`text-sm transition py-1 ${
                  active === id
                    ? "text-green-400 font-semibold"
                    : "text-slate-300 hover:text-green-400"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="/praveen-resume.pdf"
            download
            onClick={handleLinkClick}
            className="mt-2 px-5 py-2 rounded-xl text-sm font-medium text-center
                       bg-green-500 text-black hover:bg-green-400
                       transition shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;