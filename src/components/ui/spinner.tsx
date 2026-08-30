import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import AppColors from '../../theme/colors'

const Spinner:React.FC= () => {
  return (
    <View style={style.container}>
     <ActivityIndicator size={"large"} color={AppColors.GRAY}/>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppColors.WHITE,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Spinner