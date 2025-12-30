import {useState, useEffect} from 'react'
import { useAudioActions } from '../context/AudioContext';
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
import { demoTracks } from '../demoTracks';


const UserEpisodes = () => {

      const [episodes, setEpisodes] = useState([]);



        const { playTrack } = useAudioActions();
      
        function handleOnClick(preview_link, image_url) {
          if (!preview_link) return;
          console.log("Clicked");
          console.log(preview_link);
          if (episodes) {
            playTrack({
              id: 123,
              title: "Royalty Song",
              artist: "Arjith Singh",
              image: image_url,
              url: preview_link, // royalty-free
            });
          }
        }

 useEffect(() => {

     async function fetchUserEpisodes() {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    const res = await fetch(
      "https://api.spotify.com/v1/me/episodes?limit=20",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    console.log(data);
    setEpisodes(data.items);
  }

  fetchUserEpisodes();
    
  }, []);


  return (
    

    <div className="bg-gradient-to-b from-amber-900/40 to-black min-h-full ">
      {/* liked songs Header */}
      
          <div className="p-6">

            <div className="flex gap-6 items-end">
              <img
                src= "/SaveLogo.png"
                alt="liked songs"
                className="w-60 h-60 rounded-md shadow-2xl"
              />
              <div className="flex-1 pb-4">
                <p className="text-sm font-black mb-6 text-balance">
                   Playlist
                </p>
                {/* <div className="text-sm font-medium mb-2">{episodes.type}</div> */}
                <h1 className="text-3xl font-black mb-6 text-balance">
                   Your Episodes
                </h1>
                {/* <p className="text-sm text-zinc-300 mb-4">{episodes.label}</p> */}
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
                    {episodes.track?.artists?.map((a) => a.name).join(", ")}
                  </span>
                  <span>•</span>
                  <span className="font-semibold">
                    {episodes?.length} episodes,
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
            
          </div>

          {/* Songs Table */}
          <div className="px-6 pb-8">
            {/* <div cl */}
            
            {episodes.map((item) => (
              <div
                key={item.episode.id}
                onClick={()=> handleOnClick(item.episode.audio_preview_url, item.episode.images[0].url)}
                className="flex justify-between gap-4 px-4 py-3 text-sm overflow-hidden  hover:bg-zinc-600/50 rounded-md group"
              >
                <div className="flex gap-3 text-start  text-white flex items-center justify-center">
                  <span className="w-4 h-4 group-hover:hidden">
                    {/* {episode.track.track_number} */}
                  </span>
                  <Play className="w-4 h-4 hidden group-hover:block" />

                  <div className="flex gap-3">
                    <img
                      src={item.episode.images[0]?.url || "/placeholder.svg"}
                      alt={item.episode.name}
                      className="w-40  rounded"
                    />
                    <div className='max-w-[500px] flex flex-col gap-4'>
                      <h1 className='text-xl font-bold self-start'>{item.episode.name}</h1>
                    <p className='truncate-description '>{item.episode.description}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
    </div>
  )
}

export default UserEpisodes