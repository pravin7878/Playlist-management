import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    videoId : ""
}

const utilitySlice = createSlice({
    name : "utility",
    initialState,
    reducers : {
        setVideoId : (state,action)=>{
            state.videoId = action.payload
        }
    }
})

export default utilitySlice.reducer
export const {setVideoId} = utilitySlice.actions