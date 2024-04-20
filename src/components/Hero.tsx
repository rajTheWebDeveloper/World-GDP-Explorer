import React from 'react'
import styled from 'styled-components'

const Hero = () => {

  return (
   <StyledHero>
     <div className='Hero h-[100vh] w-screen text-white'>
       <div className="container w-[90vw] max-w-[1070px] mx-auto text-center pt-8">
             <h3 className='text-lg md:text-2xl lg:text-3xl font-extrabold mt-28 lg:mt-40 leading-7'>Want to know about updated GDP statistics of the countries across the globe? Look no further than <span className='text-[#4482c0]'> World GDP Explorer</span></h3>
             <a href="#cbgdp">
                <button className='bg-[#19198d] py-2 px-5 lg:py-2 lg:px-6 rounded mt-6 lg:mt-8'>Get Started</button>
             </a>
       </div>
    </div>
   </StyledHero>
  )
}


let StyledHero=styled.section`
  
  .Hero 
  {
    position: relative;
  }
  .Hero::before
  {
    position: absolute;
    content: "";
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    z-index: 2;
  }
  .container 
  {
    position: relative;
    z-index: 4;
  }

`


export default Hero