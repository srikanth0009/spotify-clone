import { Button } from "@/components/ui/button";
import {
  Search,
  Download,
  Music2,
  Plus,
  List,
  ChevronLeft,
  ListMusic,
  Library,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { useAudioActions } from "../context/AudioContext";
import UserPodcasts from "./UserPodcasts";
import UserPlaylist from "./UserPlaylist";
import { useMainContent } from "../context/MainContentContext";




export default function AppSidebar({
  isLeftSidebarOpen,
  setIsLeftSidebarOpen,
}) {
  const [podcasts, setPodcasts] = useState([]);
  // const [userPlaylist, setUserPlaylist] = useState([]);
  const [userEpisodes, setUserEpisodes] = useState([]);
  const [likedTracks, setLikedTracks] = useState([]);

  const [showViewMenu, setShowViewMenu] = useState(false);
  const [libraryView, setLibraryView] = useState("list");

  const { playTrack } = useAudioActions();
  const {  setActiveView } = useMainContent();
  

  function handleOnClick(link) {
    if (!link) return;
    console.log("Clicked");
    console.log(link);
    if (userEpisodes) {
      playTrack({
        id: 123,
        title: "Royalty Song",
        artist: "Arjith Singh",
        image: "/telugu-movie-music.jpg",
        url: link, // royalty-free
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
      setUserEpisodes(data.items);
    }

    fetchUserEpisodes();

    async function fetchUserPlaylists() {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      const res = await fetch(
        "https://api.spotify.com/v1/me/playlists?limit=20",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log(data);
      // setUserPlaylist(data.items);
    }

    fetchUserPlaylists();

    async function fetchUserPodcasts() {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      const res = await fetch("https://api.spotify.com/v1/me/shows?limit=20", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log(data.items);
      setPodcasts(data.items.map((item) => item.show));
    }

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
      setLikedTracks(data.items);
    }

    fetchLikedSongs();

    fetchUserPodcasts();
  }, []);

  return (
    <aside
      className={`${
        isLeftSidebarOpen ? "w-85" : "w-20"
      } bg-black border-r border-zinc-900 flex flex-col transition-all duration-300 ease-in-out h-screen  overflow-y-auto scrollbar `}
    >
      {isLeftSidebarOpen ? (
        <>
          <div className="p-4 ">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-zinc-400">
                Your Library
              </h2>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 hover:bg-zinc-900"
                >
                  <Plus className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 hover:bg-zinc-900"
                  onClick={() => setIsLeftSidebarOpen(false)}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 mb-4">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full bg-zinc-900 hover:bg-zinc-800"
              >
                Playlists
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full hover:bg-zinc-900"
              >
                Podcasts & Shows
              </Button>
            </div>

            {/* Search and Sort */}
            <div className="flex items-center justify-between mb-3">
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-zinc-900"
              >
                <Search className="w-4 h-4" />
              </Button>
              <div className="relative flex items-center gap-2 text-sm text-zinc-400">
                <span>Recents</span>
                <Button
                  onClick={() => setShowViewMenu(!showViewMenu)}
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 hover:bg-zinc-900"
                >
                  <List className="w-4 h-4" />
                </Button>

                {showViewMenu && (
                  <div className="absolute right-0 top-8 bg-zinc-800 rounded-md shadow-lg py-1 z-50 min-w-[180px]">
                    <div className="px-3 py-2 text-xs text-zinc-400 font-semibold">
                      View as
                    </div>
                    <button
                      onClick={() => {
                        setLibraryView("compact");
                        setShowViewMenu(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-zinc-700 flex items-center justify-between ${
                        libraryView === "compact" ? "text-green-500" : ""
                      }`}
                    >
                      <span>Compact</span>
                      {libraryView === "compact" && (
                        <span className="text-green-500">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setLibraryView("list");
                        setShowViewMenu(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-zinc-700 flex items-center justify-between ${
                        libraryView === "list" ? "text-green-500" : ""
                      }`}
                    >
                      <span>List</span>
                      {libraryView === "list" && (
                        <span className="text-green-500">✓</span>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setLibraryView("grid");
                        setShowViewMenu(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-zinc-700 flex items-center justify-between ${
                        libraryView === "grid" ? "text-green-500" : ""
                      }`}
                    >
                      <span>Grid</span>
                      {libraryView === "grid" && (
                        <span className="text-green-500">✓</span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div onClick={()=> setActiveView({type: "likedsongs" , id: null})} className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900 cursor-pointer">
            <img
              src="/LikeImage.png"
              width="65px"
              alt="None"
            />
            <div>
              <div
                className="text-sm text-white font-medium truncate"
              >
                Liked Songs
              </div>
              <div className="text-xs text-zinc-400">
                playlist
                 <span className="mx-1 ">•</span>
                 {likedTracks.length} songs
              </div>
            </div>
          </div>

          <div onClick={()=> setActiveView({type: "yourEpisodes" , id: null})} className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900 cursor-pointer">
            <img
              src="/SaveLogo.png"
              width="65px"
              alt="None"
            />
            <div>
              <div
                // onClick={() => handleOnClick()}
                className="text-sm text-white font-medium truncate"
              >
                 Your episodes
              </div>
              <div className="text-xs text-zinc-400">
                Playlist
                 <span className="mx-1 ">•</span>
                  Saved & downloaded episodes
              </div>
            </div>
          </div>
          
            <UserPodcasts />
            {/* <UserPlaylist /> */}
            {/* <UserEpisodes /> */}
            {/* <LikedTracks /> */}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center py-4 gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="w-12 h-12 hover:bg-zinc-900"
            onClick={() => setIsLeftSidebarOpen(true)}
          >
            <Library className="w-6 h-6" />
          </Button>
          {podcasts &&
            podcasts.map((podcast, i) => {
              if (i < 5) {
                return (
                  <div
                    key={podcast.id}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900 cursor-pointer"
                  >
                    <img
                      src={
                        podcast.images[0]?.url
                          ? podcast.images[0]?.url
                          : "/podcast-cover.png"
                      }
                      alt="Podcast"
                      className="w-12 h-12 rounded-md"
                    />
                  </div>
                );
              }
              return;
            })}
        </div>
      )}
    </aside>
  );
}
