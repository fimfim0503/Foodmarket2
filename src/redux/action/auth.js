import Axios from 'axios';
import { showMessage, storeData } from '../../Utils';
import { setLoading } from './global';
const API_HOST = {
    url : 'http://10.0.2.2/foodmarket4/public/api'
}

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
        .then((res)=>{
            console.log('data succes :',res.data);
           
            const token = '${res.data.data.token_type} ${res.data.data.access_token}'
            const profile = res.data.data.user

            storeData('userProfile', profile)
            storeData('token', {value:token})

                if ( photoReducer.isUploadPhoto){

                    const photoForUpload = new FormData();
                    photoForUpload.append('file', photoReducer );
                    Axios.post('${API_HOST.url}/user/photo', 
                    photoForUpload, 
                    {
                        headers:{
                            'Authorization' :`${res.data.data.token_type} ${res.data.data.access_token} `, 
                            'Content-Type' : 'multipart/form-data',
                        },
                    })
                    
                    .catch((err) =>{
                        console.log('error upload : ', err);
                        showMessage('Upload photo tidak berhasil');
                        
                    });
                    console.log('Ngambil data : ', `${res.data.data.token_type} ${res.data.data.access_token} ` )
                }
            dispatch(setLoading(false));
            
            navigation.replace('SuccessSignUp');
        })
        .catch((err)=> {
            console.log('Sign Up error : ', err.response.data.message);
            dispatch(setLoading(false));
            showMessage("Something wrong");
        })
}