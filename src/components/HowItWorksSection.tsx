import { motion } from "framer-motion";
import {
  imgPeopleNetworkPartner,
  imgInsightAlt,
  imgArtificialIntelligence1,
  imgPhoneGuide1,
} from "../imports/svg-et2gh";

const steps = [
  {
    icon: imgPeopleNetworkPartner,
    title: "Create Your Profile",
    description:
      "Create a profile with your skills, interests, values, and professional goals.",
  },
  {
    icon: imgInsightAlt,
    title: "Perfect Match",
    description:
      "AI algorithms find the best matches for partners, co-founders, or teams.",
  },
  {
    icon: imgArtificialIntelligence1,
    title: "AI Scoring & Reasoning",
    description:
      "Receive an in-depth report, compatibility score + logical reasons why a partner is ideal for you.",
  },
  {
    icon: imgPhoneGuide1,
    title: "Build Together",
    description:
      "Start chatting, brainstorming ideas, and drafting initial reports on the platform before building a business together.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#141414] mb-4">
            How it Works?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-12 h-12 mb-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={step.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.h3
                  className="text-xl lg:text-2xl font-bold text-black mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-[#6b6b6b] leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
