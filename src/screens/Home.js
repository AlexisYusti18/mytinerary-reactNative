// import { useEffect } from "react"
// import {useDispatch, useSelector} from 'react-redux';
// import citiesActions from '../../redux/actions/citiesActions'
// import { Image, Text, View,TouchableOpacity, Button } from 'react-native';
// import { useParams } from "react-router-dom";


// export default function Home(){
//     const {id}= useParams()
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         dispatch(citiesActions.getOneCity(id))
//         //eslint-disable-next-line
//     },[])
//     const cities=useSelector(store=> store.citiesReducer.oneCity)
//     console.log(cities)

//     return(
//         <>
            
//         </>
//     )
// }