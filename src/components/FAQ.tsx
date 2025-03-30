import SmallHeading from "./SmallHeading"
import { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = () => {

    const faqs = [
        {
            question: "What is VultiSig and what does it offer?",
            answer: "VultiSig is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
            id: "0"
        },
        {
            question: "Is VultiSig suitable for small businesses and larger enterprises alike?",
            answer: "Yes, VultiSig is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
            id: "1"
        },
        {
            question: "Can I access VultiSig from different devices and platforms?",
            answer: "Yes, VultiSig offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
            id: "2"
        },
        {
            question: "What kind of support options do you offer to users?",
            answer: "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using VultiSig.",
            id: "3"
        },
        {
            question: "How secure is the data stored within VultiSig?",
            answer: "Your data's security is a top priority. VultiSig employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
            id: "4"
        }
    ]

    const [activeId, setActiveId] = useState("0"); // Set the first faq as active by default

    const handleQuestionClick = (id) => {
        setActiveId(id);
    }


    return (
        <div id="faq" className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex lg:flex-row md:flex-row flex-col gap-y-16 justify-between">
                <div className='flex flex-col max-w-xs'>
                    <SmallHeading emoji={"🙋‍♀️"} text={"FAQ"} />
                    <h1 data-aos="fade-up" className='lg:text-5xl md:text-4xl text-3xl font-semibold py-4'>
                        Need <span className='text-design-accent'>Answers?</span>
                    </h1>
                    <h4 data-aos="fade-up" className="text-[rgb(118,117,117)] font-medium lg:text-[1.3rem] lg:leading-6 md:text-xl text-lg max-w-xs">
                        Check out our most commonly asked questions below to find the information you need.
                    </h4>
                </div>

                <div className="lg:w-[60%] md:w-[60%] w-full flex flex-col gap-4">
                    {
                        faqs.map((faq) => (
                            <FaqCard
                                key={faq.id}
                                data={faq}
                                active={faq.id === activeId}
                                onQuestionClick={handleQuestionClick}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ;


const FaqCard = ({ data, active, onQuestionClick }) => {
    const handleToggleAnswer = () => {
        if (active) {
            onQuestionClick(null);
            return;
        }
        onQuestionClick(data.id);
    }

    return (
        <div data-aos="fade-up" className='flex transition-all delay-[15ms] ease-in-out  bg-design-card lg:p-6 md:p-5 p-3 rounded-2xl gap-0 flex-col'>
            <div onClick={handleToggleAnswer} className='flex justify-between items-center cursor-pointer'>
                <h2 className='font-semibold lg:text-2xl md:text-xl text-lg pr-5'>
                    {data.question}
                </h2>
                <button name='expandfaq' aria-label="Expand FAQ" className={`transition-all delay-75 ease-in-out ${active && '-rotate-45'}`}>
                    <Plus className='text-design-border lg:text-3xl md:text-2xl text-xl' />
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${active ? 'h-fit mt-4 my-2' : 'h-0'}`}>
                <p className='text-gray-500 lg:text-lg md:text-lg text-base w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}