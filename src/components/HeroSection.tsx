import { ArrowRightCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-[url(https://waiting-wrist-6f6.notion.site/image/attachment%3Ae3ac7d1a-0ad7-47c6-9034-7390c23f26e3%3ABackground_1.png?table=block&id=19123043-5592-80db-a763-c349dab75c61&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2)] pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            VULTISIG AIRDROP<br />
            IS <span className='text-accent text-gradient'>LIVE</span>!
          </h1>

          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss your chance to claim your share of $VULT and be part of the future of wallet security.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Button className="bg-design-accent text-black hover:bg-design-accent-hover px-8 py-6 text-lg">Go to Airdrop</Button> */}
            <div data-aos="fade-up" data-aos-duration="700" className="group flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 gap-1 mt-5 items-center">
              <button className="bg-gradient-to-r hover:scale-105 transition-all from-[#33E6BF] to-[#0439C7] text-design-dark lg:text-xl md:text-xl text-lg font-semibold w-[17rem] py-3 rounded-2xl text-center flex items-center gap-3 justify-center">
                <span>Go to Airdrop</span>
                <ArrowRightCircle className="text-[0px] transition-all ease-in-out group-has-[button]:text-xl" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Glow effect */}
      {/* <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 rounded-full bg-gradient-circle animate-pulse-glow"></div> */}

      {/* Circle outline */}
      <div className="absolute top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] border border-design-accent/30 rounded-full"></div>

    </section>
  );
};

export default HeroSection;
