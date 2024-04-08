import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ImageSlider = ({ images }) => {
    const sliderRef = useRef(null); // Slider referansını oluşturun

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    }

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageSlider
