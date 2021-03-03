import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header, TextInput, Gap, Button, Select} from '../../components';

const SingUpAddress = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Address" subTitle="Make Sure It's Valid" onBack={()=>{}} />
           
           
            <View style={styles.container} >
                
                <TextInput label="Phone Number" placeholder="Phone Number"/>
                <Gap height={16} />
                <TextInput label="Address" placeholder="address"/>
                <Gap height={16} />
                <TextInput label="House Number" placeholder="House Number"/>
                <Gap height={16} />
                <Select label="City" />
                <Gap height={24} />
                <Button text="Sign Up Now" onPress={() => navigation.replace('SuccessSignUp')} />
                
            </View>
        </View>
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
