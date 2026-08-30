import { StyleSheet } from "react-native";
import AppColors from "../theme/colors";

const defaultScreenStyle=StyleSheet.create({
    safeArea:{
        flex:1,
          backgroundColor:AppColors.WHITE,
    },
    container:{
        flex:1,
        backgroundColor:AppColors.WHITE,
        paddingHorizontal:10
    }
})

export default defaultScreenStyle