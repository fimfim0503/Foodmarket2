import Axios from 'axios';
import { showMessage } from '../../Utils';
import { setLoading } from './global';

const API_HOST = {
    url : 'http://10.0.2.2/foodbackend/public/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res)=>{
        console.log('data succes :',res.data);
        if(photoReducer.isUploadPhoto){

            const photoForUpload = new FormData();
            photoForUpload.append('file', photoReducer);
            Axios.post(
                `${API_HOST.url}/user/photo`, 
            photoForUpload,
            {
                headers:{
                    'Authorization' : `${res.data.data.token_type} ${res.data.data.access_token}`,
                    'Content-Type' : 'multipart/form-date'
                }
            })
            .then(resUpload => {
                console.log('Succes Upload : ', resUpload)
            })
            .catch(err => {
                console.log('Gagal upload : ', err.response)
                showMessage('Upload photo gagal')

            })
        }
        dispatch(setLoading(false))
        showMessage('Register Success : ', )
        navigation.replace('SuccessSignUp');
    })
    .catch((err)=> {
        console.log('Sign Up error : ', err.response.data.data.message);
        dispatch(setLoading(false))
        showMessage(err?.response?.data?.data?.message)
    })
}