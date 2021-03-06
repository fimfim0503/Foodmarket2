import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../components';

const OrderSummary = () => {
    return (
        <View>
            <Header
            title="Payment"
            subTitle="You Deserve better meal"
            onBack={()=>{}}
            />
            <View style={styles.content}>
                <Text style={styles.label} >Item Ordered</Text>
                <ItemListFood 
                    image={FoodDummy1} 
                    items={14}
                    />
                <Text style={styles.label} >Detail Transaction </Text>
                <ItemValue label="Chery Healty" value="IDR 18.000.000"/>
                <ItemValue label="driver" value="IDR 50.000"/>
                <ItemValue label="tax 10%" value="IDR 1.000.000"/>
                <ItemValue label="Total Price" value="IDR 28.000.000"/>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}  >Deliver To :</Text>
                <ItemValue label="Name" value="Desy Nurbany"/>
                <ItemValue label="Phone No" value="09485498544"/>
                <ItemValue label="Address" value="Karang Anyar "/>
                <ItemValue label="House No." value="A2"/>
                <ItemValue label="City" value="Bandung"/>
                
            </View>
            <View style={styles.button}>
                <Button text="Check OUt Now"/>
            </View>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    content:{
        backgroundColor:'white',
        paddingHorizontal:24,
        paddingVertical:16,
        marginTop:24
    }, 
    label :{
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:'#020202',
        marginBottom: 8
    },
    button:{
        paddingHorizontal:24,
        marginTop:24
    }
})
