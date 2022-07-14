import { View } from "react-native"
import citiesActions from "../redux/actions/citiesActions"
import {useDispatch, useSelector} from 'react-redux';

export default function Tinerary(props){
    console.log(props)
    const {id}= props.route.params

    const dispatch= useDispatch()
    const [reload,setReload]=useState(false)
    
    useEffect(()=>{
        dispatch(citiesActions.getOneCity(id))
        //eslint-disable-next-line
    },[reload])
    const city=useSelector(store=> store.citiesReducer.oneCity)
    // console.log(city)
    
    return(
        <View>

        </View>
    )
}