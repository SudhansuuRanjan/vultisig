import Marquee from "react-fast-marquee";

const companies = [
  { name: "THORChain", src: "https://vultisig.com/images/thorchain.svg" },
  { name: "Vultisig", src: "https://vultisig.com/images/vultisig.svg" },
  { name: "WEWE", src: "https://vultisig.com/images/wewe.svg" },
  { name: "DeFi Suisse", src: "https://vultisig.com/images/DeFi-suisse-treasury.svg" },
  { name: "ZKFinance", src: "https://vultisig.com/images/zkfinance.svg" },
  { name: "RUJI", src: "https://vultisig.com/images/ruji.svg" },
];

const TrustedBySection = () => {
  return (
    <section className="py-6 px-2 border-design-border">
      <div className="container mx-auto">

        <Marquee autoFill={true} className="lg:mb-12 md:mb-10 mb-6 flex overflow-y-hidden w-full">
          {companies.map((company) => (
            <li key={company.name} className='flex px-10 mt-3 hover:scale-[104%] transition-all flex-col items-center gap-2 text-center cursor-pointer'>
              <img 
                alt={company.name} 
                loading="lazy" 
                width="80" 
                height="80" 
                decoding="async" 
                className="image" 
                src={company.src} 
              />
              <span>{company.name} <br /> Treasury</span>
            </li>
          ))}
          </Marquee>

          <h3 className="text-center text-white/50 text-lg mb-10 px-8">Trusted by industry leaders worldwide.</h3>
      </div>
    </section>
  );
};

export default TrustedBySection;
