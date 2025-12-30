import React, { useState, useEffect } from "react";
import { useAudioActions } from "../context/AudioContext";
import { demoTracks } from "../demoTracks";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { useMainContent } from "../context/MainContentContext";



const LikedTracks = () => {
  const [likedsongs, setLikedsongs] = useState([]);



    const { playTrack } = useAudioActions();
    const {  setActiveView } = useMainContent();
  
    function handleOnClick(link,image_url) {
      if (!link) return;
      console.log("Clicked");
      console.log(link);
      if (likedsongs) {
        playTrack({
          id: 123,
          title: "Royalty Song",
          artist: "Arjith Singh",
          image: image_url,
          url: link, // royalty-free
        });
      }
    }

  useEffect(() => {
    async function fetchLikedSongs() {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      const res = await fetch("https://api.spotify.com/v1/me/tracks?limit=20", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log(data.items); // liked songs
      setLikedsongs(data.items);
    }

    fetchLikedSongs();
  }, []);

  if(likedsongs.length == 0) return <div>Hello</div>

  return (
    // <div>
    //   {likedsongs &&
    //     likedsongs.map((item) => (
    //       <div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900 cursor-pointer">
    //         <img
    //           src={item.track?.album?.images[0]?.url}
    //           width="65px"
    //           alt="None"
    //         />
    //         <div>
    //           {/* <p>{podcast.name}</p>
    //                   <p>{podcast.publisher}</p> */}
    //           <div
    //             onClick={() => handleOnClick(item.track.preview_url)}
    //             className="text-sm text-white font-medium truncate"
    //           >
    //             {item.track.name}
    //           </div>
    //           <div className="text-xs text-zinc-400">
    //             {item.track?.album?.album_type}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // </div>
    <div className="bg-gradient-to-b from-amber-900/40 to-black min-h-full ">
      {/* liked songs Header */}
      
          <div className="p-6">

            <div className="flex gap-6 items-end">
              <img
                src= "/LikeImage.png"
                alt="liked songs"
                className="w-60 h-60 rounded-md shadow-2xl"
              />
              <div className="flex-1 pb-4">
                <p className="text-sm font-black mb-6 text-balance">
                   Playlist
                </p>
                <div className="text-sm font-medium mb-2">{likedsongs.type}</div>
                <h1 className="text-3xl font-black mb-6 text-balance">
                   Liked Songs
                </h1>
                <p className="text-sm text-zinc-300 mb-4">{likedsongs.label}</p>
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
                    {likedsongs.track?.artists?.map((a) => a.name).join(", ")}
                  </span>
                  <span>•</span>
                  <span className="font-semibold">
                    {likedsongs.total_tracks} songs,
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
              className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 hover:scale-105 transition-all"
            >
              <Play className="w-6 h-6 text-black fill-black ml-1" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="w-10 h-10 hover:bg-zinc-900"
            >
              <Shuffle className="w-5 h-5 text-zinc-400" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="w-10 h-10 hover:bg-zinc-900"
            >
              <Plus className="w-6 h-6 text-zinc-400" />
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
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white gap-2"
            >
              List
              <ListMusic className="w-5 h-5" />
            </Button>
          </div>

          {/* Songs Table */}
          <div className="px-6 pb-8">
            <div className="flex justify-between mr-15 gap-4 px-4 py-2 text-sm text-zinc-400 border-b border-zinc-800">
              <div className="flex gap-6 ml-1 text-center">
                #<div>Title</div>
              </div>
              {/* <div>Album</div> */}
              {/* <div>Date added</div> */}
              <div className="text-center">
                <Clock className="w-4 h-4 mx-auto" />
              </div>
            </div>
            {
              demoTracks.map((demo)=> (
                <div
                key={demo.id}
                className="flex justify-between gap-4 px-4 py-3 text-sm hover:bg-zinc-600/50 rounded-md group"
              >
                <div onClick={()=> handleOnClick(demo.url, demo.image)} className="flex gap-3 text-center text-zinc-400 flex items-center justify-center">
                  <span className="w-4 h-4 group-hover:hidden">
                    {demo.track_number}
                  </span>
                  <Play className="w-4 h-4 hidden group-hover:block" />

                  <div className="flex items-center gap-3">
                    <img
                      src={demo.image || "/placeholder.svg"}
                      alt={demo.title}
                      className="w-10 h-10 rounded"
                    />
                    <div className="flex flex-col items-start">
                      <div
                        className="font-medium"
                        
                      >
                        {demo.title}
                      </div>
                      <div className="text-xs text-zinc-400">
                        {demo.artist} 
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center text-zinc-400">
                  {song.album}
                </div> */}
                {/* <div className="flex items-center text-zinc-400">
                  {song.preview_url ? "Hi" : "Bye"}
                </div> */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 opacity-0 group-hover:opacity-100"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <span className="text-zinc-400 w-10 text-center">
                    {demo.duration} m
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 opacity-0 group-hover:opacity-100"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              ))
            }
            {likedsongs.map((song) => (
              <div
                key={song.id}
                className="flex justify-between gap-4 px-4 py-3 text-sm hover:bg-zinc-600/50 rounded-md group"
              >
                <div className="flex gap-3 text-center text-zinc-400 flex items-center justify-center">
                  <span className="w-4 h-4 group-hover:hidden">
                    {song.track.track_number}
                  </span>
                  <Play className="w-4 h-4 hidden group-hover:block" />

                  <div className="flex items-center gap-3">
                    <img
                      src={song.track?.album?.images[0]?.url || "/placeholder.svg"}
                      alt={song.track?.name}
                      className="w-10 h-10 rounded"
                    />
                    <div className="flex flex-col items-start">
                      <div
                        className="font-medium"
                        onClick={() => setActiveView({type: "track", id: song.track.id})}
                      >
                        {song.track.name}
                      </div>
                      <div className="text-xs text-zinc-400">
                        {song.track.artists.map((a) => a.name).join(", ")} 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 opacity-0 group-hover:opacity-100"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <span className="text-zinc-400 w-10 text-center">
                    {Math.floor(song.track.duration_ms / 60000)} m
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-8 h-8 opacity-0 group-hover:opacity-100"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default LikedTracks;
