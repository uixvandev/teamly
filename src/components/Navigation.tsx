import { useState } from "react";
import { motion } from "framer-motion";
import { imgFrame5 } from "../imports/svg-et2gh";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-8 h-8">
                <img
                  src={imgFrame5}
                  alt="Teamly Logo"
                  className="w-full h-full"
                />
              </div>
              <span className="text-2xl font-bold text-[#2c2c2c]">Teamly</span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#how-it-works"
                className="text-black hover:text-[#683df3] transition-colors"
              >
                How it Works
              </a>
              <a
                href="#why-teamly"
                className="text-[#141414] hover:text-[#683df3] transition-colors"
              >
                Why Teamly
              </a>
              <a
                href="#faq"
                className="text-black hover:text-[#683df3] transition-colors"
              >
                FAQ
              </a>
              <motion.a
                href="https://form.typeform.com/to/REw9QVIV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#683df3] text-white px-4 py-3 rounded-2xl hover:bg-[#683df3]/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the waitlist
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 md:hidden bg-white"
          style={{ zIndex: 9999 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img
                  src={imgFrame5}
                  alt="Teamly Logo"
                  className="w-full h-full"
                />
              </div>
              <span className="text-2xl font-bold text-[#2c2c2c]">Teamly</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <motion.div
            className="px-6 py-6 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a
              href="#how-it-works"
              className="block py-3 text-lg text-black hover:text-[#683df3] transition-colors"
              onClick={toggleMobileMenu}
            >
              How it Works
            </a>
            <a
              href="#why-teamly"
              className="block py-3 text-lg text-[#141414] hover:text-[#683df3] transition-colors"
              onClick={toggleMobileMenu}
            >
              Why Teamly
            </a>
            <a
              href="#faq"
              className="block py-3 text-lg text-black hover:text-[#683df3] transition-colors"
              onClick={toggleMobileMenu}
            >
              FAQ
            </a>

            <div className="pt-4 border-t border-gray-200">
              <a
                href="https://form.typeform.com/to/REw9QVIV"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#683df3] text-white px-4 py-3 rounded-2xl hover:bg-[#683df3]/90 transition-colors inline-block text-center"
                onClick={toggleMobileMenu}
              >
                Join the waitlist
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
