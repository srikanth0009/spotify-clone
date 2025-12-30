import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Play,
  Shuffle,
  Plus,
  Download,
  MoreHorizontal,
  ListMusic,
  Clock,
  Heart,
  PlusCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAudioActions } from "../context/AudioContext";
import { useMainContent } from "../context/MainContentContext";


const Player = () => {

  const [trackDetails, setTrackDetails] = useState(null);

  const { playTrack } = useAudioActions();
  const { activeView } = useMainContent();


  function handleOnClick(){
    console.log("Clicked")
    if(trackDetails){
      playTrack({
    id: 123,
    title: "Royalty Song",
    artist: "Arjith Singh",
    image: "/telugu-movie-music.jpg",
    url: "/a-product-demo-167264.mp3", // royalty-free
  })
    }
  }

  useEffect(() => {
    // Fetch track details

    async function fetchAlbumDetails(track_id) {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      console.log("track ");
      console.log(track_id);

      const res = await fetch(`https://api.spotify.com/v1/tracks/${track_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      console.log(data);
      setTrackDetails(data);
    }

    fetchAlbumDetails(activeView.id);
  }, []);

  if(trackDetails == null) return ;

  return (
    <>
      <div className="p-6">

        <div className="flex gap-6 items-end">
          <img
            src={trackDetails.album.images[0]?.url || "/placeholder.svg"}
            alt={trackDetails.name}
            className="w-60 h-60 rounded-md shadow-2xl"
          />
          <div className="flex-1 pb-4">
            <div className="text-sm font-medium mb-2">{trackDetails.album.type}</div>
            <h1 className="text-3xl font-black mb-6 text-balance">
              {trackDetails.name}
            </h1>
            <p className="text-sm text-zinc-300 mb-4">{trackDetails.label}</p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <span className="font-bold">Spotify</span>
              <span className="font-semibold">
                {trackDetails.artists?.map((a) => a.name).join(", ")}
              </span>
              <span>•</span>
              <span className="font-semibold">
                1 songs,
              </span>
              <span className="text-zinc-400">
                {/* about {Math.floor(totalDurationMs / 60000)} mins */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-6 flex items-center gap-6">
        <Button
          size="icon"
          onClick={handleOnClick}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 hover:scale-105 transition-all"
        >
          <Play className="w-6 h-6 text-black fill-black ml-1" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="w-14 h-14 hover:bg-zinc-900"
        >
          <PlusCircle className="w-10 h-10 text-zinc-400" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="w-10 h-10 hover:bg-zinc-900"
        >
          <Download className="w-5 h-5 text-zinc-400" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="w-10 h-10 hover:bg-zinc-900"
        >
          <MoreHorizontal className="w-6 h-6 text-zinc-400" />
        </Button>
        <div className="flex-1"></div>
      </div>
    </>
  );
};

export default Player;
