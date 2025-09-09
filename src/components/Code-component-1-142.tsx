import { useState } from "react";
import { imgArrowUpCircle } from "../imports/svg-et2gh";

const faqs = [
  {
    question: "Q: How accurate is hirai.io's candidate matching?",
    answer: "A: hirai.io utilizes advanced AI algorithms to deliver highly accurate and relevant matches based on your specified criteria."
  },
  {
    question: "Q: How does the AI scoring system work?",
    answer: "A: Our AI analyzes multiple factors including skills, experience, work style, values, and goals to create compatibility scores and detailed reasoning for each match."
  },
  {
    question: "Q: Is my data secure on the platform?",
    answer: "A: Yes, we implement enterprise-grade security measures to protect your personal and professional information with end-to-end encryption."
  },
  {
    question: "Q: How quickly can I start connecting with potential partners?",
    answer: "A: Once your profile is complete, you can start receiving matches within minutes and begin connecting immediately."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#141414] mb-4">
            Before You Ask
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg border border-gray-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-3xl transition-colors duration-200"
              >
                <h3 className="font-bold text-[#141414] pr-4">
                  {faq.question}
                </h3>
                <div className={`w-6 h-6 transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'rotate-0' : 'rotate-180'}`}>
                  <img src={imgArrowUpCircle} alt="" className="w-full h-full" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <div className="px-6">
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}