//import liraries
import { ArrowRight, ArrowRight2 } from 'iconsax-react-nativejs';
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import AppColors from '../../theme/colors';

// create a component
const MenuItem:React.FC = ({item}) => {
    console.log(item)
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                {item.icon}
            </View>
           <View style={{flex:1}}>
             <Text style={styles.title}>{item.title}</Text>
           </View>
           <View>
            <ArrowRight2 size={27}/>
           </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        padding:10,
        backgroundColor:AppColors.SOFTGRAY,
        marginVertical:10,
        alignItems:"center",
        borderRadius:10,
        paddingVertical:15
    },
    title:{
        fontWeight:"500",
        fontSize:18,
        marginLeft:10
    }
});

//make this component available to the app
export default MenuItem;
