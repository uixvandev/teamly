import { imgFrame5 } from "../imports/svg-et2gh";

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img
                src={imgFrame5}
                alt="Teamly Logo"
                className="w-full h-full"
              />
            </div>
            <span className="text-2xl font-bold text-white">Teamly</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-lg opacity-80">© Teamly</p>
        </div>
      </div>
    </footer>
  );
}
