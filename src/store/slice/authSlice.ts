import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
    isLogin: false,
    visible: false,
    accounts: [],
    logOutModalVisible: false
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        closeModal: (state) => {
            state.visible = false
        },
        openModal: (state) => {
            state.visible = true
        },
        closeLogOutModal: (state) => {
            state.logOutModalVisible = false
        },
        openLoOutModal: (state) => {
            state.logOutModalVisible = true
        },
        register: (state, action) => {
            state.accounts.push(action.payload)
        },
        login: (state, action) => {
            const user = state.accounts.find((item) => item.email == action.payload.email && item.password == action.payload.password)
            if (user)
                state.isLogin = true
            else
                Alert.alert("Kullanıcı bilgileri hatatalı")
        },
        logOut: (state) => {
            state.isLogin = false
        }

    }
})
export const {
    closeModal,
    openModal,
    register,
    login,
    closeLogOutModal,
    openLoOutModal,
    logOut } = authSlice.actions
export default authSlice.reducer