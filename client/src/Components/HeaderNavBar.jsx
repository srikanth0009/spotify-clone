import React, { useState } from "react";
import logo from "../assets/Spotify_Primary_Logo_RGB_Black.png";
import home from "../assets/image.png";
import bell from "../assets/BellIcon.png";

import group from "../assets/GroupIcon.png";

import user from "../assets/UserIcon.png";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  Search,
  ShoppingCart,
  Download,
  Bell,
  Settings,
  ExternalLink,
  Megaphone,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useMainContent } from "../context/MainContentContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderNavBar = () => {
  const [input, setInput] = useState("");
  const [tracks, setTracks] = useState([]);

  const { activeView, setActiveView } = useMainContent();

  function handleSearch() {
    console.log("hello");
    console.log(searchTracks(input));
  }

  async function searchTracks(query) {
    const token = localStorage.getItem("access_token");

    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    setTracks(data.tracks.items);
    setInput("");

    // IMPORTANT: filter tracks that actually have preview_url
    // const tracksWithPreview = data.tracks.items.filter(
    //   (track) => track.preview_url
    // );

    // console.log(tracksWithPreview);
    // return tracksWithPreview;
  }

  return (
    <>
      {/* Top Navigation Bar */}

      <header className="h-16 bg-black border-b border-zinc-900 flex items-center justify-between px-4 gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faSpotify}
              className="text-4xl text-white "
            />
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex ">
          <div className="flex-1 max-w-2xl flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full bg-zinc-900 hover:bg-zinc-800"
              onClick={() => setActiveView({ type: "home", id: null })}
            >
              <Home className="w-5 h-5" />
            </Button>
            <div className="flex-1 relative mr-9">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key == "Enter" && input.trim()) handleSearch();
                }}
                placeholder="What do you want to play?"
                className="pl-12 w-[500px] bg-zinc-900 border-none rounded-full h-12 text-sm placeholder:text-zinc-400"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* <Button size="icon" variant="ghost" className="hover:bg-zinc-900">
            <ShoppingCart className="w-5 h-5" />
          </Button> */}
            <Button
              onClick={() => setActiveView({ type: "premium", id: null })}
              className="rounded-full bg-white text-black hover:bg-white/90 px-5 font-semibold"
            >
              Explore Premium
            </Button>
            <Button
              onClick={() => setActiveView({ type: "install", id: null })}
              variant="ghost"
              className="hover:bg-zinc-900 gap-2"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-semibold">Install App</span>
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-zinc-900">
              <Bell className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-zinc-900">
              <Settings className="w-5 h-5" />
            </Button>
            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500"
                >
                  <span className="font-bold">S</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[280px] bg-zinc-900 border-zinc-800 p-1"
                sideOffset={8}
              >
                <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 text-white hover:bg-zinc-800 cursor-pointer rounded">
                  <span className="text-sm font-normal">Account</span>
                  <ExternalLink className="w-4 h-4" />
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => setActiveView({ type: "profile", id: null })}
                  className="px-3 py-2.5 text-white hover:bg-zinc-800 cursor-pointer rounded"
                >
                  <span className="text-sm font-normal">Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 text-white hover:bg-zinc-800 cursor-pointer rounded">
                  <span className="text-sm font-normal">
                    Upgrade to Premium
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 text-white hover:bg-zinc-800 cursor-pointer rounded">
                  <span className="text-sm font-normal">Support</span>
                  <ExternalLink className="w-4 h-4" />
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 text-white hover:bg-zinc-800 cursor-pointer rounded">
                  <span className="text-sm font-normal">Download</span>
                  <ExternalLink className="w-4 h-4" />
                </DropdownMenuItem>

                <DropdownMenuItem className="px-3 py-2.5 text-white hover:bg-zinc-800 cursor-pointer rounded">
                  <span className="text-sm font-normal">Settings</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-zinc-800 my-1" />

                <DropdownMenuItem className="px-3 py-2.5 text-white hover:bg-zinc-800 cursor-pointer rounded">
                  <span className="text-sm font-normal">Log out</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-zinc-800 my-1" />

                <div className="px-3 py-2">
                  <div className="text-white font-semibold text-sm mb-2">
                    Your Updates
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-zinc-800 rounded p-2 flex-shrink-0">
                      <Megaphone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-xs text-zinc-400 leading-relaxed">
                      Say hello to Your Updates. Check here for news on your
                      followers, playlists, events and more •{" "}
                      <span className="text-zinc-500">5w</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNavBar;
