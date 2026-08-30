//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import { windowHeight, windowWidth } from '../../utils/constants';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import AppColors from '../../theme/colors';
import AppRoutes from '../../utils/routes';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/slice/authSlice';
import {
    Formik,
} from 'formik';
import { RegisterSchema } from '../../utils/formSchemas';
import { registerUser } from '../../store/actions/authActions';
// create a component
const Register: React.FC = ({ navigation, route }) => {
    const dispatch: AppDispatch = useDispatch()
    const { pendingRegister } = useSelector((state: RootState) => state.auth)
    const handleRegister = () => {

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
                <Formik
                    initialValues={{
                        "name": "",
                        "email": "",
                        "password": "",
                        "rePassword": "",
                        "phone": null

                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={values => dispatch(registerUser(values))}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>
                            <Input
                                error={errors.name}
                                onChangeText={handleChange("name")}
                                value={values.name}
                                label="Ad ve Soyadı"
                                placeholder="Adınızı ve soyadınızı giriniz "
                            />
                            <Input
                                error={errors.email}
                                onChangeText={handleChange("email")}
                                value={values.email}
                                label="E-Posta"
                                placeholder="E-posta adresinizi giriniz "
                            />
                            <Input
                                error={errors.password}
                                onChangeText={handleChange("password")}
                                value={values.password}
                                label="Şifre" placeholder="Şifrenizi giriniz "
                            />
                               <Input
                                error={errors.rePassword}
                                onChangeText={handleChange("rePassword")}
                                value={values.rePassword}
                                label="Şifre Tekrar" placeholder="Şifrenizi giriniz "
                            />
                               <Input
                                error={errors.phone}
                                onChangeText={handleChange("phone")}
                                value={values.phone}
                                label="Telefon Numarası" placeholder="Telefon numarabnızı giriniz "
                            />
                            <View style={{
                                marginTop: 30
                            }}>
                                <Button
                                    disabled={pendingRegister}
                                    onPress={handleSubmit}
                                    type="fullFiled" title="Kayıt Ol" />
                            </View>
                        </View>
                    )}
                </Formik>

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
