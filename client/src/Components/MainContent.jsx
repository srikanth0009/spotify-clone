import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
import { useState, useEffect } from "react";
import AppRightSideBar from "./AppRightSideBar";
import PlayList from "./PlayList";
import HomePageMainContent from "./HomePageMainContent";
import { useMainContent } from "../context/MainContentContext";
import Player from "./Player";
import Premium from "./Premium";
import InstallApp from "./InstallApp";
import ProfilePage from "./ProfilePage";
import LikedTracks from "./LikedTracks";
import UserEpisodes from "./UserEpisodes";



const MainContent = ({showMainContent, setShowMainContent }) => {
  const [categoryList, setCategoryList] = useState(null);
  const [newReleases, setNewReleases] = useState(null);

  const [openPlaylist, setopenPlaylist] = useState(false);
  const [openPlaylistData, setOpenPlalistData] = useState(null);

  const { activeView, setActiveView } = useMainContent();


  const handlePlaylistClick = async (category, id) => {
    if (category == "new-releases") {
      // id = album_id
      setOpenPlalistData({
        category: "new-releases",
        id: id,
      });
      setopenPlaylist(true);

      setActiveView({
        type:"album",
        id: id,
      })
    }
  };



if (activeView.type === "home") return (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">

          <HomePageMainContent
            // categoryList={categoryList}
            // newReleases={newReleases}
            handlePlaylistClick={handlePlaylistClick}
          />
        
      </div>

      
      </main>
    );


if (activeView.type === "album") return  (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">
          <PlayList />
      </div>
      </main>
    );


if (activeView.type === "track") return  (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">
          <Player />
      </div>    
      </main>
    );


if (activeView.type === "premium") return  (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">
          <Premium />
      </div>    
      </main>
    );

if (activeView.type === "install") return  (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">
          <InstallApp />
      </div>    
      </main>
    );


if (activeView.type === "profile") return  (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">
          <ProfilePage />
      </div>    
      </main>
    );


if (activeView.type === "yourEpisodes") return  (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">
          <UserEpisodes />
      </div>    
      </main>
    );


if (activeView.type === "likedsongs") return  (
      <main className="flex-1 overflow-hidden flex rounded-lg ">
      <div className="flex-1 overflow-y-auto scrollbar">
          <LikedTracks />
      </div>    
      </main>
    );

  return (
    <main className="flex-1 overflow-hidden flex rounded-lg ">
      {/* <div className="flex-1 overflow-y-auto scrollbar">
        {openPlaylist ? (
          <FeaturedSection
            handleBackClick={handleBackClick}
            openPlaylistData={openPlaylistData}
          />
        ) : (
          <HomePageMainContent
            categoryList={categoryList}
            newReleases={newReleases}
            handlePlaylistClick={handlePlaylistClick}
          />
        )}
      </div> */}

      
    </main>
  );
};

export default MainContent;
