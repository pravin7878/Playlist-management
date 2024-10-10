import React, { useState } from 'react'
import YouTubePlayer from "../../utilitys/YouTubeVideoPlayer"
import { VideoCont } from '../playlist/VideoCont'

export const VideoHome = () => {
    const [videoId, setvideoId] = useState(null)
  return (
      <div className='flex h-full'>
          <div className='w-3/4'>
              <YouTubePlayer videoId={videoId} />
          </div>

          <div className='w-1/4 border-l-2'>
              <VideoCont setvideoId={setvideoId}/>
          </div>
      </div>
  )
}
