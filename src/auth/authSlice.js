import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    token: "",
    status: "",
    imageUrl:"",
    error: ""
}

export const signIn = createAsyncThunk("auth/signIn", async({fullName,email,password})=>{
    axios.post("https://localhost:7195/api/Accounts/RegisterUser",{fullName,email,password}).then(response=>
        response.data
    );
});

export const logIn = createAsyncThunk("auth/logIn", async(data)=>{
    var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://localhost:7195/api/Accounts/Login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
    const res = await axios(config);
    return res.data;
});


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser: (state,action)=>{
            state.user = action.payload;
        },
        clearUser: state=>{
            state.user = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(logIn.pending, state=>{
            state.status = "Loading"
        });
        builder.addCase(logIn.fulfilled,(state,action)=>{
            debugger;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.imageUrl = action.payload.imageUrl;
            state.status = "Success";
        });
        builder.addCase(logIn.rejected,(state,action)=>{
            state.error = action.error.message;
        })
    }
});
export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;