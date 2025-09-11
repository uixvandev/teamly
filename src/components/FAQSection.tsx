import { useState } from "react";
import { motion } from "framer-motion";
import { imgArrowUpCircle } from "../imports/svg-et2gh";

const faqs = [
  {
    question: "Q: What is Teamly?",
    answer:
      "Teamly is an AI-powered platform that helps founders find the right co-founders, talent, and investors — aligned in vision, skills, and values.",
  },
  {
    question: "Q: How accurate is Teamly's candidate matching?",
    answer:
      "Our AI analyzes skills, personality, and goals. Matches are optimized for compatibility and execution potential, not just surface-level interests.",
  },
  {
    question: "Q: How does the AI scoring system work?",
    answer:
      "Teamly assigns a compatibility score based on data from your profile, preferences, and behavior, so you can focus on the most relevant connections.",
  },
  {
    question: "Q: Who can use Teamly?",
    answer:
      "1. Founders looking for co-founders.<br>2. Entrepreneurs & professionals seeking the right team.<br>3. Investors & mentors exploring strong teams to support.",
  },
  {
    question: "Q: How quickly can I start connecting with potential partners?",
    answer:
      "Immediately. Once your profile is complete, Teamly's AI recommends co-founders or teams you can connect with right away.",
  },
  {
    question: "Q: What makes Teamly different from other networking platforms?",
    answer:
      "Unlike generic networking apps, Teamly focuses on team formation & execution with AI-powered matching, Super Swipe, token-based interaction, and full ecosystem support (mentoring, hiring, investor access).",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#141414] mb-4">
            Before You Ask
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-3xl transition-colors duration-200"
              >
                <h3 className="font-bold text-[#141414] pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  className="w-6 h-6 transition-transform duration-200 flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={imgArrowUpCircle}
                    alt="Toggle FAQ answer"
                    className="w-full h-full"
                  />
                </motion.div>
              </button>

              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  maxHeight: openIndex === index ? 250 : 0,
                  paddingBottom: openIndex === index ? 24 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6">
                  <p
                    className="text-[#6b6b6b] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
