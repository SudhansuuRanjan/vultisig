const SmallHeading = ({ emoji, text }) => {
  return (
    <div data-aos="fade-up" className='text-design-accent text-[0.8rem] py-1.5 px-2.5 border font-semibold tracking-wider border-design-card-hover rounded-lg w-fit flex items-center'>
      <span className='pr-2'>{emoji}</span>
      <span>{text}</span>
    </div>
  )
}

export default SmallHeading;