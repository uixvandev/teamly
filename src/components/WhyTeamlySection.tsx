import { motion } from "framer-motion";
import {
  imgPercent1001,
  imgTimeFast1,
  imgAssessment1,
  imgEllipse2,
  imgEllipse3,
} from "../imports/svg-et2gh";

const benefits = [
  {
    icon: imgPercent1001,
    title: "Precision Matches",
    description:
      "AI Scoring assesses skills, values, and work styles for accurate recommendations.",
  },
  {
    icon: imgTimeFast1,
    title: "Time-Saving",
    description:
      "Automated search & filtering of profiles starts chatting in seconds",
  },
  {
    icon: imgAssessment1,
    title: "Complete Transparency",
    description:
      "AI Reasoning explains in detail why someone is suitable for your criteria.",
  },
];

export function WhyTeamlySection() {
  return (
    <section
      id="why-teamly"
      className="py-16 lg:py-24 px-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute left-8 top-1/4 w-32 h-32 opacity-30 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src={imgEllipse2} alt="" className="w-full h-full" />
      </motion.div>
      <motion.div
        className="absolute right-8 top-0 w-32 h-32 opacity-30 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img src={imgEllipse3} alt="" className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#141414] mb-8">
            Why Teamly?
          </h2>
          <motion.p
            className="text-lg lg:text-xl text-[#6b6b6b] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empowering team formation with AI technology designed to save time,
            reduce risk, and enhance matching accuracy.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-14 h-14 mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={benefit.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-black mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  className="text-[#6b6b6b] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {benefit.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
