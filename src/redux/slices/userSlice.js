import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Account } from "appwrite";
import client from "../../Authentication/client";

const initState = {
  auth: {
    isLogin: false,
    user: null,
    token : ""
  },
  isLoading: false,
  isError: false,
};

const account = new Account(client);

export const checkUser = createAsyncThunk("CHACK_USER", async () => {
  try {
    const userAccount = await account?.get();
    return userAccount;
  } catch (error) {
    console.error("No session found:", error);
  }
});

export const getAccessToken = 
createAsyncThunk("GET_TOKEN", async () => {
  try {
    const session = await account.getSession("current");
    return session.providerAccessToken; 
  } catch (error) {
    console.error("Failed to retrieve session:", error);
  }
}) 


const userSlice = createSlice({
  name: "youtube",
  initialState: initState,
  reducers: {
    getUser: (state, action) => {
      state.auth.user = action.payload
       state.auth.isLogin = true
    },
    removeUser: (state, action) => {
        state.auth.isLogin = false
        state.auth.user = null
    },
  },
  // extraReducers: (bulder) => {
  //   bulder.addCase(checkUser.fulfilled, (state, action) => {
  //     if (action.payload) {
  //       state.auth.user = action.payload;
  //       state.auth.isLogin = true;
  //     }
  //   });

  //   bulder.addCase(checkUser.rejected, (state, action) => {
  //     state.auth.user = null;
  //     state.auth.isLogin = false;
  //   });

  //   bulder.addCase(getAccessToken.fulfilled , (state,action)=>{
  //       state.auth.token = action.payload
  //   })
  // },
});

export default userSlice.reducer;
export const { getUser, removeUser } = userSlice.actions;
