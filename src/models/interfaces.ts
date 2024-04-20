export interface AllCountriesType 
{
    countryName:string 
    countryGDP:number
    rank:number
    continent:string
}

export interface ContinentCountryType
{
    countryName:string 
    countryGDP:number
    rank:number
    continent:string
}

export interface CountriesByContinentType 
{
    continentName:string
    countriesInContinent:ContinentCountryType[]
}

