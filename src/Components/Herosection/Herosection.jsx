import React from 'react'
import './Herosection.css'
import { Link } from 'react-router-dom'
import Animation from './Animation'
const Herosection = () => {
  return (
    <>
      <section className='Herosection main'>
        <div className="container innerHeroSection">
          {/* <h1 className='hero-heading'>Simplify, Summarize, and Extract <br /> with <span className="g-txt">AI-Powered Efficiency</span></h1> */}
          <Animation />
          <p className='hero-subheading'>Experience TextPrep AI: Effortlessly summarize articles, extract content from websites, and simplify text with <span className='g-txt'>Advance AI</span></p>

          <Link to={'/appinterface/articlesummarizer'}>
            <button className='getting-start-btn'>Get Started...</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Herosection