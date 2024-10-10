import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setVideoId } from '../../redux/slices/utilitySlice'

export const VideoCard = ({ contentDetails, snippet}) => {
const dipatch = useDispatch()
  
  
  return (
    <div onClick={() => dipatch(setVideoId(contentDetails?.videoId)) 
    } className='flex bg-black/40 p-1 rounded-md cursor-pointer hover:outline'>
      <span className='w-1/2' >
        <img src={snippet?.thumbnails?.default.url} alt="" />
      </span>
      <span className='w-3/4 p-2'>
        <p className='text-[10px]'>{snippet?.title}</p>
        <p className='text-[7px] mt-2'>{snippet?.channelTitle}</p>
      </span>
    </div>
  )
}
