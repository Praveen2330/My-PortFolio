import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12 text-white">
          Get in <span className="text-green-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LOCATION */}
          <div className="bg-black/40 backdrop-blur border border-green-500/20
                          rounded-2xl p-8
                          hover:border-green-400
                          hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                          transition">
            <div className="flex justify-center mb-4">
              <FaLocationDot className="text-green-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Location
            </h3>
            <p className="text-slate-400">Chennai, India</p>
          </div>

          {/* EMAIL */}
          <div className="bg-black/40 backdrop-blur border border-green-500/20
                          rounded-2xl p-8
                          hover:border-green-400
                          hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                          transition">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-green-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Email
            </h3>
            <a
              href="mailto:praveenpraveen1060@gmail.com"
              className="text-green-400 hover:underline"
            >
              praveenpraveen1060@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="bg-black/40 backdrop-blur border border-green-500/20
                          rounded-2xl p-8
                          hover:border-green-400
                          hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                          transition">
            <div className="flex justify-center mb-4">
              <FaPhone className="text-green-400 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Phone
            </h3>
            <a
              href="tel:+917904741422"
              className="text-green-400 hover:underline"
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