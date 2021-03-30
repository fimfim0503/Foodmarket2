import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStarOn, IcStarOff } from '../../../assets'

const Rating = ({number}) => {
    const renderStar = () => {
        let star =[];
        for (let i=1; i<=5; i++){
            if(1 <= number ) {
                star.push(<IcStarOn/>);
            }else{
                star.push(<IcStarOff/>)
            }
        }
        return star;
    }
    return (
        <View style={styles.ratingcontainer}>
                <View style={styles.starcontainer}>
                    {renderStar()}
                </View>
                <Text>{number}</Text>
            </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    starcontainer:{
        flexDirection:'row',
        alignItems:'center',
    },

    ratingcontainer:{
        flexDirection:'row',
        marginRight:4,
        
    },
})
