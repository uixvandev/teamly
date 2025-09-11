import imgImage1 from "figma:asset/b114d164c90ed87f8e3af29074bdf622b10c8be9.png";
import imgImage3 from "figma:asset/ce359589ae1e7654899cb2681dd7161fd7aeab5d.png";
import imgImage4 from "figma:asset/3d3bb4f74afb2c31cc6423927a48f29a9248ad5c.png";
import {
  imgArrowUpCircle,
  imgEllipse1,
  imgPeopleNetworkPartner,
  imgInsightAlt,
  imgArtificialIntelligence1,
  imgPhoneGuide1,
  imgCalendar,
  imgPercent1001,
  imgTimeFast1,
  imgAssessment1,
  imgFrame5,
  imgEllipse2,
  imgEllipse3,
} from "./svg-et2gh";

function ArrowUpCircle() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Arrow - Up Circle">
      <img className="block max-w-none size-full" src={imgArrowUpCircle} />
    </div>
  );
}

function IconlyBoldArrowUpCircle() {
  return (
    <div className="absolute inset-0" data-name="Iconly/Bold/Arrow - Up Circle">
      <ArrowUpCircle />
    </div>
  );
}

function IconlyBoldArrowUpCircle1() {
  return (
    <div className="absolute inset-0" data-name="Iconly/Bold/Arrow - Up Circle">
      <IconlyBoldArrowUpCircle />
    </div>
  );
}

function IconlyBoldArrowUpCircle2() {
  return (
    <div className="relative size-6" data-name="Iconly/Bold/Arrow - Up Circle">
      <IconlyBoldArrowUpCircle1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[76px] items-center justify-end relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[0px] tracking-[-0.176px]">
        <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] leading-[24px] text-[16px]">{`Q: How accurate is hirai.io's candidate matching?`}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <IconlyBoldArrowUpCircle2 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px]">
        <p className="leading-[24px]">
          A: hirai.io utilizes advanced AI algorithms to deliver highly accurate
          and relevant matches based on your specified criteria.
        </p>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div
      className="bg-white relative rounded-[24px] shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0 w-full"
      data-name="FAQ"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[16px] relative w-full">
          <Frame40 />
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
      <Faq />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-8 items-start justify-start left-[184px] top-[1956px] w-[1144px]">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] h-11 leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] text-center tracking-[-0.792px] w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] leading-[44px] text-[36px]">
          Before You Ask
        </p>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f0f0ff] h-[764px] left-[37px] overflow-clip rounded-[24px] to-[#fefefe] top-[41px] w-[1438px]">
      <div
        className="absolute bottom-[-230px] size-[305px] translate-x-[-50%]"
        style={{ left: "calc(50% - 0.5px)" }}
      >
        <div className="absolute inset-[-100.984%]">
          <img className="block max-w-none size-full" src={imgEllipse1} />
        </div>
      </div>
      <div className="absolute flex h-[293.983px] items-center justify-center left-[-68.04px] top-[537.6px] w-[293.983px]">
        <div className="flex-none rotate-[352.951deg]">
          <div
            className="bg-center bg-cover bg-no-repeat blur-[5px] filter size-[263.63px]"
            data-name="image 1"
            style={{ backgroundImage: `url('${imgImage1}')` }}
          />
        </div>
      </div>
      <div className="absolute flex h-[245.449px] items-center justify-center left-[1252px] top-[578px] w-[245.449px]">
        <div className="flex-none rotate-[342.21deg]">
          <div
            className="bg-center bg-cover bg-no-repeat blur-[2px] filter size-[195.166px]"
            data-name="image 3"
            style={{ backgroundImage: `url('${imgImage3}')` }}
          />
        </div>
      </div>
      <div className="absolute flex h-[129.753px] items-center justify-center left-[1332.82px] top-[133.82px] w-[129.753px]">
        <div className="flex-none rotate-[225.271deg]">
          <div
            className="bg-center bg-cover bg-no-repeat blur-[2px] filter size-[91.76px]"
            data-name="image 4"
            style={{ backgroundImage: `url('${imgImage4}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function PeopleNetworkPartner() {
  return (
    <div
      className="relative shrink-0 size-12"
      data-name="people-network-partner"
    >
      <img
        className="block max-w-none size-full"
        src={imgPeopleNetworkPartner}
      />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] relative shrink-0 text-[24px] text-black tracking-[-0.504px] w-full">
        <p className="leading-[32px]">Create Your Profile</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">
          Create a profile with your skills, interests, values, and professional
          goals.
        </p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] self-stretch shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-[32px] relative size-full">
          <PeopleNetworkPartner />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function InsightAlt() {
  return (
    <div className="relative shrink-0 size-12" data-name="insight-alt">
      <img className="block max-w-none size-full" src={imgInsightAlt} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] relative shrink-0 text-[24px] text-black tracking-[-0.504px] w-full">
        <p className="leading-[32px]">Perfect Match</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">
          AI algorithms find the best matches for partners, co-founders, or
          teams.
        </p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] self-stretch shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-[32px] relative size-full">
          <InsightAlt />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function ArtificialIntelligence1() {
  return (
    <div
      className="absolute bottom-0 left-[-0.89%] right-[0.89%] top-0"
      data-name="artificial-intelligence 1"
    >
      <img
        className="block max-w-none size-full"
        src={imgArtificialIntelligence1}
      />
    </div>
  );
}

function PeopleNetworkPartner1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-12"
      data-name="people-network-partner"
    >
      <ArtificialIntelligence1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] relative shrink-0 text-[24px] text-black tracking-[-0.504px] w-full">
        <p className="leading-[32px]">{`AI Scoring & Reasoning`}</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">
          Receive an in-depth report, compatibility score + logical reasons why
          a partner is ideal for you.
        </p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] self-stretch shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-[32px] relative size-full">
          <PeopleNetworkPartner1 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function PhoneGuide1() {
  return (
    <div className="relative shrink-0 size-12" data-name="phone-guide 1">
      <img className="block max-w-none size-full" src={imgPhoneGuide1} />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] relative shrink-0 text-[24px] text-black tracking-[-0.504px] w-full">
        <p className="leading-[32px]">Build Together</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">
          Start chatting, brainstorming ideas, and drafting initial reports on
          the platform before building a business together.
        </p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[24px] self-stretch shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-[32px] relative size-full">
          <PhoneGuide1 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full">
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-16 items-center justify-center left-[184px] top-[933px] w-[1145px]">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] h-11 leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] text-center tracking-[-0.792px] w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] leading-[44px] text-[36px]">
          How it Works?
        </p>
      </div>
      <Frame49 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#683df3] box-border content-stretch flex gap-2 items-center justify-center px-6 py-3 relative rounded-[16px] shadow-[2px_12px_48px_0px_rgba(79,76,255,0.32)] shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.084px]">
        <p className="leading-[20px] whitespace-pre">Join the waitlist</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-8 items-center justify-center left-1/2 top-[272px] translate-x-[-50%] w-[1144px]">
      <div
        className="css-n5l0hi font-['Sora:ExtraBold',_sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[#141414] text-[52px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="leading-[normal]">
          <span>{`Find, Match, and Build Faster with `}</span>
          <span className="text-[#683df3]">Teamly</span>
          <span>{` AI-Powered Team & Co-Founder Matching Made Simple.`}</span>
        </p>
      </div>
      <div
        className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[20px] text-center tracking-[-0.34px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[28px]">{`Stop guessing who’s the right fit. Let Teamly’s AI Scoring & Reasoning guide you to partners who truly align, so you can focus less on searching and more on building.`}</p>
      </div>
      <Button />
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Calendar">
      <div className="absolute inset-[-4.5%_-5%]">
        <img className="block max-w-none size-full" src={imgCalendar} />
      </div>
    </div>
  );
}

function IconlyLightCalendar() {
  return (
    <div className="absolute inset-0" data-name="Iconly/Light/Calendar">
      <Calendar />
    </div>
  );
}

function IconlyLightCalendar1() {
  return (
    <div className="relative shrink-0 size-5" data-name="Iconly/Light/Calendar">
      <IconlyLightCalendar />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-white box-border content-stretch flex gap-2 items-center justify-center px-6 py-4 relative rounded-[16px] shadow-[2px_4px_16px_0px_rgba(79,76,255,0.12)] shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#683df3] text-[0px] text-center text-nowrap tracking-[-0.084px]">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[14px] whitespace-pre">{`Join the waitlist`}</p>
      </div>
      <IconlyLightCalendar1 />
    </div>
  );
}

function Frame14() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-8 items-center justify-start left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1028px]"
      style={{ top: "calc(50% - 0.025px)" }}
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[36px] text-center text-nowrap text-white tracking-[-0.792px]">
        <p className="leading-[44px] whitespace-pre">
          Ready to seek team smarter?
        </p>
      </div>
      <div
        className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[28px] text-center text-white tracking-[-0.588px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[36px]">
          Team building is full of uncertainties. Teamly uses AI to streamline
          matching, reduce risk, and connect you with people who truly fit.
        </p>
      </div>
      <Button1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute bg-[#683df3] h-[344px] left-44 overflow-clip rounded-[40px] top-[2536.03px] w-[1160px]">
      <Frame14 />
    </div>
  );
}

function Percent1001() {
  return (
    <div className="relative shrink-0 size-14" data-name="percent-100 1">
      <img className="block max-w-none size-full" src={imgPercent1001} />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] relative shrink-0 text-[0px] text-black tracking-[-0.34px] w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] leading-[28px] text-[20px]">
          Precision Matches
        </p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">
          AI Scoring assesses skills, values, and work styles for accurate
          recommendations.
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
      <Percent1001 />
      <Frame17 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-2 h-full items-start justify-start overflow-clip px-6 py-8 relative rounded-[24px] shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0 w-[371px]">
      <Frame10 />
    </div>
  );
}

function TimeFast1() {
  return (
    <div className="relative shrink-0 size-14" data-name="time-fast 1">
      <img className="block max-w-none size-full" src={imgTimeFast1} />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] relative shrink-0 text-[0px] text-black tracking-[-0.34px] w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] leading-[28px] text-[20px]">
          Time-Saving
        </p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">{`Automated search & filtering of profiles starts chatting in seconds`}</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
      <TimeFast1 />
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-2 h-full items-start justify-start overflow-clip px-6 py-8 relative rounded-[24px] shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0 w-[371px]">
      <Frame20 />
    </div>
  );
}

function Assessment1() {
  return (
    <div className="relative shrink-0 size-14" data-name="assessment 1">
      <img className="block max-w-none size-full" src={imgAssessment1} />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] relative shrink-0 text-[0px] text-black tracking-[-0.34px] w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] leading-[28px] text-[20px]">
          Complete Transparency
        </p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">
          AI Reasoning explains in detail why someone is suitable for your
          criteria.
        </p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
      <Assessment1 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-6 py-8 relative rounded-[24px] shadow-[2px_4px_16px_0px_rgba(79,76,255,0.1)] shrink-0 w-[371px]">
      <Frame23 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame21 />
      </div>
      <Frame24 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-8 items-start justify-start left-[184px] top-[1476px] w-[1144px]">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] h-11 leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] text-center tracking-[-0.792px] w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] leading-[44px] text-[36px]">
          Why Teamly?
        </p>
      </div>
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[20px] text-center tracking-[-0.34px] w-full">
        <p className="leading-[28px]">
          Empowering team formation with AI technology designed to save time,
          reduce risk, and enhance matching accuracy.
        </p>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-8">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Frame5 />
      <div className="font-['Sora:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#2c2c2c] text-[24px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Teamly</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-center justify-center px-4 py-2 relative rounded-[16px] shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#683df3] text-[14px] text-center text-nowrap tracking-[-0.084px]">
        <p className="leading-[20px] whitespace-pre">Login</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#683df3] box-border content-stretch flex gap-1 items-center justify-center px-4 py-3 relative rounded-[16px] shrink-0"
      data-name="Button"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.084px]">
        <p className="leading-[20px] whitespace-pre">Join the waitlist</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-8 items-center justify-start relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">How it Works</p>
      </div>
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Why Teamly</p>
      </div>
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">FAQ</p>
      </div>
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Contact</p>
      </div>
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-between pointer-events-auto px-6 py-4 rounded-[24px] shadow-[2px_4px_12px_0px_rgba(79,76,255,0.12)] sticky top-0 w-[1144px]">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-8">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Frame25 />
      <div className="font-['Sora:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[24px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Teamly</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex font-['Plus_Jakarta_Sans:Regular',_sans-serif] gap-8 items-center justify-start leading-[0] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white">
      <div className="relative shrink-0">
        <p className="leading-[normal] text-nowrap whitespace-pre">
          Terms of Use
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[normal] text-nowrap whitespace-pre">
          Privacy Policy
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bg-[#141414] bottom-[-0.03px] box-border content-stretch flex flex-col gap-6 h-[187px] items-center justify-center left-1/2 px-[200px] py-8 translate-x-[-50%] w-[1512px]"
      data-name="Footer"
    >
      <Frame26 />
      <Frame61 />
      <div className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">© Teamly</p>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <div
        className="absolute size-[282px] top-[1790px]"
        style={{ left: "calc(8.333% + 160px)" }}
      >
        <div className="absolute inset-[-354.61%]">
          <img className="block max-w-none size-full" src={imgEllipse2} />
        </div>
      </div>
      <div
        className="absolute size-[282px] top-[1480px]"
        style={{ left: "calc(83.333% - 123px)" }}
      >
        <div className="absolute inset-[-354.61%]">
          <img className="block max-w-none size-full" src={imgEllipse3} />
        </div>
      </div>
      <Frame48 />
      <Frame13 />
      <Frame51 />
      <Frame1 />
      <Frame53 />
      <Frame18 />
      <div
        className="absolute bottom-0 left-[184px] pointer-events-none top-[83px]"
        style={{ height: "calc(100% - 83px)" }}
      >
        <Frame52 />
      </div>
      <Footer />
    </div>
  );
}
