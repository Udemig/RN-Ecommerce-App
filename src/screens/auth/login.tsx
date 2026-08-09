//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import { windowHeight, windowWidth } from '../../utils/constants';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import AppColors from '../../theme/colors';
import AppRoutes from '../../utils/routes';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slice/authSlice';

// create a component
const Login: React.FC = ({ navigation, route }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     const dispatch:AppDispatch=useDispatch()
    const handleLogin=()=>{
        const userValues={
            email,password
        }
        if(email && password)
            dispatch(login(userValues))
        else
            Alert.alert("Lütfen tüm alanları doldurunuz")

    }
    return (
        <View style={defaultScreenStyle.container}>
            <ScrollView contentContainerStyle={{
                marginBottom: 30
            }}>
                <Image
                    style={styles.image}
                    source={require("../../assets/images/login.jpg")}
                />
                <Input onChangeText={(value) => setEmail(value)} value={email} label="E-Posta" placeholder="E-posta adresinizi giriniz " />
                <Input onChangeText={(value) => setPassword(value)} value={password} label="Şifre" placeholder="Şifrenizi giriniz " />
                <View style={{
                    marginTop: 30
                }}>
                    <Button onPress={handleLogin} type="fullFiled" title="Giriş Yap" />
                    <Text style={{
                        marginVertical: 20,
                        textAlign: "center",
                        fontSize: 16,
                        color: AppColors.GRAY
                    }}>Henüz hesabınızı oluşturmadınız mı?</Text>
                    <Button
                        onPress={() => navigation.navigate(AppRoutes.REGISTER)}
                        type="linear" title="Kayıt Ol" />
                </View>
            </ScrollView>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: windowWidth,
        height: windowHeight * 0.35
    }
});

//make this component available to the app
export default Login;
