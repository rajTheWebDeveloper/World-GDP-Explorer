import { AllCountriesType } from "../models/interfaces"
import {CountriesByContinentType} from '../models/interfaces'

let AllCountriesByGDP:AllCountriesType[]=[
    {
        countryName:"USA",
        countryGDP:25.463,
        rank:1,
        continent:"North America"
    },
    {
        countryName:"China",
        countryGDP:17.963,
        rank:2,
        continent:"Asia"
    },{
        countryName:"Japan",
        countryGDP:4.231,
        rank:3,
        continent:"Asia"
    },{
        countryName:"Germany",
        countryGDP:4.072,
        rank:4,
        continent:"Europe"
    },{
        countryName:"India",
        countryGDP:3.385,
        rank:5,
        continent:"Asia"
    },{
        countryName:"UK",
        countryGDP:3.071,
        rank:6,
        continent:"Europe"
    },{
        countryName:"France",
        countryGDP:2.783,
        rank:7,
        continent:"Europe"
    },{
        countryName:"Russia",
        countryGDP:2.240,
        rank:8,
        continent:"Asia/Europe"
    },{
        countryName:"Canada",
        countryGDP:2.140,
        rank:9,
        continent:"North America"
    },{
        countryName:"Italy",
        countryGDP:2.010,
        rank:10,
        continent:"Europe"
    },
]


let CountriesByContinent:CountriesByContinentType[]=[
    {
        continentName:"Asia",
        countriesInContinent:[
            {
                countryName:"China",
                countryGDP:17.963,
                rank:1,
                continent:"Asia"
            },
            {
                countryName:"Japan",
                countryGDP:4.231,
                rank:2,
                continent:"Asia"
            },
            {
                countryName:"India",
                countryGDP:3.385,
                rank:3,
                continent:"Asia"
            },
            {
                countryName:"Russia",
                countryGDP:2.240,
                rank:4,
                continent:"Asia"
            },
            {
                countryName:"South Korea",
                countryGDP:1.665,
                rank:5,
                continent:"Asia"
            }
        ]
    },
    {
        continentName:"Africa",
        countriesInContinent:[
            {
                countryName:"Nigeria",
                countryGDP:0.478,
                rank:1,
                continent:"Africa"
            },
            {
                countryName:"Egypt",
                countryGDP:0.477,
                rank:2,
                continent:"Africa"
            },
            {
                countryName:"South Africa",
                countryGDP:0.406,
                rank:3,
                continent:"Africa"
            },
            {
                countryName:"Algeria",
                countryGDP:0.192,
                rank:4,
                continent:"Africa"
            },
            {
                countryName:"Ethiopia",
                countryGDP:0.127,
                rank:5,
                continent:"Africa"
            }
        ]
    },
    {
        continentName:"Europe",
        countriesInContinent:[
            {
                countryName:"Germany",
                countryGDP:4.072,
                rank:1,
                continent:"Europe"
            },
            {
                countryName:"UK",
                countryGDP:3.071,
                rank:2,
                continent:"Europe"
            },
            {
                countryName:"France",
                countryGDP:2.783,
                rank:3,
                continent:"Europe"
            },
            {
                countryName:"Italy",
                countryGDP:2.010,
                rank:4,
                continent:"Europe"
            },
            {
                countryName:"Spain",
                countryGDP:1.398,
                rank:5,
                continent:"Europe"
            }
        ]
    },
    {
        continentName:"North America",
        countriesInContinent:[
            {
                countryName:"USA",
                countryGDP:25.463,
                rank:1,
                continent:"North America"
            },
            {
                countryName:"Canada",
                countryGDP:2.140,
                rank:2,
                continent:"North America"
            },
            {
                countryName:"Mexico",
                countryGDP:1.414,
                rank:3,
                continent:"North America"
            },
            {
                countryName:"Dominican Republic",
                countryGDP:0.114,
                rank:4,
                continent:"North America"
            },
            {
                countryName:"Guatemala",
                countryGDP:0.095,
                rank:5,
                continent:"North America"
            }
        ]
    },
    {
        continentName:"South America",
        countriesInContinent:[
            {
                countryName:"Brazil",
                countryGDP:1.920,
                rank:1,
                continent:"South America"
            },
            {
                countryName:"Argentina",
                countryGDP:0.633,
                rank:2,
                continent:"South America"
            },
            {
                countryName:"Colombia",
                countryGDP:0.344,
                rank:3,
                continent:"South America"
            },
            {
                countryName:"Chile",
                countryGDP:0.301,
                rank:4,
                continent:"South America"
            },
            {
                countryName:"Peru",
                countryGDP:0.243,
                rank:5,
                continent:"South America"
            },
        ]
    },
    {
        continentName:"Oceania",
        countriesInContinent:[
            {
                countryName:"Australia",
                countryGDP:1.675,
                rank:1,
                continent:"Oceania"
            },
            {
                countryName:"New Zealand",
                countryGDP:0.247,
                rank:2,
                continent:"Oceania"
            },
            {
                countryName:"Papua New Guinea",
                countryGDP:0.030,
                rank:3,
                continent:"Oceania"
            },
            {
                countryName:"Fiji",
                countryGDP:0.004,
                rank:4,
                continent:"Oceania"
            },
            {
                countryName:"Solomon Islands",
                countryGDP:0.001,
                rank:5,
                continent:"Oceania"
            },
        ]
    }
]


export {AllCountriesByGDP,CountriesByContinent}
