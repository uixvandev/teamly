import { motion } from "framer-motion";
import { imgCalendar } from "../imports/svg-et2gh";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-[#683df3] rounded-[40px] p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <motion.h2
              className="text-2xl lg:text-4xl font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to seek team smarter?
            </motion.h2>
            <motion.p
              className="text-lg lg:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Recruitment is slow, and present a lot of uncertainities. Our AI
              streamlines candidate selection, making hiring faster and more
              accurate.
            </motion.p>
            <motion.a
              href="https://form.typeform.com/to/REw9QVIV"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#683df3] px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join the waitlist</span>
              <div className="w-5 h-5">
                <img src={imgCalendar} alt="" className="w-full h-full" />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
