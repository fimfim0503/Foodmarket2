import Axios from 'axios';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { useForm } from '../../Utils';
import { showMessage, hideMessage } from "react-native-flash-message";

const SingUpAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber:'',
        address:'',
        houseNumber:'',
        city:'Bandung',
    })

    const dispatch=useDispatch();
    const registerReducer=useSelector(state=>state.registerReducer)

   const onSubmit = () => {
        console.log('form: ', form);
        const data = {
            ...form,
            ...registerReducer
        }
        console.log('data Register : ', data)
        dispatch({type: 'SET_LOADING', value:true})
        Axios.post('http://10.0.2.2/foodmarket4/public/api/register', data)
        .then((res)=>{
            console.log('data succes :',res.data);
            dispatch({type: 'SET_LOADING', value:false})
            showMessage('Register success', 'success')
            navigation.replace('SuccessSignUp');
        })
        .catch((err)=> {
            console.log('Sign Up error : ', err.response.data.message);
            dispatch({type: 'SET_LOADING', value:false})
            showToast("Something wrong");
        })
    }

    const showToast = (message, type)=>{
        showMessage({
            message : message,
            type: type === 'success' ? 'success' : 'danger' ,
            backgroundColor : type === 'success' ? '#1ABC9c' : '#d9435e'
          });
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}} >

        <View style={styles.page}>
            <Header title="Address" subTitle="Make Sure It's Valid" onBack={()=>{}} />
           
           
            <View style={styles.container} >
                
                <TextInput 
                label="Phone Number" 
                placeholder="Phone Number"
                value={form.phoneNumber}
                onChangeText={(value)=> setForm('phoneNumber', value)}
                />

                <Gap height={16} />

                <TextInput 
                label="Address" 
                placeholder="address"
                value={form.address}
                onChangeText={(value)=> setForm('address', value)}
                />

                <Gap height={16} />

                <TextInput 
                label="House Number" 
                placeholder="House Number"
                value={form.houseNumber}
                onChangeText={(value)=> setForm('houseNumber', value)}
                />

                <Gap height={16} />

                <Select 
                label="City" 
                value={form.city}
                onSelectChange={(value)=> setForm('city', value)}
                />

                <Gap height={24} />

                <Button text="Sign Up Now" onPress={onSubmit} />
                
            </View>
        </View>
        </ScrollView>
    )
}

export default SingUpAddress

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:24,
        paddingVertical:26,
        marginTop:24,
        flex:1
    },
    page:{
        flex:1
    },
    
})
