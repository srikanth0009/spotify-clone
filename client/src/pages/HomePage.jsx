import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import HeaderNavBar from "../Components/HeaderNavBar";
import AppSidebar from "../Components/AppSidebar";
import MainContent from "../Components/MainContent";
import BottomPlayer from "../Components/BottomPlayer";
import { AudioProvider } from "../context/AudioContext";
import AppRightSideBar from "../Components/AppRightSideBar";
import { MainContentProvider } from "../context/MainContentContext";



export default function HomePage({ children }) {
  const [profile, setProfile] = useState(null);
  const [artists, setArtists] = useState(null);

  const [mainContent, setMainContent] = useState(null);
  const [showMainContent, setShowMainContent] = useState();


  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true)
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true)

  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem("access_token");

      if (!token) return; // user not logged in
      console.log(token);
      const res = await fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      // console.log(data);
      setProfile(data);
    }

    async function fetchTopArtists() {
      const token = localStorage.getItem("access_token");

      if (!token) return; // user not logged in

       const res = await fetch("https://api.spotify.com/v1/me/top/artists", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      // console.log(data);
      setArtists(data.items);
    }

    fetchProfile();
    fetchTopArtists();
  }, []);



return (

  <AudioProvider>
  <MainContentProvider>
    <div className="h-[100vh] flex flex-col bg-black text-white">

    {/* Header Nav Bar  */}
    <HeaderNavBar />

    {/* Main Content Area  */}
    <div className="flex-1 flex h-screen overflow-hidden ">

        {/* LeftSideBar */}
        <AppSidebar setShowMainContent={setShowMainContent} isLeftSidebarOpen={isLeftSidebarOpen} setIsLeftSidebarOpen={setIsLeftSidebarOpen} artists={artists} setMainContent={setMainContent}/>

        {/* MainContent  */}
        <MainContent showMainContent={showMainContent} setShowMainContent={setShowMainContent}  />

        {/* Right Sidebar */}
        <AppRightSideBar setShowMainContent={setShowMainContent} isRightSidebarOpen={isRightSidebarOpen} setIsRightSidebarOpen={setIsRightSidebarOpen}/>
      
    </div>

    {/* Bottom Player  */}
    <BottomPlayer />

  </div>
  </MainContentProvider>
  </AudioProvider>
);

}

