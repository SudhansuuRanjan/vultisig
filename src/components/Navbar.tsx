
// import React from 'react';
// import { Button } from '@/components/ui/button';

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-design-dark/90 backdrop-blur-md border-b border-design-border">
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <div className="mr-2 flex items-center justify-center w-8 h-8">
//               <div className="w-4 h-4 bg-design-accent rounded-sm"></div>
//             </div>
//             <span className="text-white font-bold text-xl">VultiSig</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
//             <a href="#process" className="text-white/80 hover:text-white transition-colors">Process</a>
//             <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
//             <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
//           </div>

//           <div>
//             {/* <Button variant="outline" className="mr-4 bg-transparent text-white border-design-border hover:bg-design-accent/10 hover:text-design-accent">Log in</Button> */}
//             <Button className="bg-design-accent text-black hover:bg-design-accent-hover">Download App</Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react';
import { XIcon } from 'lucide-react';

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    setShowMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <nav className='flex fixed w-full justify-between z-50 items-center py-3.5 px-6 backdrop-blur-md border-b border-design-border bg-design-dark/90'>
      <Link className='z-50' onClickCapture={scrollToTop} to="/">
        <img className='h-11' src={screenWidth > 1000 || screenWidth < 768 ? `https://waiting-wrist-6f6.notion.site/image/attachment%3A0cb9b8bc-5bba-4f45-9ac1-94b7073d1fc7%3ALogo_white.svg?table=block&id=1ae23043-5592-80c4-b99d-d9dd4328135a&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&userId=&cache=v2` : "https://waiting-wrist-6f6.notion.site/image/attachment%3A59ec1daa-3f20-4134-9acf-557a419e1f65%3ALogomark_-_no_bg.png?table=block&id=19123043-5592-809e-90b0-d3a9d461222f&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=440&userId=&cache=v2"} alt="logo" />
      </Link>

      <div className='lg:flex md:flex hidden items-center lg:gap-14 md:gap-10'>
        <div className='flex text-[1.1rem] items-center lg:gap-6 md:gap-5'>
          <a href="/#features">How It Works</a>
          <span className='h-1 w-1 bg-design-accent'></span>
          <a href="/#faq">Backed By</a>
          <span className='h-1 w-1 bg-design-accent'></span>
          <a href="/#pricing">Docs</a>
          <span className='h-1 w-1 bg-design-accent'></span>
          <a href="/#testimonials">$VULT</a>
        </div>
        <button className='bg-design-accent hover:bg-design-accent/80 hover:scale-[102%] transition text-design-dark font-semibold px-6 py-2.5 rounded-2xl border border-design-card'>
          Download App
        </button>
      </div>

      <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='lg:hidden md:hidden block z-50'>
        {showMobileMenu ? <XIcon className='text-3xl' /> : <MenuIcon className='text-3xl' />}
      </button>

      <div className={`top-0 left-0 w-full h-screen transition-all bg-design-dark z-40 flex flex-col justify-start items-center gap-10 ${showMobileMenu ? 'lg:hidden md:hidden absolute' : 'lg:hidden md:hidden hidden'}`}>
        <div className='flex flex-col gap-10 items-center pt-28 w-full px-16'>
          <div className='flex flex-col text-[1.1rem] items-center gap-8'>
            <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-design-border' href="/#features">How It Works?</a>
            <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-design-border' href="/#faq">Backed By</a>
            <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-design-border' href="/#pricing">Docs</a>
            <a onClick={() => setShowMobileMenu(false)} className='font-medium hover:text-design-border' href="/#testimonials">$VULT</a>
          </div>
          <button className='bg-design-accent hover:bg-design-accent/80 hover:scale-[102%] transition text-design-dark font-semibold px-8 py-2.5 rounded-2xl border border-design-card'>
            Download App
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;