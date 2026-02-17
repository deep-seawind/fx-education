import React, { useRef } from "react";
import { IoCloseCircleOutline, IoPlayCircleOutline } from "react-icons/io5"; 
import { MediaPlayer, MediaProvider, SeekButton, Track } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { GrForwardTen } from "react-icons/gr";
import { TbRewindBackward10 } from "react-icons/tb";
import ForwardIcon from "../../../../assets/icnos/forward-icon.png"
import BackwardIcon from "../../../../assets/icnos/backward-icon.png"

const CourseVideo = ({ video, onClose, onComplete }) => {
  if (!video) return null;

  const playerRef = useRef(null);

  const handleContextMenu = (e) => e.preventDefault();

  const handleEnded = () => {
    const stored = JSON.parse(sessionStorage.getItem("completedVideos")) || {};

    stored[video.src] = true;

    sessionStorage.setItem("completedVideos", JSON.stringify(stored));

    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      onContextMenu={handleContextMenu}
    >
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-5xl rounded-lg overflow-hidden shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <IoPlayCircleOutline size={24} className="text-blue-600" />
            <h3 className="font-semibold text-slate-900">{video.title}</h3>
          </div>
          <button onClick={onClose}>
            <IoCloseCircleOutline
              size={28}
              className="text-slate-400 hover:text-red-500 cursor-pointer"
            />
          </button>
        </div>

        {/* Video Player */}
        <div className="bg-black aspect-video relative">
          <MediaPlayer
            ref={playerRef}
            src={video.src}
            title={video.title}
            playsInline
            className="w-full h-full"
            onEnded={handleEnded}
          >
            <MediaProvider>
              {video.subtitles && (
                <Track
                  src={video.subtitles}
                  label="English"
                  kind="subtitles"
                  lang="en"
                  default
                />
              )}
            </MediaProvider>

            <DefaultVideoLayout icons={defaultLayoutIcons} noDownload />

            {/* Left Seek Button */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
      <SeekButton
        seconds={-10}
        className="bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all duration-200"
      >
        <img src={BackwardIcon} alt="Backward 10 seconds" className="w-6 h-6" />
      </SeekButton>
    </div>

    {/* Right Seek Button */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
      <SeekButton
        seconds={10}
        className="bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all duration-200"
      >
        <img src={ForwardIcon} alt="Forward 10 seconds" className="w-6 h-6" />
      </SeekButton>
    </div>
          </MediaPlayer>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
