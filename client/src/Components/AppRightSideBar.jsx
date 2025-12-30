import React from 'react'
import { Button } from "@/components/ui/button";
import {  ChevronRight, ChevronLeft } from "lucide-react";

   import { useAudioState, useAudioActions } from "../context/AudioContext";

const AppRightSideBar = ({setShowMainContent, isRightSidebarOpen, setIsRightSidebarOpen}) => {


  const { track,progress, duration, isPlaying } = useAudioState();
const { togglePlay, seek } = useAudioActions();



  if(isRightSidebarOpen){
    return (
      <aside className="ml-4 w-85 bg-gradient-to-b from-zinc-900 to-black border-l border-zinc-900 overflow-y-auto relative scrollbar">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 w-8 h-8 hover:bg-zinc-800 z-10"
            onClick={() => setIsRightSidebarOpen(false)}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Hot Hits Telugu</h3>

            {/* Album Art */}
            <div className="mb-6">
              <img
                src={  track?.image  ||  "/indian-singer-music.jpg"}
                alt="Chikiri Chikiri"
                className="w-full rounded-lg"
              />
            </div>

            {/* Song Info */}
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2">
                {track?.title || "nikiri Chikiri (From 'Peddi...')"}
              </h4>
              <p className="text-sm text-zinc-400">
                {track?.artist || "A.R. Rahman, Mohit Chauhan, Balaji"}
              </p>
            </div>

            {/* About the Artist */}
            <div>
              <h5 className="text-lg font-semibold mb-3">About the artist</h5>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/music-composer-smiling.jpg"
                  alt="Artist"
                  className="w-full"
                />
              </div>
            </div>
          </div>
    </aside>
    )
  }
  return (
    <div className="w-12 bg-gradient-to-b from-zinc-900 to-black border-l border-zinc-900 flex items-center justify-center pt-4">
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 hover:bg-zinc-800"
            onClick={() => setIsRightSidebarOpen(true)}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>
  )
}

export default AppRightSideBar