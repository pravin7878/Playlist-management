import React from 'react'
import { MdPlaylistPlay } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { fetchPlaylistItem } from '../../redux/slices/dataSlice';
import { useNavigate } from 'react-router-dom';


export const PlayListCard = ({
  channelId,
  channelTitle,
  description,
  publishedAt,
  thumbnails,
  title,
  itemCount,
  playlistId,
}
) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hendelClick = (playlistId, title) => {
    navigate("/product/playlist/item")
    dispatch(fetchPlaylistItem({ playlistId, title }))
  }

  return (
      <div onClick={() => hendelClick(playlistId, title)} className='hover:border-2  w-full rounded-md p-2 flex flex-col bg-black/40 text-white cursor-pointer'>
        <span className='relative rounded-md'>
          <img
            className='w-full rounded-lg'
            src={thumbnails?.default?.url}
            alt="title"
          />
          <span></span>
          <h3
            className='my-2 absolute bottom-8 z-10 px-2 text-sm text-white bg-black/60 shadow-lg rounded-md'
          >
            {title}
          </h3>
          <p className='flex text-sm  justify-center gap-2 rounded-md'><MdPlaylistPlay size={20} /><span>{itemCount}</span></p>
        </span>
      </div>
  )
}
