import { Parallax } from 'react-scroll-parallax'
import SmallHeading from './SmallHeading'

const BestFeatures = () => {
    return (
        <section>
            <div className='text-center lg:px-12 md:px-6 px-4 bg-design-dark flex items-center flex-col w-full mx-auto pt-12'>
                <SmallHeading emoji={"🛠️"} text={"INTEGRATIONS"} />
                <h1 data-aos="fade-up" className='lg:text-5xl md:text-4xl text-3xl font-semibold text-white p-4'>
                    Enable <span className='text-design-accent'>integration</span> with other popular tools and platforms
                </h1>
                <h4 data-aos="fade-up" className="text-[rgb(158,157,157)] font-medium lg:text-[1.3rem] lg:leading-6 md:text-xl max-w-xl">
                    Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
                </h4>

                {/* <img data-aos="zoom-in" width={620} className="pt-16" src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="platform-integrations" /> */}


                <div className="flex items-center lg:flex-row flex-col-reverse mt-16">
                    <div>
                        <ul className="flex gap-10 flex-col">
                            {/* Step 1: Vault Generation */}
                            <li data-aos="fade-up" className="text-start">
                                <h4 className="font-semibold flex items-center text-2xl gap-2 pb-2">
                                    <div className="p-2 rounded-full size-9 text-center flex items-center justify-center text-design-dark bg-design-accent">1.</div>
                                    <div>Vault Generation</div>
                                </h4>
                                <div className="pl-3">
                                    <span className="label font-semibold">KeyGen time:</span>
                                    <span className="value ml-1">3-5 seconds.</span>
                                    <p className="desc">Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.</p>
                                </div>
                            </li>

                            {/* Step 2: Transaction Signing */}
                            <li data-aos="fade-up" className="text-start">
                                <h4 className="font-semibold flex items-center text-2xl gap-2 pb-2">
                                    <div className="p-2 rounded-full size-9 text-center flex items-center justify-center text-design-dark bg-design-accent">2.</div>
                                    <div>Transaction Signing</div>
                                </h4>

                                <div className="pl-3">
                                    <span className="label font-semibold">KeySign time:</span>
                                    <span className="value ml-1">1-3 seconds.</span>
                                    <p className="desc">One device starts the transaction. A second paired device confirms the transaction. It is natively “two-factor” and is done in real time.</p>
                                </div>
                            </li>

                            {/* Step 3: Resharing */}
                            <li data-aos="fade-up" className="text-start">
                                <h4 className="font-semibold flex items-center text-2xl gap-2 pb-2">
                                    <div className="p-2 rounded-full size-9 text-center flex items-center justify-center text-design-dark bg-design-accent">3.</div>
                                    <div>Resharing</div>
                                </h4>
                                <div className="pl-3">
                                    <span className="label font-semibold">Reshare Time:</span>
                                    <span className="value ml-1">3-5 seconds.</span>
                                    <p className="desc">Lost a device? Replace it easily without changing the vault or address. Want to increase security? Go from 2-of-3 to 3-of-4 setup easily.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <img data-aos="fade-up" className="lg:max-w-xl" src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fsecurity.png&w=1080&q=75" alt="security" />
                </div>
            </div>
            <div className='py-16'>
                <Parallax speed={-5}>
                    <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
                        <SmallHeading emoji={"🧡"} text={"FEATURES"} />
                        <p data-aos="fade-up" className='text-4xl font-medium'>Best <span className='text-design-accent'>Features</span> in one place</p>
                    </div>
                </Parallax>

                <div className='flex flex-wrap px-10 justify-evenly gap-10 gap-y-20 items-center py-18'>
                    <Step1 />
                    <Step2 />
                    <Step3 />
                </div>
            </div>
        </section>
    )
}

function Step1() {
    return (
        <div>
            <img className='w-44' src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fasset-management.png&w=1920&q=75" alt="step" />
            <p className='text-design-accent mt-5'>Completed</p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>React Interface</h3>
            <div className='flex flex-col gap-3'>
                <p>
                    ✨ Vite React Interface
                </p>
                <p>
                    ✨ Cool Animations
                </p>
                <p>
                    ✨ Framer Motion
                </p>
                <p>
                    ✨ Figma Design.
                </p>
            </div>
        </div>
    )
}

function Step2() {
    return (
        <div>
            <img className='w-44' src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fcrypto-exchange.png&w=1920&q=75" alt="step" />
            <p className='text-design-accent mt-5'>Completed</p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>Web3 Interface</h3>
            <div className='flex flex-col gap-3'>
                <p>
                    ✨ Connect Wallet
                </p>
                <p>
                    ✨ Thirdweb SDK
                </p>
                <p>
                    ✨ NFT Gating
                </p>
                <p>
                    ✨ Wallet SDK.
                </p>
            </div>
        </div>
    )
}

function Step3() {
    return (
        <div>
            <img className='w-44' src="https://vultisig.com/_next/image?url=%2Fimages%2Fhome%2Fwallets-power.png&w=1920&q=75" alt="step" />
            <p className='text-design-accent mt-5'>Completed</p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>Accomplishment</h3>
            <div className='flex flex-col gap-3'>
                <p>
                    ✨ NFT Gated Website
                </p>
                <p>
                    ✨ Wallet Integration
                </p>
                <p>
                    ✨ Cool Animations
                </p>
                <p>
                    ✨ Build on Time.
                </p>
            </div>
        </div>
    )
}


export default BestFeatures;