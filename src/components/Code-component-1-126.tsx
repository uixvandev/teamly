import { imgFrame5 } from "../imports/svg-et2gh";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img src={imgFrame5} alt="Teamly Logo" className="w-full h-full" />
            </div>
            <span className="text-2xl font-bold text-[#2c2c2c]">Teamly</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-black hover:text-[#683df3] transition-colors">
              How it Works
            </a>
            <a href="#why-teamly" className="text-[#141414] hover:text-[#683df3] transition-colors">
              Why Teamly
            </a>
            <a href="#faq" className="text-black hover:text-[#683df3] transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-black hover:text-[#683df3] transition-colors">
              Contact
            </a>
            <button className="px-4 py-2 text-[#683df3] hover:bg-[#683df3]/10 rounded-2xl transition-colors">
              Login
            </button>
            <button className="bg-[#683df3] text-white px-4 py-3 rounded-2xl hover:bg-[#683df3]/90 transition-colors">
              Join the waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}