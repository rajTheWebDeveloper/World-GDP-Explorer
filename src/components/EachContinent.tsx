import React from 'react'
import { Pie as PieChart, Bar as BarChart} from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,ArcElement,Title,Tooltip,Legend} from 'chart.js'
import styled from 'styled-components'
ChartJS.register(CategoryScale,LinearScale,ArcElement,Title,Tooltip,Legend)

interface DataSetType 
{
    label:string 
    data:number[]
    backgroundColor:string[]
    width:string 
    borderWidth:number
    hoverOffset:number
}


interface PieChartType 
{
    labels:string[]
    datasets:DataSetType[]
}

const EachContinent = ({pieChartData}:{pieChartData:PieChartType}) => {

      let options = {
    responsive: true,
    maintainAspectRatio: false, // This prevents the chart from maintaining aspect ratio
    scales: {
      x: {
        grid: {
          display: false // Remove x-axis grid lines
        }
      },
      y: {
        grid: {
          display: false // Show y-axis grid lines
        }
      }
    }
  }


  return (
    <StyledEachContinent>
      <div className='py-8 both-graphs'>
        <div>
            <BarChart options={options} data={pieChartData} className='w-[100%] h-[300px] mx-auto object-contain'/>
        </div>
        <div>
            <PieChart options={options} data={pieChartData} className='w-[100%] h-[300px] mx-auto object-contain'/>
        </div>
    </div>
    </StyledEachContinent>
  )
}


let StyledEachContinent=styled.section`
  


.both-graphs 
{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap:3rem;
}

@media(max-width:1024px)
{
    .both-graphs 
    {
      display: grid;
      grid-template-columns: 1fr;
    }
}


`

export default EachContinent