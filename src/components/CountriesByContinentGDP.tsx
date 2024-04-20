import React, { useState } from 'react'
import { CountriesByContinent } from '../static/data'
import { useAppDispatch, useAppSelector } from '../slices/Hooks'
import EachContinent from './EachContinent'
import styled from 'styled-components'




const CountriesByContinentGDP = () => {

    let [activeContinent,setActiveContinent]=useState<number>(0)
    
    let {countriesByContinentGDP}=useAppSelector(state=>state.Countries)
    let dispatch=useAppDispatch()

    let continents:string[]=countriesByContinentGDP.map((items)=>
    {
        return items.continentName;
    })

  

     let pieChartData={
        labels:countriesByContinentGDP[activeContinent].countriesInContinent.map((items)=>items.countryName),
        datasets:[
            {
                label:"GDP In Trillions (US $)",
                data:countriesByContinentGDP[activeContinent].countriesInContinent.map((items)=>items.countryGDP),
                backgroundColor:[
                    "#0000FF",
                    "#33FF57",
                    "#00FFFF",
                    "#33A8FF",
                    "#FF33A8",
                ],
                width:"200px",
                borderWidth:1,
                hoverOffset:25
            }
        ]
    }
    
  return (
    <StyledCountriesByContinentGDP>
        <div id="gdpbc" className='w-[90vw] max-w-[1070px] min-h-screen py-8 mx-auto text-white'>
       <div className="continents">
            {continents.map((items,idx)=>
            {
                return <p onClick={()=>setActiveContinent(idx)} className={`py-2 cursor-pointer ${idx===activeContinent?"bg-[#0000FF]":""}`}>{items}</p>
            })}
       </div>
       <div className="active-continent">
           <EachContinent pieChartData={pieChartData}/>
       </div>
    </div>
    </StyledCountriesByContinentGDP>
  )
}


let StyledCountriesByContinentGDP=styled.section`


.continents {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 2rem;
}



.continents p:hover 
{
    background-color: #0000F0;
}

.continents p 
{
    text-align: center;
}

`

export default CountriesByContinentGDP