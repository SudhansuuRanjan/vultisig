import SmallHeading from "./SmallHeading"
import { Phone, LucideFlame, Bell } from "lucide-react";


const OtherFeatures = () => {
    const features = [
        {
            icon: <Phone />,
            title: "Cross-Platform Compatibility",
            description: "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across windows, mac, linux and mobile devices, allowing you to manage from your preferred device."
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
                        Explore an array of features that elevate your <span className='text-design-accent'>Security</span> to new heights
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
            </div>

        </section>
    )
}

export default OtherFeatures