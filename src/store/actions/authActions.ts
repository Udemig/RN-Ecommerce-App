import { createAsyncThunk } from "@reduxjs/toolkit"
import { postRequest } from "../../service/verb"
import { AUTH_URLS } from "../../service/urls"
import { loginParams, registerParams } from "../../model/api/authParams"
import { AxiosError, AxiosResponse } from "axios"
import { ErrorsMessages } from "../../utils/constants"

const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (payload: registerParams, { rejectWithValue }) => {

        try {
            const response: AxiosResponse = await postRequest(AUTH_URLS.SIGN_UP_URL, payload)
            console.log("cevap", response)
            return response.data
        } catch (error: any) {
            // if (error.response.status == 500)
            //     return rejectWithValue(ErrorsMessages.SERVER_ERROR)
            // else if (error.response.status == 409)
            //     return rejectWithValue(ErrorsMessages.ACCOUNTS_ALREADY_EXIST)
            // else if (error.response.status == 400)
            //     return rejectWithValue(ErrorsMessages.PHONE_FORMAT_ERROR)
            if (!!error.response.data.errors) {
                return rejectWithValue(error.response.data.errors.msg)

            }
            else {
                return rejectWithValue(error.response.data.message)
            }

        }
    }
)
const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (payload: loginParams, { rejectWithValue }) => {

        try {
            const response: AxiosResponse = await postRequest(AUTH_URLS.LOGIN_URL, payload)
            console.log("cevap", response)
            return response.data
        } catch (error: any) {
            if (!!error.response.data.errors) {
                return rejectWithValue(error.response.data.errors.msg)

            }
            else {
                return rejectWithValue(error.response.data.message)
            }

        }
    }
)
export { registerUser, loginUser }