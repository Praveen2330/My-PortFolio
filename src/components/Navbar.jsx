const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
  
          {/* LEFT LOGO */}
          <div className="text-xl font-bold text-white">
            My Portfolio<span className="text-green-400"></span>
          </div>
  
          {/* CENTER NAV LINKS */}
          <div className="flex justify-center gap-10 text-slate-300">
            <a
              href="#home"
              className="text-green-400 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-green-400 transition"
            >
              About
            </a>
            <a
              href="#academics"
              className="hover:text-green-400 transition"
            >Academics
            </a>
            <a
              href="#achievements"
              className="hover:text-green-400 transition"
            >
              Achievements
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </a>
          </div>
  
          {/* RIGHT RESUME BUTTON */}
          <div className="flex justify-end">
            <a
              href="/praveen ResAcc.pdf"
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