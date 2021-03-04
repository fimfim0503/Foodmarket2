import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, ProfileDummy} from '../../assets'
import {FoodCard, Gap} from '../../components'


const Home = () => {
    return (
        <View>
            <View style={styles.profileContainer} >
                <View>
                    <Text style={styles.Appname} >Food Market</Text>
                    <Text style={styles.dec} >Let's get some foods </Text>
                </View>
                <Image source={ProfileDummy} styles={styles.profile} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <View style={styles.FoodCardContainer} >
                <Gap width={24} />
               <FoodCard image={FoodDummy1}  />
               <FoodCard image={FoodDummy2}  />
               <FoodCard image={FoodDummy3}  />
               <FoodCard image={FoodDummy4}  />
               <Gap width={24} />
            </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    profile:{
        width:50,
        height:50,
        borderRadius:8
    },
    profileContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:24,
        paddingTop:32,
        paddingBottom:24,
        backgroundColor:'white'
    },
    Appname:{
        fontSize:22,
        fontFamily:'Poppins-Medium', 
        color:'#020202'
    },
    dec:{
        fontSize:14,
        fontFamily:'Poppins-Light',
        color: '#8d92A3'
    },
    FoodCardContainer:{
        flexDirection:'row',
        marginVertical:12
    }
})
