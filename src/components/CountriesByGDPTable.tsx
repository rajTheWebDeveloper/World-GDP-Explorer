import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../slices/Hooks';
import { toggleRanking } from '../slices/CountriesSlice';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";




const CountriesByGDPTable = () => {
    let [topDown,setTopDown]=useState(true)
    let dispatch=useAppDispatch()
    let {allCountriesByGDP}=useAppSelector(state=>state.Countries)

    let handleRanking=(topDown:boolean)=>
    {
        setTopDown(!topDown)
        dispatch(toggleRanking(topDown))
    }


    return (
        <StyledTable>
            <div className='text-white w-[90vw] text-center max-w-[1070px] mx-auto py-20'>
                <table className='w-[90vw] max-w-[1070px] text-center mx-auto'>
                    <thead className='select-none'>
                        <tr>
                            <td className='py-4 px-6'>Rank</td>
                            <td className='py-4 px-6'>Country Name</td>
                            <td className='py-4 px-6 cursor-pointer flex items-center justify-center' onClick={()=>handleRanking(topDown)}>Country GDP (Trillion $) <span className='ml-2'>{!topDown?<IoMdArrowDropup/>:<IoMdArrowDropdown/>}</span></td>
                            <td className='py-4 px-6 only-max'>Continent</td>
                        </tr>
                    </thead>
                    <tbody>
                        {allCountriesByGDP?.map((item) => (
                            <tr key={item.rank} className=''>
                                <td className='py-2'>{item.rank}</td>
                                <td className='py-2'>{item.countryName}</td>
                                <td className='py-2'>{item.countryGDP}</td>
                                <td className='py-2 only-max'>{item.continent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StyledTable>
    );
};

let StyledTable = styled.section`
    
@media(max-width:1024px)
{
    .only-max 
    {
        display: none;
    }
}

tr:nth-of-type(2n)
{
    background-color: #19193c;
}



tr:hover 
{
    background-color: #ccccd4;
    color: black;
    transition: all 0.2s ease;
}


thead tr:nth-of-type(1)
{
    background-color: #000026;
    color: white;
}

`

export default CountriesByGDPTable;
