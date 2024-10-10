import { useEffect, useState } from "react";

import { getPlayList, getVideo } from "../../scripts/getData";
import { useDispatch, useSelector } from "react-redux";
import { PlayListCard } from "./PlayListCard";
import { fetchPlaylistItem } from "../../redux/slices/dataSlice";

export default function PlayListsCont({ setvideoSideBar }) {
  const playlists = useSelector((state) => state?.data?.playlists) || [];
  console.log(playlists);

  
  return (
    <div
      className="w-[95%] m-auto grid grid-cols-4 gap-4 overflow-auto scroll-smooth"
    >
      {playlists?.result?.items?.map((playlist,ind) => {
        const {
          channelId,
          channelTitle,
          description,
          publishedAt,
          thumbnails,
          title,
        } = playlist?.snippet;

        const data = playlist?.snippet

        return <PlayListCard key={ind} setvideoSideBar={setvideoSideBar} itemCount={playlist?.contentDetails?.itemCount} {...data} playlistId={playlist?.id}/>
      })}
      
    </div>
  );
}
