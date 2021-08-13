import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../static/img1.jpg"
import img2 from "../static/img2.jpg"
import img3 from "../static/img3.jpg"

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel 
                autoPlay 
                infiniteLoop
                showStatus = {false}
                showIndicators = {false}
                showThumbs = {false}
                interval = {5000}
            >
                <div className="mt-0">
                    <Image width={1500} height={600} loading = "lazy" src = {img3} alt = "" />
                </div>
                <div className="mt-0">
                    <Image width={1500} height={600} loading = "lazy" src = {img2} alt = "" />
                </div>
                <div className="mt-0">
                    <Image width={1500} height={600} loading = "lazy" src = {img1} alt = "" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
