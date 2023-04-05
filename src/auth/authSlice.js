import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    status: "",
    imageUrl:"",
    error: "",
    role:"" ,
    name:"" ,
    email:""
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
            state.user = action.payload.user;
            state.name = action.payload.user.fullName ;
            state.imageUrl = action.payload.imageUrl;
            state.status = "Success";
            state.role = action.payload.user.userRole;
            state.email = action.payload.user.email;
            console.log(state.name)
            localStorage.setItem('token',action.payload.token) ;
            

        });
        builder.addCase(logIn.rejected,(state,action)=>{
            state.error = action.error.message;
        })
    }
});
export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;