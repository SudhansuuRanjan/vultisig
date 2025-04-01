import React from 'react'
import { Facebook, Github, Instagram, XIcon, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <>
      <div data-aos="fade-up" className='m-auto flex items-center justify-center flex-col gap-3 mb-10 mt-10 max-w-3xl'>
        <h4 className='text-center text-3xl font-semibold text-white/80'>
          Say Hello to <span className="text-gradient">VultiSig</span>! The ultimate self-custodial, multi-chain crypto vault.
        </h4>

        <div data-aos="fade-up" data-aos-duration="700" className="group flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 gap-5 mt-10 items-center">
          <button className="bg-gradient-to-r hover:scale-105 transition-all from-[#33E6BF] to-[#0439C7] text-design-dark lg:text-lg md:text-lg text-base font-medium lg:w-[14rem] md:w-[14rem] w-[19rem] py-3 rounded-2xl text-center flex items-center gap-3 justify-center">
            <span><a href="https://discord.com/invite/54wEtGYxuv" target='_blank'>Join Discord</a></span>
          </button>

          <button className="bg-gradient-to-r hover:scale-105 transition-all border border-design-accent text-design-accent lg:text-lg md:text-lg text-base font-medium lg:w-[14rem] md:w-[14rem] w-[19rem] py-[0.72rem] rounded-2xl text-center flex items-center gap-3 justify-center">
            <span>Download App</span>
            <ArrowRightCircle className="text-[0px] transition-all ease-in-out group-has-[button]:text-xl" />
          </button>
        </div>
      </div>
      <footer className='dm-sans-regular pt-20 bg-gradient-to-t from-[#0b0d1b] to-design-dark w-full'>
        <div className='flex lg:flex-row md:flex-row flex-col items-start lg:px-10 md:px-5 px-10 lg:gap-6 md:gap-2 gap-16'>
          <div className='lg:max-w-md md:max-w-md'>
            <p className='font-semibold lg:text-4xl md:text-4xl text-3xl'>
              Vultisig, the ultimate self-custodial, multi-chain <span className='text-gradient'> crypto vault.</span>
            </p>
            <div className='flex gap-4 my-10'>
              <Link aria-label="Facebook Page" to="https://github.com/Vultisig/" className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition'>
                <Github size={26} />
              </Link>
              <Link aria-label="Instagram" to="" target='_blank' className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition'>
                <Instagram size={26} />
              </Link>
              <Link aria-label="Twitter" to="https://twitter.com/vultisig" className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition'>
                <XIcon size={26} />
              </Link>
              <a target='_blank' aria-label="Youtube" className='h-10 w-10 rounded-full flex justify-center items-center bg-white hover:bg-opacity-25 cursor-pointer bg-opacity-15 transition' href="#">
                <Youtube size={26} />
              </a>
            </div>
          </div>

          <div className='flex gap-5 flex-wrap w-full'>
            <div className='lg:max-w-lg md:max-w-md lg:flex-1 lg:w-full'>
              <h5 className='text-base font-semibold flex items-center gap-2'><div className='size-2 rounded-full bg-design-accent'></div> VultiSig</h5>
              <div className='w-full flex flex-col gap-3 font-medium mt-5'>
                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  How It Works?
                </Link>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Backed by
                </Link>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Docs
                </Link>

                <a href="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  $VULT
                </a>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Extension
                </Link>
              </div>
            </div>

            <div className='lg:max-w-md md:max-w-md lg:flex-1 lg:w-full'>
              <h5 className='text-base font-semibold flex items-center gap-2'><div className='size-2 rounded-full bg-design-accent'></div> Contact</h5>
              <div className='w-full flex flex-col gap-3 font-medium mt-5'>
                <Link to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Support
                </Link>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Audits
                </Link>

                <Link onClick={scrollToTop} to="/#faq" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  FAQs
                </Link>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Contact Us
                </Link>
              </div>
            </div>

            <div className='lg:max-w-md md:max-w-md lg:flex-1 lg:w-full'>
              <h5 className='text-base font-semibold flex items-center gap-2'><div className='size-2 rounded-full bg-design-accent'></div> Legals</h5>
              <div className='w-full flex flex-col gap-3 font-medium mt-5'>
                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Privacy Policy
                </Link>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Terms of Service
                </Link>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Code of Conduct
                </Link>

                <Link onClick={scrollToTop} to="/" className='bg-gray-400 hover:bg-opacity-25 cursor-pointer w-fit rounded-full bg-opacity-15 py-2 px-6'>
                  Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:mt-[-0.5rem] md:mt-0 mt-5 pb-5'>
          <div className='relative fancy-font  z-50 flex items-center justify-center flex-col'>
            <h1 className='text-center text-footer-bg lg:text-[16rem] md:text-[10rem] text-[5rem]'>
              VultiSig
            </h1>
          </div>
          {/* <img className='w-full px-10 py-20' src="/retina_lg.svg" alt="logo" /> */}
        </div>

        <div className='px-10 py-10'>
          <div className='flex lg:flex-row md:flex-row flex-col items-center justify-between gap-2 text-gray-500'>
            <p className=''>
              © {new Date().getFullYear()} VultiSig. All rights reserved.
            </p>
            <p className=' text-gray-400'>
              v1.0.0
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer