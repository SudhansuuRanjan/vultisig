import { ParallaxBanner } from "react-scroll-parallax"

const Video = () => {
    return (
        <ParallaxBanner
            layers={[
                { image: './Background_1_light.webp', speed: -20 },
            ]}
            className="lg:aspect-[2/1] md:aspect-[4/3] aspect-[5/6] bg-cover"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <iframe className="lg:h-[26rem] md:h-[24rem] h-[16rem] lg:w-[48rem] md:w-[44rem] w-[90%]" width="1520" height="545" src="https://www.youtube.com/embed/qgqaMaeblRc" title="Introduction to Vultisig: What It Is & How It Works" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </ParallaxBanner>
    )
}

export default Video