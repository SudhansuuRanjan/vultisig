import Marquee from "react-fast-marquee";
import SmallHeading from './SmallHeading'

const Testimonials = () => {

    const testimonials = [
        {
            name: "David",
            img: "https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg",
            job: "FreeLancer",
            review: "Using Vultisig has been a game-changer for our team. The security features and intuitive interface have greatly improved our productivity."
        },
        {
            name: "Sarah",
            img: "https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg",
            job: "Project Manager",
            review: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."
        },
        {
            name: "Alex",
            img: "https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg",
            job: "Product Manager",
            review: "I can't imagine running my business without this product. The security features have saved me hours of manual work, allowing me to focus on strategic tasks."
        },
        {
            name: "Emily",
            img: "https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg",
            job: "Director",
            review: "VultiSig transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
        }
    ]


    return (
        <div id="testimonials" className="py-10">
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <div className='flex flex-col py-12'>
                    <SmallHeading emoji={"🧡"} text={"TESTIMONIALS"} />
                    <h1 data-aos="fade-up" className='lg:text-[3.4rem] md:text-[2.8rem] text-[2.4rem] lg:leading-[4rem] md:leading-[3.4rem] leading-[3rem] font-medium py-4'>
                        Hear from our <span className='text-design-accent'>Satisfied</span> clients
                    </h1>
                    <h4 data-aos="fade-up" className='text-gray-500 lg:text-2xl md:text-xl text-lg lg:max-w-2xl max-w-lg'>
                        Discover why our clients love working with us. Read their testimonials and learn how we helped to meet their security needs.
                    </h4>
                </div>
            </div>
            <Marquee direction="right" speed={50} autoFill={true} className="lg:mb-12 md:mb-10 mb-6 marquee" pauseOnHover={true}>
                {
                    testimonials.map((testimonial, index) => (
                        <div key={index} className="border bg-design-card border-design-border rounded-[1.8rem] flex flex-col gap-4 p-10 pt-14 w-[21rem] flex-1 mx-3">
                            <p className="text-white/70 font-medium text-xl" >
                                "{testimonial.review}
                            </p>
                            <div className="flex items-center gap-3 pt-5">
                                <img className='h-14 w-14 rounded-full' src={testimonial.img} alt="testimonial" />
                                <div className="flex flex-col">
                                    <h5 className="text-xl font-medium">
                                        {testimonial.name}
                                    </h5>
                                    <p className="text-[rgb(130,130,130)] text-lg" >
                                        {testimonial.job}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default Testimonials;
