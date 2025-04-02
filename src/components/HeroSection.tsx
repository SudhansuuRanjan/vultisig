import { ArrowRight, ArrowRightCircle } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

const HeroSection = () => {
  return (
    <section className="relative bg-image pt-32 pb-20 px-3 md:px-6 overflow-hidden">
      <div data-aos="zoom-in" className="container mx-auto">
        <div className="lg:max-w-3xl md:max-w-3xl max-w-full mx-auto text-center relative z-10">
          <a href='https://airdrop.vultisig.com/leaderboard' target='_blank' className='border lg:text-base md:text-base text-sm m-auto mb-3 border-design-border hover:bg-design-card-hover cursor-pointer hover:scale-[102%] transition w-fit px-1 py-1 rounded-full flex items-center gap-2 lg:scale[100%] md:scale-[100%] scale-[75%]'>
            <div className='bg-design-card flex gap-2 items-center text-sm text-design-accent rounded-full py-0.5 pl-2 pr-3'>
              <div className='animate-ping rounded-full size-2 bg-rose-500'></div> <div>Live Now</div>
            </div>
            <div className='pr-3'>
              Go to Vultisig Airdrop <ArrowRight size={15} className="inline-block" />
            </div>
          </a>

          <Parallax
            translateX={['-900px', '400px']}
            translateY={['-1000px', '200px']}
            easing="easeInQuad">
            <img src="/airdrop.png" alt="space ship" className='absolute lg:h-20 md:h-16 h-16 top-[10rem] -left-[10rem] ]z-0' />
          </Parallax>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <p className="slogan">Regain control with the <span className='text-accent text-gradient'>Seedless, Multi-chain</span> crypto vault</p>
          </h1>

          <h3 className='text-design-accent text-xl font-medium'>OPEN-SOURCE AUDITED</h3>

          <p className="text-white/70  lg:text-lg md:text-lg text-base mb-8 lg:mt-3 md:mt-3 mt-6 max-w-2xl mx-auto">
            The ultimate self custodial multichain crypto vault, based on secure threshold secure signatures. No more seed phrases, no more single point of failure. Just you and your assets.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 ">
            {/* <Button className="bg-design-accent text-black hover:bg-design-accent-hover px-8 py-6 text-lg">Go to Airdrop</Button> */}
            <div data-aos="fade-up" data-aos-duration="700" className="group z-10 flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 gap-5 mt-0 items-center">
              <button className="bg-gradient-to-r hover:scale-105 transition-all from-[#33E6BF] to-[#0439C7] text-design-dark lg:text-lg md:text-lg text-base font-medium lg:w-[14rem] md:w-[14rem] w-[19rem] py-3 rounded-2xl text-center flex items-center gap-3 justify-center">
                <span>Download App</span>
              </button>

              <button className="bg-gradient-to-r hover:scale-105 transition-all border border-design-accent text-design-accent lg:text-lg md:text-lg text-base font-medium lg:w-[14rem] md:w-[14rem] w-[19rem] py-[0.72rem] backdrop-blur rounded-2xl text-center flex items-center gap-3 justify-center">
                <span>Know More</span>
                <ArrowRightCircle className="text-[0px] transition-all ease-in-out group-has-[button]:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      {/* <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 rounded-full bg-gradient-circle animate-pulse-glow"></div> */}

      {/* Circle outline */}

    </section>
  );
};

export default HeroSection;
