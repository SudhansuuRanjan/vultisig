import React from 'react';

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
    <section className="py-16 px-6 md:px-12 border-design-border">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50 text-lg mb-10">Already chosen by the leaders</h3>
        <ul className="grid lg:grid-cols-6 grid-cols-3 lg:gap-12 gap-8 justify-center">
          {companies.map((company) => (
            <li key={company.name} className='flex hover:scale-[104%] transition-all flex-col items-center gap-2 text-center cursor-pointer'>
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
        </ul>
      </div>
    </section>
  );
};

export default TrustedBySection;