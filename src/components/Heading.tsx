import React from 'react'
import SmallHeading from './SmallHeading';

const Heading = ({ smallHeadingEmoji, smallHeadingText, bigHeadingText, highLightedText, bottomText }) => {
    // wrap the highlighted text in a span with the class 'text-[rgb(130,71,255)]' in bigHeading Text
    const bigHeadingTextWithHighlightedText = bigHeadingText.replace(highLightedText, `<span className='text-[rgb(254,129,98)]'>${highLightedText}</span>`);

    return (
        <div data-aos="fade-up" className='text-center flex items-center flex-col max-w-4xl mx-auto py-12'>
            <SmallHeading emoji={smallHeadingEmoji} text={smallHeadingText} />
            <h1 dangerouslySetInnerHTML={{
                __html: bigHeadingTextWithHighlightedText
            }} className='lg:text-5xl md:text-5xl text-4xl font-semibold text-white/80 p-4'>
            </h1>
            <h4 className='text-white/40 lg:text-2xl md:text-xl text-lg lg:max-w-2xl md:max-w-xl px-10'>
                {bottomText}
            </h4>
        </div>
    )
}

export default Heading