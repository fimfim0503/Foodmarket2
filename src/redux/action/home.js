import Axios from "axios";
import { API_HOST } from "../../config/API";



export const getFooddata = () => (dispacth) => {
    Axios.get(`${API_HOST.url}/food`)
    .then(res => {
        //console.log('res : ', res.data.data.data);
        dispacth({type:'SET_FOOD', value: res.data.data.data })
    })
    .catch(err => {
        console.log('err : ', err);
    })
}