import { motion } from "framer-motion";
import { imgFrame5 } from "../imports/svg-et2gh";

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8">
              <img
                src={imgFrame5}
                alt="Teamly Logo"
                className="w-full h-full"
              />
            </div>
            <span className="text-2xl font-bold text-white">Teamly</span>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-lg opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            © Teamly
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
