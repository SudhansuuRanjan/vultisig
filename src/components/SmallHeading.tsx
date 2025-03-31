const SmallHeading = ({emoji,text}) => {
  return (
    <p data-aos="fade-up" className='text-[rgb(130,71,255)] text-[0.8rem] py-0.5 px-2.5 border font-semibold tracking-wider bg-white border-gray-300 rounded-lg w-fit flex items-center'>
    <span className='text-lg pr-2'>{emoji}</span>
    <span>{text}</span>
    </p>
  )
}

export default SmallHeading;