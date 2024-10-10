import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchYouTubePlaylists = createAsyncThunk(
//   "playlists/fetch",
//   async (_, { rejectWithValue }) => {
//     try {
//       // Get the current session from Appwrite
//       const session = await account.getSession("current");
// console.log(session);

//       // Access the Google OAuth token from Appwrite's session
//       const accessToken = session.providerAccessToken;
// console.log(accessToken);

//       // Make the API request to fetch YouTube playlists
//       const response = await axios.get(
//         "https://www.googleapis.com/youtube/v3/playlists",
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//           params: {
//             part: "snippet,contentDetails",
//             mine: true,
//             maxResults: 25,
//           },
//         }
//       );

//       // Return the playlist data
//       console.log("get");

//       console.log(response);

//       return response.data.items;
//     } catch (error) {
//       // Handle any errors during the API call
//       console.log("reject");

//       console.log(error);

//       return rejectWithValue(error.message);
//     }
//   }
// );

const url = "https://youtube.googleapis.com/youtube/v3";
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchYouTubePlaylists = createAsyncThunk(
  "fatch/palylsit",
  async () => {
    console.log("called");

    try {
      const res = await axios.get(`${url}/playlists`, {
        params: {
          part: "snippet,contentDetails",
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          maxResults: 10,
          key: apiKey,
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchPlaylistItem = createAsyncThunk(
  "fetch/item",
  async ({playlistId,title}) => {
    try {
      const res = await axios.get(`${url}/playlistItems`, {
        params: {
          part: "snippet,contentDetails",
          playlistId,
          maxResults: 10,
          key: apiKey,
        },
      });
      return {data : res?.data,title}

    } catch (error) {
      console.log(error);
      return error
    }
  }
);

const initialState = {
  playlists: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    result: [],
  },
  playlistItem: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    result: [],
    title : ""
  },
};

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYouTubePlaylists.pending, (state) => {
        state.playlists.isLoading = true;
        state.playlists.isError = false;
      })
      .addCase(fetchYouTubePlaylists.fulfilled, (state, action) => {
        state.playlists.isLoading = false;
        state.playlists.result = action.payload;
      })
      .addCase(fetchYouTubePlaylists.rejected, (state, action) => {
        state.playlists.isLoading = false;
        state.playlists.isError = true;
        state.playlists.errorMessage = action.payload;
      })

      // case for playlist item
      .addCase(fetchPlaylistItem.pending, (state) => {
        state.playlistItem.isLoading = true;
        state.playlistItem.isError = false;
      })
      .addCase(fetchPlaylistItem.fulfilled, (state, { payload }) => {
        state.playlistItem.isLoading = false;
        state.playlistItem.result = payload.data;
        state.playlistItem.title = payload.title
      })
      .addCase(fetchPlaylistItem.rejected, (state, { payload }) => {
        state.playlistItem.isLoading = false;
        state.playlistItem.isError = true;
        state.playlistItem.errorMessage = payload;
      });
  }
});

export default playlistSlice.reducer;
