const initialState={
    cities: [],
    filterCities:[],
    oneCity:[]
} 

const citiesReducer=( state=initialState, action)=>{
    //console.log(state);
    switch (action.type){
        case "GET_CITIES":
        return{
            ...state,
            cities: action.payload,
            filterCities: action.payload
        }
        case "ONE_CITY":
        //console.log(action.payload);    
        return{
                ...state,
                oneCity:action.payload
            }
        case "FILTER_CITIES":
            return{
                ...state,
                filterCities: state.cities.filter(city=>city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            }
        default: return state
    }
}
export default citiesReducer