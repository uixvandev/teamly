import { motion } from "framer-motion";
import { imgEllipse1 } from "../imports/svg-et2gh";
import imgImage1 from "figma:asset/b114d164c90ed87f8e3af29074bdf622b10c8be9.png";
import imgImage3 from "figma:asset/ce359589ae1e7654899cb2681dd7161fd7aeab5d.png";
import imgImage4 from "figma:asset/3d3bb4f74afb2c31cc6423927a48f29a9248ad5c.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Container */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#f0f0ff] to-[#fefefe] rounded-3xl mx-4 lg:mx-8 mt-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Central blur element */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={imgEllipse1}
              alt="Decorative background blur for visual appeal"
              className="w-64 h-64 lg:w-80 lg:h-80"
            />
          </motion.div>

          {/* Floating images - hidden on mobile for cleaner look */}
          <motion.div
            className="hidden lg:block absolute left-0 top-3/4 transform -translate-x-1/4 rotate-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={imgImage1}
              alt="Illustrative image of team collaboration"
              className="w-48 h-48 object-cover rounded-2xl blur-sm opacity-60"
              style={{ filter: "blur(5px)" }}
            />
          </motion.div>

          <motion.div
            className="hidden lg:block absolute right-0 top-3/4 transform translate-x-1/6 -rotate-12"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={imgImage3}
              alt="Creative team building visual"
              className="w-40 h-40 object-cover rounded-2xl blur-sm opacity-60"
              style={{ filter: "blur(2px)" }}
            />
          </motion.div>

          <motion.div
            className="hidden lg:block absolute right-4 top-1/4 transform rotate-45"
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 0.6, rotate: 45 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={imgImage4}
              alt="Dynamic team interaction illustration"
              className="w-24 h-24 object-cover rounded-2xl blur-sm opacity-60"
              style={{ filter: "blur(2px)" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#141414] mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span>Find, Match, and Build Faster with </span>
          <motion.span
            className="text-[#683df3]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Teamly
          </motion.span>
          <br className="hidden sm:block" />
          <span> AI-Powered Team & Co-Founder Matching Made Simple.</span>
        </motion.h1>

        <motion.p
          className="text-lg lg:text-xl text-[#6b6b6b] mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          Stop guessing who's the right fit. Let Teamly's AI Scoring & Reasoning
          guide you to partners who truly align, so you can focus less on
          searching and more on building.
        </motion.p>

        <motion.a
          href="https://form.typeform.com/to/REw9QVIV"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#683df3] text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-[#683df3]/90 transition-all duration-200 transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the waitlist
        </motion.a>
      </motion.div>
    </section>
  );
}
