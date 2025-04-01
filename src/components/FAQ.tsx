import React, { useEffect, useState } from "react"
import SmallHeading from "./SmallHeading"


const FAQ = () => {

    const faqs = [
        {
            question: "What are the key features of Vultisig?",
            answer: "Vultisig offers a range of innovative features, including self-custodial multichain support, secure threshold signatures, and the elimination of seed phrases. Our platform ensures that users have complete control over their assets without relying on a single point of failure.",
            id: "1"
        },
        {
            question: "How does Vultisig enhance security?",
            answer: "Vultisig enhances security by utilizing threshold signatures, which require multiple signatures to authorize transactions. This means that even if one key is compromised, your assets remain safe. Our system is designed to protect against unauthorized access while giving you full control.",
            id: "2"
        },
        {
            question: "What can I expect from using Vultisig?",
            answer: "By using Vultisig, you can expect a seamless experience in managing your crypto assets. You will enjoy enhanced security without the hassle of remembering complex seed phrases.",
            id: "3"
        },
        {
            question: "Are there any challenges when using Vultisig?",
            answer: "While Vultisig is designed for ease of use, users may face challenges in understanding the concept of threshold signatures initially. However, our comprehensive resources and support are available to help you navigate any difficulties and maximize your experience with the platform.",
            id: "4"
        },
        {
            question: "Is Vultisig free to use?",
            answer: "Yes, Vultisig is free to use for all users. We believe in democratizing access to secure crypto management solutions without any hidden fees or costs.",
            id: "5"
        }
    ]

    return (
        <div className="flex lg:flex-row md:flex-row flex-col justify-evenly lg:py-32 md:py-28 py-16  gap-5 px-5">
            <div>
                <SmallHeading emoji={"❓"} text={"FAQs"} />
                <h3 data-aos="fade-up"  className='lg:text-5xl md:text-4xl text-3xl font-semibold underline-offset-8 mt-4'>
                    What
                </h3>
                <h3 data-aos="fade-up"  className='lg:text-5xl md:text-4xl text-3xl font-semibold underline-offset-8 mt-4'>
                    <span className=' text-design-accent'>Frequently Asked</span>
                </h3>
                <h3 data-aos="fade-up"  className='lg:text-5xl md:text-4xl text-3xl font-semibold underline-offset-8 mt-4'>
                    Questions
                </h3>
                <p data-aos="fade-up"  className='text-gray-500 lg:max-w-sm md:max-w-xs w-[90%] my-10'>
                    Some of the most common questions we get asked by our clients. If you have any other questions, please get in touch.
                </p>
                <img data-aos="fade-up"  className="lg:max-w-sm bounce animate-bounce md:max-w-xs w-[70%] m-auto" src="https://waiting-wrist-6f6.notion.site/image/attachment%3A076c941d-bc4b-4d04-aefe-a3e9cbcd89d5%3AVullti_Agent_idea.png?table=block&id=19123043-5592-8092-a249-fe1f503804ea&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=410&userId=&cache=v2" alt="faqs" />
            </div>

            <div className="lg:w-[50%] md:w-[50%] w-full">
                <div className='flex flex-col items-center justify-center my-16'>
                    {
                        faqs.map((faq) => (
                            <div className="w-full" key={faq.id}>
                                <FaqCard data={faq} />
                                {
                                    Number(faq.id) < faqs.length && <hr data-aos="fade-up" className='w-full border-gray-700 my-5' />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ


const FaqCard = ({ data }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (data.id === "1") {
            setShow(true);
        }
    }, [])

    return (
        <div data-aos="fade-up" className='flex transition-all delay-[15ms] ease-in-out lg:py-5 md:py-5 py-3 gap-0 flex-col'>
            <div onClick={() => setShow((show) => !show)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='font-semibold lg:text-2xl md:text-xl text-lg pr-5'>
                    <span className="text-design-accent mr-5">0{data.id}</span> {data.question}
                </h3>
                <button className={`transition-all delay-75 ease-in-out ${show && '-rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${show ? 'h-fit mt-4 my-2' : 'h-0'}`}>
                <p className='text-gray-400 lg:text-lg md:text-lg text-base w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}