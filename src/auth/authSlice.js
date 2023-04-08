import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  status: "",
  error: "",
  success: "",
};

export const signUpDoner = createAsyncThunk("auth/signUpDoner", async (data) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://localhost:7195/api/Accounts/RegisterDoner",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const res = await axios(config);
  return res.data;
});

export const signUpDonee = createAsyncThunk("auth/signUpDonee", async (data) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://localhost:7195/api/Accounts/RegisterDonee",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const res = await axios(config);
  return res.data;
});

export const logIn = createAsyncThunk("auth/logIn", async (data) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://localhost:7195/api/Accounts/Login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  debugger;
  const res = await axios(config);
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.status = "";
      state.error = "";
      state.success = "";
    },
  },
  extraReducers: (builder) => {
    //____________________login______________________________
    builder.addCase(logIn.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      debugger;
      if (action.payload.error) {
        state.error = action.payload.error;
        console.log(action.payload.error);
        alert(action.payload.error);
      } else {
        state.user = action.payload.user;
        state.status = "Success";
        localStorage.setItem("token", action.payload.token);
      }
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.error.message;
    });

    //  ________________________signUpDoner_________________________
    builder.addCase(signUpDoner.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(signUpDoner.fulfilled, (state, action) => {
      debugger;
      if (action.payload.error) {
        state.error = action.payload.error;
      }
      state.success = action.payload.success;
    });
    builder.addCase(signUpDoner.rejected, (state, action) => {
      state.error = action.error.message;
    });

    //  ________________________signUpDoner_________________________
    builder.addCase(signUpDonee.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(signUpDonee.fulfilled, (state, action) => {
      debugger;
      if (action.payload.error) {
        state.error = action.payload.error;
      }
      state.success = action.payload.success;
    });
    builder.addCase(signUpDonee.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
