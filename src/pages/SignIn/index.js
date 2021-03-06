import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Button, Gap } from '../../components'

const SignIn = ({navigation}) => {
    const [email, setEmail] =useState('');
    const [Password, setPassword] =useState('');

    const onSubmit =()=> {
        console.log('email', email);
        console.log('password', Password);
    }
    return (
        <View style={styles.page} >
            <Header title="Sign in" subTitle="Find Your best evel meal" />
            <View style={styles.container} >
                <TextInput 
                label="Email Address" 
                placeholder="Type your email address"
                value={email}
                onChangeText={(value)=>setEmail(value)}
                
                />
                <Gap height={16} />
                <TextInput 
                label="Password" 
                placeholder="Type Your Password"
                value={Password}
                onChangeText={(value)=>setPassword(value)}
                secureTextEntry
                />
                <Gap height={24} />
                <Button text="Sign In" onPress={onSubmit} />
                <Gap height={12} />
                <Button  text="Create New Accunt" color='#8D92A3' textColor='white' onPress={()=> navigation.navigate('SignUp')} />
            </View>
           
        </View>
    )
}

export default SignIn

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
