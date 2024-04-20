import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllCountriesByGDP, CountriesByContinent } from "../static/data";
import { AllCountriesType, ContinentCountryType,CountriesByContinentType} from "../models/interfaces";




interface InitialState {
    allCountriesByGDP: AllCountriesType[];
    countriesByContinentGDP: CountriesByContinentType[],
}



let initialState: InitialState = {
    allCountriesByGDP: AllCountriesByGDP,
    countriesByContinentGDP:CountriesByContinent,
    
}


const CountriesSlice = createSlice({
    name: "countriesGDP",
    initialState,
    reducers: {
        toggleRanking: (state, action: PayloadAction<boolean>):void => {
            let list=[...state.allCountriesByGDP]
            let updatedList:AllCountriesType[]=[]
            if(action.payload)
            {
                updatedList=list.sort((a,b)=>
                {
                    return a.countryGDP-b.countryGDP
                })
            }
            else 
            {
                updatedList=list.sort((a,b)=>
                {
                    return b.countryGDP-a.countryGDP
                })
            }
            state.allCountriesByGDP=updatedList
        },
        getActiveContinent:(state,action:PayloadAction<number>):void=>
        {
            let activeIndex=action.payload;

        }
    },
    extraReducers: (builder) => {
        // Extra reducers logic here
    },
});

export const { toggleRanking } = CountriesSlice.actions;
export default CountriesSlice.reducer;


