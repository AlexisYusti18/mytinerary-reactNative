import axios from 'axios';
const url="https://mytinerary-yusti.herokuapp.com"

const citiesActions={

    getAllCities:()=>{
        return async ( dispatch, getState)=>{
            const response = await axios.get(`${url}/api/cities`)
            // console.log(response)
            dispatch({ type:"GET_CITIES", payload: response.data.response.cities})
            // console.log('holaaaaaaa')
        }
    },
    getOneCity:(id)=>{
        return async (dispatch, getState)=>{
            const response= await axios.get(`${url}/api/cities/${id}`)
            // console.log(response)
            dispatch({type:"ONE_CITY", payload: response.data.response})
        }
    },
   
    filterCities:(value)=>{
        return(dispatch, getState)=>{
            dispatch({type:"FILTER_CITIES", payload:value})
        }
    },
     likeAndDislike:(id)=>{
        //console.log(id)
        const token= localStorage.getItem('token')
        //console.log(token);
        return async()=>{
            try{
                let res= await axios.put(`${url}/api/likes/${id}`, {},
                {
                    headers:{
                        'Authorization':'Bearer '+token
                    }
                })
                //console.log(res)
                return res

            }catch(error){
                console.log(error)
            }
        }
    },
}
export default citiesActions

// import axios from 'axios';
// const url="https://mytinerary-yusti.herokuapp.com"

// const citiesActions={

//     getAllCities:()=>{
//         return async ( dispatch, getState)=>{
//             const res = await axios.get('https://mytinerary-yusti.herokuapp.com/api/cities')
//             dispatch({ type:"GET_CITIES", payload: res.data})
//             // console.log('todas las ciudades')
//             console.log(res.data)
//         }
//     },
//     getOneCity:(id)=>{
//         return async (dispatch, getState)=>{
//             const response= await axios.get(`${url}/api/cities/${id}`)
//             // console.log(response.data.response)
//             dispatch({type:"ONE_CITY", payload: response.data.response})
//         }
//     },
   
//     filterCities:(value)=>{
//         return(dispatch, getState)=>{
//             dispatch({type:"FILTER_CITIES", payload:value})
//         }
//     },
//      likeAndDislike:(id)=>{
//         //console.log(id)
//         const token= localStorage.getItem('token')
//         //console.log(token);
//         return async()=>{
//             try{
//                 let res= await axios.put(`${url}/api/likes/${id}`, {},
//                 {
//                     headers:{
//                         'Authorization':'Bearer '+token
//                     }
//                 })
//                 //console.log(res)
//                 return res

//             }catch(error){
//                 console.log(error)
//             }
//         }
//     },
// }
// export default citiesActions