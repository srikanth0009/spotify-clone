import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Plus,
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Volume2,
  Maximize,
  Pause,
} from "lucide-react"
import { useAudioState, useAudioActions } from "../context/AudioContext";

const BottomPlayer = () => {
  
//  const {
//     track,
//     isPlaying,
//     togglePlay,
//     progress,
//     duration,
//     seek,
//     volume,
//     changeVolume,
//   } = useAudio();

const { track,progress, duration, isPlaying, volume } = useAudioState();
const { togglePlay, seek, changeVolume } = useAudioActions();

  function formatTime(seconds = 0) {
  if (isNaN(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}


  return (

    <footer className="h-24 bg-black border-t border-zinc-900 px-4 flex items-center justify-between gap-4">
        {/* Now Playing */}
        <div className="flex items-center gap-3 w-80">
          <img src="/telugu-movie-music.jpg" alt="Now Playing" className="w-14 h-14 rounded" />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Chikiri Chikiri (From "Peddi") [TELUGU]</div>
            <div className="text-xs text-zinc-400">A.R. Rahman, Mohit Chauhan, Balaji</div>
          </div>
          <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            {/* <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
              <Shuffle className="w-4 h-4" />
            </Button> */}
            <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button onClick={togglePlay}  size="icon" className="w-10 h-10 rounded-full bg-white text-black hover:bg-white/90">
              {isPlaying ? <Pause className="w-5 h-5 fill-black"/> : <Play className="w-5 h-5 fill-black" />} 
            </Button>
            <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
              <SkipForward className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
              <Repeat className="w-4 h-4" />
            </Button>
          </div>
          <div className="w-full max-w-2xl flex items-center gap-2">
            {/* <span className="text-xs text-zinc-400 w-10 text-right">1:02</span>
            <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-white rounded-full"></div>
            </div>
            // <span className="text-xs text-zinc-400 w-10">4:33</span> */}
            {/* Current time */}
  <span className="text-xs text-zinc-400 w-10 text-right">
    {formatTime(progress)}
  </span>
             {/* Progress bar */}
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={(e) => seek(e.target.value)}
          className="spotify-range w-full cursor-pointer"
        />
        {/* Total duration */}
  <span className="text-xs text-zinc-400 w-10 ">
    {formatTime(duration)}
  </span>
          </div>
        </div>
        {/* <div>
          <audio controls src='/a-product-demo-167264.mp3'>
Your browser does not support the `audio` element
          </audio>
        </div> */}

        {/* Right Controls */}
        <div className="flex items-center gap-2 w-80 justify-end">
          <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
            <Mic2 className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
            <ListMusic className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
            <MonitorSpeaker className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
            <Volume2 className="w-4 h-4" />
          </Button>
          {/* <div className="w-24 h-1 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-white rounded-full"></div>
          </div> */}

        {/* Volume */}
      <div className="w-40 ">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => changeVolume(e.target.value)}
        />
      </div>
          <Button size="icon" variant="ghost" className="w-8 h-8 hover:bg-zinc-900">
            <Maximize className="w-4 h-4" />
          </Button>
        </div>
      </footer>
  )
}

export default BottomPlayer