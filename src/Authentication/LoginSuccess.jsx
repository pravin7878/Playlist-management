// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { fetchYouTubePlaylists } from '../redux/slices/dataSlice';

// export const LoginSuccess = () => {
// const dispatch = useDispatch()

//   const handleSuccessRedirect = () => {
//     const hashParams = new URLSearchParams(window.location.hash.substr(1));
//     const accessToken = hashParams.get('access_token');
// console.log(accessToken);
// console.log("not get accessToken");


//     if (accessToken) {
//       console.log("get accessToken");

      
//       // Use this token to fetch YouTube playlists
//       console.log('YouTube Access Token:', accessToken);
//       dispatch(fetchYouTubePlaylists(accessToken));
//     }
//   };

//   // Call this function when the success page loads
//   useEffect(()=>{
//     handleSuccessRedirect();
//   },[])


//   return (
//     <div>loginSuccess</div>
//   )
// }
