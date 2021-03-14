import Axios from 'axios';
import { showMessage, storeData } from '../../Utils';
import { setLoading } from './global';

const API_HOST = {
    url : 'http://10.0.2.2/foodbackend/public/api'
    // url : 'http://localhost:8000/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res)=>{
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        
        storeData('token', {value: token })

        if(photoReducer.isUploadPhoto){

            const photoForUpload = new FormData();
            photoForUpload.append('file', photoReducer);
            Axios.post(
                `${API_HOST.url}/user/photo`, 
            photoForUpload,
            {
                headers:{
                    'Authorization' : token,
                    'Content-Type' : 'multipart/form-date'
                },
            })
            .then(resUpload => {
                 profile.profile_photo_url = `http://localhost/foodbackend/storage/app/public/${resUpload.data.data[0]}`
                storeData('userProfile', profile);
                navigation.reset({index:0, routes : [{name: 'SuccessSignUp'}]});
            })
            .catch((err )=> {  
                showMessage('Upload photo gagal');
                navigation.reset({index:0, routes : [{name: 'SuccessSignUp'}]});
            });
        } else {
            storeData('userProfile', profile);
            navigation.reset({index:0, routes : [{name: 'SuccessSignUp'}]});
        }
        dispatch(setLoading(false))
    })
    .catch((err)=> {
        console.log('Sign Up error : ', err.response.data.data.message);
        dispatch(setLoading(false))
        showMessage(err?.response?.data?.data?.message)
    })
}