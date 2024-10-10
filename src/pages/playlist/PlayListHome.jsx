import React from 'react'
import PlayListsCont from './PlayListsCont'
import { VideoCont } from './VideoCont'

export const PlayListHome = () => {
  return (
    <div className='flex h-full'>
      <PlayListsCont />
      {/* <div className='w-3/4'>
        <PlayListsCont />
      </div> */}
      
      {/* <div className='w-1/4 border-l-2'>
      <VideoCont/>
      </div> */}
    </div>
  )
}
