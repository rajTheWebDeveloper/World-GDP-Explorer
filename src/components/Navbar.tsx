import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from 'styled-components'
import { IoStatsChartSharp } from "react-icons/io5";



const Navbar = () => {

    let [expandNav,setExpandNav]=useState<boolean>(false)

    let toggleNav=()=>
    {
        setExpandNav(!expandNav)
    }
    
  return (
   <StyledNavbar>
     <nav className='w-screen h-[70px] text-white text-center'>
        <div className="container max-w-[1070px] w-[90vw] h-[100%] flex justify-between items-center mx-auto">
            <header className='mt-8 lg:mt-0 flex justify-between w-[100%] lg:w-auto'>
                <h2 className='cursor-pointer flex items-center'><IoStatsChartSharp/> <span className='ml-2 font-bold'><a href="/">World GDP Explorer</a></span></h2>
                <button onClick={toggleNav} className='lg:hidden'>{!expandNav?<GiHamburgerMenu  size={22}/>:<FaTimes size={22}/>}</button>
            </header>
            <ul className={`${expandNav?'flex flex-col lg:flex-row mt-8 lg:mt-0':'hidden'} lg:flex nav-content pt-6 lg:pt-0`}>
                    <li onClick={toggleNav} className='text-base cursor-pointer hover-action lg:mr-6'><a href="#cbgdp">GDP By Countries</a> </li>
                    <li onClick={toggleNav} className='text-base cursor-pointer hover-action'><a href="#gdpbc">GDP By Continents</a></li>
            </ul>
            <footer className={`${expandNav?'flex-col':"hidden"} lg:flex nav-content pb-6 lg:pb-0`}>
                    <button onClick={toggleNav} className='hover-action block text-left lg:inline'>Donate</button>
            </footer>
        </div>
    </nav>
   </StyledNavbar>
  )
}


let StyledNavbar=styled.section`
    
    @media(max-width: 1024px)
    {
        .container 
        {
            display: flex;
            flex-direction: column;
        }
        .nav-content 
        {
            width: 100vw;
            height: auto;
            background-color: #19198d;
            position: relative;
            z-index: 20;
            text-align: start;
        }
        li 
        {
            margin-bottom: 0.8rem;
        }
        .hover-action
        {
            padding: 0.3rem 0;
            width: 100%;
            padding-left: calc(100vw - 95vw);
        }
        .hover-action:hover
        {
            background-color: #050541;
            width: 100%;
            text-align: left;
        }
    }

`




export default Navbar