import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoId } from "../redux/slices/utilitySlice";

const YouTubePlayer = () => {
    const state = useSelector((state)=>state?.utility)
// const playlistItem = useSelector((state)=>state?.data?.playlistItem)

    return (
        <div className="video-container">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${state?.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubePlayer;