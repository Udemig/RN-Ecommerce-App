import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { registerUser } from "../actions/authActions";
import { AuthState } from "../../model/data/authState";

const initialState:AuthState = {
    isLogin: false,
    visible: false,
    accounts: [],
    logOutModalVisible: false,
    pendingRegister: false,
    error:null,
    registerModalVisible:false,
    registerStatus:null
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        closeModal: (state) => {
            state.visible = false,
            state.registerModalVisible=false
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

    },
    extraReducers(builder) {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.pendingRegister = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.pendingRegister = false,
                state.registerStatus=true,
                  state.registerModalVisible=true
            }).
            addCase(registerUser.rejected, (state, action) => {
                state.pendingRegister = false
                state.error=action.payload,
                state.registerModalVisible=true,
                state.registerStatus=false
            })
    },
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