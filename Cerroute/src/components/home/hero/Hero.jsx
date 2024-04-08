import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import ImageSlider from "./Slider";
import a from "./images/a.svg";
import b from "./images/b.svg";
import c from "./images/c.svg";
import d from "./images/d.svg";
import Mux from "../../mux/Mux";
const Hero = () => {
      const images = [a, b, c, d];
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
