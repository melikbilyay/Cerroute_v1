import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import ImageSlider from "./Slider";
import adsiztasarim from "./images/adsiztasarim.svg";
import adsiztasarim2 from "./images/adsiztasarim2.svg";
import adsiztasarim3 from "./images/adsiztasarim3.svg";
import adsiztasarim4 from "./images/adsiztasarim4.svg";

const Hero = () => {
      const images = [adsiztasarim, adsiztasarim2, adsiztasarim3, adsiztasarim4];
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-left">
                            <div>
                                <Heading subtitle='WELCOME TO CERROUTE' title='Best Online Education Expertise' />
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='button'>
                                    <button className='primary-btn'>
                                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                                    </button>
                                    <button>
                                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-right">
                            <ImageSlider images={images} />
                        </div>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
        </>
    )
}

export default Hero
