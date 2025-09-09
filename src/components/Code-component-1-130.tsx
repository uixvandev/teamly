import { imgEllipse1 } from "../imports/svg-et2gh";
import imgImage1 from "figma:asset/b114d164c90ed87f8e3af29074bdf622b10c8be9.png";
import imgImage3 from "figma:asset/ce359589ae1e7654899cb2681dd7161fd7aeab5d.png";
import imgImage4 from "figma:asset/3d3bb4f74afb2c31cc6423927a48f29a9248ad5c.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f0ff] to-[#fefefe] rounded-3xl mx-4 lg:mx-8 mt-8">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Central blur element */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <img src={imgEllipse1} alt="" className="w-64 h-64 lg:w-80 lg:h-80" />
          </div>
          
          {/* Floating images - hidden on mobile for cleaner look */}
          <div className="hidden lg:block absolute left-0 top-3/4 transform -translate-x-1/4 rotate-12">
            <img 
              src={imgImage1} 
              alt="" 
              className="w-48 h-48 object-cover rounded-2xl blur-sm opacity-60"
              style={{ filter: 'blur(5px)' }}
            />
          </div>
          
          <div className="hidden lg:block absolute right-0 top-3/4 transform translate-x-1/6 -rotate-12">
            <img 
              src={imgImage3} 
              alt="" 
              className="w-40 h-40 object-cover rounded-2xl blur-sm opacity-60"
              style={{ filter: 'blur(2px)' }}
            />
          </div>
          
          <div className="hidden lg:block absolute right-4 top-1/4 transform rotate-45">
            <img 
              src={imgImage4} 
              alt="" 
              className="w-24 h-24 object-cover rounded-2xl blur-sm opacity-60"
              style={{ filter: 'blur(2px)' }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 lg:pt-24 pb-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#141414] mb-8 leading-tight">
          <span>Find, Match, and Build Faster with </span>
          <span className="text-[#683df3]">Teamly</span>
          <br className="hidden sm:block" />
          <span> AI-Powered Team & Co-Founder Matching Made Simple.</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-[#6b6b6b] mb-8 max-w-4xl mx-auto leading-relaxed">
          Stop guessing who's the right fit. Let Teamly's AI Scoring & Reasoning guide you to partners who truly align, so you can focus less on searching and more on building.
        </p>
        
        <button className="bg-[#683df3] text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-[#683df3]/90 transition-all duration-200 transform hover:scale-105">
          Join the waitlist
        </button>
      </div>
    </section>
  );
}