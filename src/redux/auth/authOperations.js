import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi, setToken, unSetToken } from "../../axiosConfig/authApi";

export const registerThunk = createAsyncThunk("register", async (credentials, thunkApi) => {
try {
        const { data } = await authApi.post("users/signup", credentials) 
        setToken(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk("login", async (credentials, thunkApi) => {
    try {
        const { data } = await authApi.post("users/login", credentials)  
        setToken(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
    try {
        await authApi.post("users/logout")  
        unSetToken()
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})