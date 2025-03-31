import SmallHeading from './SmallHeading';
import { ArrowRightCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section data-aos="fade-up" className="py-24 bg-gradient-to-b from-transparent to-background-dark/90">
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className=" bg-design-card lg:px-24 md:px-20 px-10 lg:py-16 md:py-14 py-10 rounded-[2rem] border border-design-card flex lg:flex-row md:flex-row flex-col gap-y-12 justify-between items-center shadow-lg">
          <div className='flex flex-col lg:py-12 md:py-10 py-6 max-w-sm'>
            <SmallHeading emoji={"👋"} text={"DON'T MISS OUT"} />
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium py-4'>
              Secure Your <span className='text-design-accent'>Digital Assets</span> with us
            </h1>
            <h4 className='text-gray-500 font-medium lg:text-xl md:text-lg'>
              Join our community of ambitious individuals and organizations eager to make a difference.
            </h4>
            <div data-aos-duration="700" className="group flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 gap-1 mt-5 items-center">
              <button className="bg-gradient-to-r hover:scale-105 transition-all from-[#33E6BF] to-[#0439C7] text-design-dark lg:text-xl md:text-xl text-lg font-semibold w-[17rem] py-3 rounded-2xl text-center flex items-center gap-3 justify-center">
                <span>Download Now</span>
                <ArrowRightCircle className="text-[0px] transition-all ease-in-out group-has-[button]:text-xl" />
              </button>
            </div>
          </div>
          <div className="lg:w-[26rem] md:w-[22rem] w-full community-img">
            <div className="pb-5">
              <div className="border bg-design-border shadow-lg border-design-card px-6 py-2.5 w-fit rounded-xl font-semibold text-xl m-auto">
                <span className="text-design-accent">200+</span> <span className="text-design-card">Happy users</span>
              </div>
              <div className="w-0 h-0 -mt-1 m-auto
                                    border-l-[10px] border-l-transparent
                                    border-t-[12px] border-design-border
                                    border-r-[10px] border-r-transparent">
              </div>
            </div>
            <img height={21} className="w-full" src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=512" alt="community" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
