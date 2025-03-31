import { ParallaxBanner } from "react-scroll-parallax"

const Video = () => {
    return (
        <ParallaxBanner
            layers={[
                { image: 'https://waiting-wrist-6f6.notion.site/image/attachment%3A746dfe28-b74b-4664-8aa3-ccf54aa7b5c5%3ABackground_3.png?table=block&id=19123043-5592-804e-a524-f4fa8b23c568&spaceId=59ea08d2-bc07-4c80-b51a-dbd605835b75&width=1420&userId=&cache=v2', speed: -40 },
            ]}
            className="lg:aspect-[2/1] md:aspect-[4/3] aspect-[5/6]"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <iframe className="lg:h-[26rem] md:h-[24rem] h-[16rem] lg:w-[48rem] md:w-[44rem] w-[90%]" width="1520" height="545" src="https://www.youtube.com/embed/qgqaMaeblRc" title="Introduction to Vultisig: What It Is & How It Works" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </ParallaxBanner>
    )
}

export default Video