import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthType } from "../../AllTypes/AuthInterface";




const LoadUserFromLocalStorage = (): AuthType => {
  try {
    const localRole = localStorage.getItem("role");
    const sessionRole = sessionStorage.getItem("role");
    const role = localRole || sessionRole || null;

    return {
      role,
      isAuthenticated: !!role,
      error: null,
    };
  } catch (error) {
    console.error("Error loading user from local storage:", error);
    return {
      role: null,
      isAuthenticated: false,
      error: null,
    };
  }
};


const initialState:AuthType= LoadUserFromLocalStorage() ;

const AuthSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<{role:string; rememberMe?:boolean}>)=>{
            const {role, rememberMe} = action.payload;
            state.role=role;
            state.isAuthenticated=true;
            state.error=null;
            if(rememberMe){
                localStorage.setItem("role", role);
            }else{
                sessionStorage.setItem("role", role);
            }
        },
        logout:(state)=>{
            state.role=null;
            state.isAuthenticated=false;
            state.error=null;
            localStorage.removeItem("role");
            sessionStorage.removeItem("role");
        },
        setError:(state, action:PayloadAction<string>)=>{
            state.error=action.payload;
        }
    }
});
export const {login,logout,setError}=AuthSlice.actions;
export default AuthSlice.reducer;