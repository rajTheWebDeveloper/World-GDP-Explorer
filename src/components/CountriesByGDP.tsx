import React from 'react'
import {Bar as BarChart} from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)

const CountriesByGDP = () => {

  
  let options = {
    responsive: true,
    maintainAspectRatio: false, // This prevents the chart from maintaining aspect ratio
    scales: {
      x: {
        grid: {
          display: false// Remove x-axis grid lines
        }
      },
      y: {
        grid: {
          display: false // Show y-axis grid lines
        }
      }
    }
  };


  let barChartData={
        labels:[
            "USA",
            "China",
            "Japan",
            "Germany",
            "India",
            "United Kingdom",
            "France",
            "Russia",
            "Canada",
            "Italy"
        ],
        datasets:[
            {
                label:"GDP In Trillions (US $)",
                data:[25.463,17.963,4.231,4.072,3.385,3.071,2.783,2.240,2.140,2.010],
                backgroundColor:[
                    "#0000FF",
                    "#33FF57",
                    "#00FFFF",
                    "#33A8FF",
                    "#FF33A8",
                    "#A833FF",
                    "#33FFA8",
                    "#33DDA8",
                    "#FFDDA8",
                    "#FFD3D8",
                ],
                width:"200px",
                borderWidth:1,
                hoverOffset:25
            }
        ]
    }


  return (
    <div id='cbgdp' className='min-h-screen w-screen py-10'>
        <p className='text-white text-center text-2xl mb-6'>Countries By GDP (World)</p>
        <div className="container w-[90vw] max-w-[1070px] flex justify-center items-center mx-auto text-center">
          <BarChart options={options} data={barChartData} className='h-[400px] w-[100%] object-cover'>
            
          </BarChart>
        </div>
    </div>
  )
}

export default CountriesByGDP