import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccessToken } from '../redux/slices/userSlice'
import { fetchYouTubePlaylists } from '../redux/slices/dataSlice'

export default function Home() {
 const dispatch = useDispatch()
 const user = useSelector((state)=>state?.user?.auth)
 const data = useSelector((state)=>state.data)
  console.log(user , "from Home ");
 console.log(data);
 

  
  return (
    <div className='w-[95%] m-auto flex flex-col gap-3 mt-2  overflow-y-auto scroll-smooth text-white'>
        <h3>Well-Come</h3>
      <h1>YouTube Playlist App</h1>
      <button onClick={()=>dispatch(fetchYouTubePlaylists())}>Import From Youtube</button>
    </div>
  )
}
