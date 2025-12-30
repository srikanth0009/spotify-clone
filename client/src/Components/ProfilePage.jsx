import {useState, useEffect} from "react";
import { Button } from "@/components/ui/button"
import {
  Search,
  Download,
  Music2,
  Plus,
  List,
  User,
  MoreHorizontal,
  ChevronLeft,
  ListMusic,
  Library,
} from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";



const ProfilePage = () => {


    const [profile, setProfile] = useState(null);
      const [artists, setArtists] = useState(null);
      const [tracks, setTracks] = useState(null);


  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem("access_token");

      if (!token) return; // user not logged in
      console.log(token);
      const res = await fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      console.log(data);
      setProfile(data);
    }

    async function fetchTopArtists() {
      const token = localStorage.getItem("access_token");

      if (!token) return; // user not logged in

       const res = await fetch("https://api.spotify.com/v1/me/top/artists?limit=4", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      console.log(data);
      setArtists(data.items);
    }


    async function fetchTopTracks() {
      const token = localStorage.getItem("access_token");

      if (!token) return; // user not logged in

       const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      console.log(data);
      setTracks(data.items);
    }

    fetchProfile();
    fetchTopArtists();
    fetchTopTracks();
  }, []);


  if(profile == null || artists == null || tracks == null) return <div>Hello</div>


  return (

    <div className="bg-gradient-to-b from-zinc-800 to-black min-h-full">
      {/* Profile Header */}
      <div className="bg-gradient-to-b from-zinc-700 to-zinc-800 px-6 pt-8 pb-6">
        <div className="flex gap-6 items-end">
          <div className="w-52 h-52 rounded-full bg-zinc-600 flex items-center justify-center flex-shrink-0 shadow-2xl">
            <User className="w-24 h-24 text-zinc-400" />
          </div>
          <div className="flex-1 pb-4">
            <div className="text-sm font-medium mb-2">Profile</div>
            <h1 className="text-8xl font-black mb-4">SS</h1>
            <div className="text-sm text-zinc-300">1 Public Playlist</div>
          </div>
        </div>
      </div>

      {/* Three-dot menu */}
      <div className="px-6 py-6">
        <Button
          size="icon"
          variant="ghost"
          className="w-10 h-10 hover:bg-zinc-900"
        >
          <MoreHorizontal className="w-6 h-6 text-zinc-400" />
        </Button>
      </div>

      {/* Top Artists Section */}
      <ScrollArea className="w-full  whitespace-nowrap">
      <div className="px-6 pb-8 ">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Top artists this month</h2>
            <p className="text-sm text-zinc-400">Only visible to you</p>
          </div>
          <Button
            variant="link"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Show all
          </Button>
        </div>
        <div className="flex  gap-4">
          {
          artists.map((artist, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-zinc-900 cursor-pointer transition-colors"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img
                  src={artist.images[0]?.url || "/placeholder.svg"}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-center">{artist.name}</span>
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Top Tracks Section */}
      <div className="px-6 pb-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Top tracks this month</h2>
            <p className="text-sm text-zinc-400">Only visible to you</p>
          </div>
          <Button
            variant="link"
            className="text-sm text-zinc-300 hover:text-white"
          >
            Show all
          </Button>
        </div>
        <div className="space-y-2">
          
        {tracks.map((track, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-4 px-4 py-2 rounded-md hover:bg-zinc-600 group cursor-pointer"
            >
              
              <div className="flex items-center gap-3">
                <div className="text-zinc-400 w-8 text-center">{index + 1}</div>
                <img src={track.album?.images[0]?.url} width="65px" alt="None" />
                <div>
                  <div className="font-medium group-hover:text-white">
                    {/* {track.title} */}
                    <div className="text-sm text-white font-medium truncate">{track.name}</div>
                      
                  </div>
                  <div className="text-sm text-zinc-400">{track.artists[0]?.name}</div>
                </div>
              </div>
              {/* <div className="text-xs text-zinc-400">{track.album?.album_type}</div> */}
              <div className="text-sm text-zinc-400">{Math.floor(track.duration_ms/60000)} m</div>
            </div>
          ))
        } 
        </div>
      </div>

      {/* Public Playlists Section */}
      <div className="px-6 pb-8">
        <h2 className="text-2xl font-bold mb-4">Public Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 cursor-pointer transition-colors">
            <img
              src="/playlist-cover.png"
              alt="Playlist"
              className="w-full aspect-square rounded-md mb-4 object-cover"
            />
            <h3 className="font-semibold mb-1 truncate">My Playlist #1</h3>
            <p className="text-sm text-zinc-400 truncate">Created by SS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
