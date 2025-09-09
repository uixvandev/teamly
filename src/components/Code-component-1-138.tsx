import { 
  imgPercent1001, 
  imgTimeFast1, 
  imgAssessment1, 
  imgEllipse2, 
  imgEllipse3 
} from "../imports/svg-et2gh";

const benefits = [
  {
    icon: imgPercent1001,
    title: "Precision Matches",
    description: "AI Scoring assesses skills, values, and work styles for accurate recommendations."
  },
  {
    icon: imgTimeFast1,
    title: "Time-Saving",
    description: "Automated search & filtering of profiles starts chatting in seconds"
  },
  {
    icon: imgAssessment1,
    title: "Complete Transparency",
    description: "AI Reasoning explains in detail why someone is suitable for your criteria."
  }
];

export function WhyTeamlySection() {
  return (
    <section id="why-teamly" className="py-16 lg:py-24 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute left-8 top-1/4 w-32 h-32 opacity-30 pointer-events-none">
        <img src={imgEllipse2} alt="" className="w-full h-full" />
      </div>
      <div className="absolute right-8 top-0 w-32 h-32 opacity-30 pointer-events-none">
        <img src={imgEllipse3} alt="" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#141414] mb-8">
            Why Teamly?
          </h2>
          <p className="text-lg lg:text-xl text-[#6b6b6b] max-w-4xl mx-auto leading-relaxed">
            Empowering team formation with AI technology designed to save time, reduce risk, and enhance matching accuracy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-6">
                  <img src={benefit.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#6b6b6b] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}