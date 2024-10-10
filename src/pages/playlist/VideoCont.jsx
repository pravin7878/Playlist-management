import React, { useEffect } from 'react'
import { VideoCard } from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'

import { LoadingSpinner } from "../../utilitys/LoadingSpiner"
import { ErrorComponent } from "../../utilitys/ErrorComponent"
import { MdTitle } from 'react-icons/md'
import { setVideoId } from '../../redux/slices/utilitySlice'

export const VideoCont = ({setvideoId}) => {
  const playlistItem = useSelector((state) => state?.data?.playlistItem)
  const dispatch = useDispatch()
  console.log(playlistItem);

  useEffect(() => {
    // dispatch(setVideoId(playlistItem?.result?.items[0]?.contentDetails?.videoId))
  }, [playlistItem])

  if (playlistItem?.isLoading) {
    return <LoadingSpinner />
  }

  if (playlistItem?.isError) {
    return <ErrorComponent message={playlistItem?.errorMessage} />
  }
  return (
    <div className='flex flex-col gap-3 text-white p-2'>
      <h3>{playlistItem?.title}</h3>
      <p>Totle Items : {playlistItem?.result?.items?.length}</p>

      <div className='flex flex-col gap-3 text-white'>
        {playlistItem?.result?.items?.map((item, ind) => {
          return <VideoCard  {...item} />
        })}
      </div>

    </div>
  )
}
