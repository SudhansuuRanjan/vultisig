import SmallHeading from "./SmallHeading"
import { Phone, LucideFlame, Bell } from "lucide-react";
// import { brands } from "../assets";


const OtherFeatures = () => {

    const features = [
        {
            icon: <Phone />,
            title: "Cross-Platform Compatibility",
            description: "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
        },
        {
            icon: <Bell />,
            title: "Stay Informed with Essential Notifications",
            description: "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
        },
        {
            icon: <LucideFlame />,
            title: "Secure Data Encryption at all times",
            description: "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
        },
    ]


    return (
        <section id="features" className='bg-[#11284A] flex flex-col w-full pt-16'>
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex flex-col py-12'>
                    <SmallHeading emoji={"🤩"} text={"AND MORE..."} />
                    <h1 data-aos="fade-up" className='lg:text-[3.4rem] md:text-[2.8rem] text-[2.4rem] lg:leading-[4rem] md:leading-[3.4rem] leading-[3rem] font-medium text-white py-4'>
                        Explore an array of features that elevate your <span className='text-design-accent'>Productivity</span> to new heights
                    </h1>
                    <h4 data-aos="fade-up" className='text-gray-300 lg:text-2xl md:text-xl text-lg max-w-2xl'>
                        Discover the tools that will revolutionize the way you manage and optimize your operations
                    </h4>
                </div>

                <div className="flex lg:flex-row flex-col items-center gap-10 py-16 text-center">
                    {
                        features.map((feature, index) => (
                            <div data-aos="fade-up" key={index} className="bg-[#061B3A] border border-design-card rounded-[1.8rem] flex flex-col gap-4 items-center px-10 py-16 pt-20 h-[25rem] flex-1 lg:w-full md:w-[32rem] w-full">
                                <div className="text-design-dark p-4 text-2xl bg-design-accent w-fit rounded-2xl">
                                    {feature.icon}
                                </div>
                                <h5 className="text-2xl font-semibold text-white">
                                    {feature.title}
                                </h5>
                                <p className="text-[rgb(156,156,156)] font-medium text-[1rem] leading-6" >
                                    {feature.description}
                                </p>
                            </div>
                        ))
                    }
                </div>

                <div className="pt-16">
                    {/* <div data-aos="fade-up" className="m-auto grid grid-cols-5 place-items-center place-content-center gap-3 w-fit">
                        {
                            brands.map((brand, index) => (
                                <div className="bg-[rgb(33,33,33)] lg:p-3 md:p-3 p-2.5 rounded-xl w-fit">
                                    <img className='lg:h-10 md:h-10 h-8' src={brand + ".svg"} alt="brand" />
                                </div>
                            ))
                        }
                    </div> */}

                    <div className='text-center flex items-center flex-col max-w-3xl mx-auto pt-12'>
                        <SmallHeading emoji={"🛠️"} text={"INTEGRATIONS"} />
                        <h1 data-aos="fade-up" className='lg:text-5xl md:text-4xl text-3xl font-semibold text-white p-4'>
                            Enable <span className='text-design-accent'>integration</span> with other popular tools and platforms
                        </h1>
                        <h4 data-aos="fade-up" className="text-[rgb(158,157,157)] font-medium lg:text-[1.3rem] lg:leading-6 md:text-xl max-w-xl">
                            Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
                        </h4>

                        <img data-aos="zoom-in" width={620} className="pt-16" src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="platform-integrations" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OtherFeatures