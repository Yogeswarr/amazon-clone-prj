import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"


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
                    <img loading = "lazy" src = "../static/img3.jpg" alt = "" />
                </div>
                <div className="mt-0">
                    <img loading = "lazy" src = "../static/img2.jpg" alt = "" />
                </div>
                <div className="mt-0">
                    <img loading = "lazy" src = "../static/img1.jpg" alt = "" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
