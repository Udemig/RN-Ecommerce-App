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
import { register } from '../../store/slice/authSlice';

// create a component
const Register: React.FC = ({ navigation, route }) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch:AppDispatch=useDispatch()
    const handleRegister=()=>{
        const userValues={
            name,
            surname,
            email,
            password
        }
        console.log(userValues)
        if(name &&surname &&email &&password )
     {
               dispatch(register(userValues))
              Alert.alert('Kayıt Olma', 'Kayıt başarılı', [
      {
        text: 'Giriş Yap',
        onPress: () => navigation.navigate(AppRoutes.LOGIN
        ),
      },
      {
        text: 'Vazgeç',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
     }
        else
            Alert.alert("Lütfen tüm bilgileri doldurunuz")
    }
    return (
        <View style={defaultScreenStyle.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom: 100
            }}>
                <Image
                    style={styles.image}
                    source={require("../../assets/images/login.jpg")}
                />
                <Input onChangeText={(value)=>setName(value)} value={name} label="Ad" placeholder="Adınızı giriniz " />
                <Input onChangeText={(value)=>setSurname(value)} value={surname} label="Soyad" placeholder="Soyadınızı giriniz " />
                <Input onChangeText={(value)=>setEmail(value)} value={email} label="E-Posta" placeholder="E-posta adresinizi giriniz " />
                <Input onChangeText={(value)=>setPassword(value)} value={password} label="Şifre" placeholder="Şifrenizi giriniz " />
                <View style={{
                    marginTop: 30
                }}>
                    <Button
                    onPress={handleRegister}
                    type="fullFiled" title="Kayıt Ol" />
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
export default Register;
