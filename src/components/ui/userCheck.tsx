//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import Button from './button';
import AppColors from '../../theme/colors';
import { Login } from 'iconsax-react-nativejs';
import AppRoutes from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';
// create a component
const UserCheck:React.FC = ({description}) => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <Login size={120} variant='Bold' color={AppColors.PRIMARY} style={{alignSelf:"center"}}/>
            <Text style={styles.description}>{description}</Text>
            <Button
            onPress={()=>navigation.navigate(AppRoutes.LOGIN)}
            title="Giriş Yap" type="fullFiled"/>
            <Button
            onPress={()=>navigation.navigate(AppRoutes.REGISTER)}
            title="Kayıt Ol" type="linear"/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
justifyContent:"center",
paddingHorizontal:15,
backgroundColor:AppColors.WHITE
    },
    description:{
        fontSize:18,
        textAlign:"center",
        marginVertical:25
    }
});

//make this component available to the app
export default UserCheck;
