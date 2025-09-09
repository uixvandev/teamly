import { imgCalendar } from "../imports/svg-et2gh";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#683df3] rounded-[40px] p-8 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-4xl font-medium mb-8">
              Ready to seek team smarter?
            </h2>
            <p className="text-lg lg:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Recruitment is slow, and present a lot of uncertainities. Our AI
              streamlines candidate selection, making hiring faster and more
              accurate.
            </p>
            <button className="bg-white text-[#683df3] px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              <span>Join the waitlist</span>
              <div className="w-5 h-5">
                <img src={imgCalendar} alt="" className="w-full h-full" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
