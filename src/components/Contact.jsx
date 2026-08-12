import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="contact" className="py-20 px-5 bg-black">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">
          Get in <span className="text-green-400">Touch</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">

          {/* LOCATION */}
          <div
            onMouseMove={handleMove}
            className="glow-card bg-black/40 backdrop-blur border border-green-500/20
                       rounded-2xl p-6 sm:p-8
                       hover:border-green-400
                       hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                       transition"
          >
            <div className="flex justify-center mb-4">
              <FaLocationDot className="text-green-400 text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Location
            </h3>
            <p className="text-slate-400 text-sm">Chennai, India</p>
          </div>

          {/* EMAIL */}
          <div
            onMouseMove={handleMove}
            className="glow-card bg-black/40 backdrop-blur border border-green-500/20
                       rounded-2xl p-6 sm:p-8
                       hover:border-green-400
                       hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                       transition"
          >
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-green-400 text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Email
            </h3>
            <a
              href="mailto:praveenpraveen1060@gmail.com"
              className="text-green-400 hover:underline text-sm break-all"
            >
              praveenpraveen1060@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div
            onMouseMove={handleMove}
            className="glow-card bg-black/40 backdrop-blur border border-green-500/20
                       rounded-2xl p-6 sm:p-8
                       hover:border-green-400
                       hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                       transition"
          >
            <div className="flex justify-center mb-4">
              <FaPhone className="text-green-400 text-3xl sm:text-4xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Phone
            </h3>
            <a
              href="tel:+917904741422"
              className="text-green-400 hover:underline text-sm"
            >
              +91 79047 41422
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;