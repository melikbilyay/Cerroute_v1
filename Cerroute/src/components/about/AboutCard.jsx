import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"

import Mux from "../mux/Mux";

const AboutCard = () => {
  return (
      <>
        <section className='aboutHome'>
          <div className='container flexSB'>
            <div className='left row'>
              <img src='./images/about.webp' alt=''/>
            </div>
            <div className='right row'>
              <Heading subtitle='LEARN ANYTHING' title='Benefits About CeRRoute'/>
              <div className='items'>
                {homeAbout.map((val) => {
                  return (
                      <div className='item flexSB'>
                        <div className='img'>
                          <img src={val.cover} alt=''/>
                        </div>
                        <div className='text'>
                          <h2>{val.title}</h2>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <span className='empty-span'></span>
        <Mux/>
      </>
  )
}

export default AboutCard
