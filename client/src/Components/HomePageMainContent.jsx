import {useState, useEffect} from "react";
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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Podcasts from "./Podcasts";

const categoryColors = [
  "from-rose-600/40",
  "from-purple-600/40",
  "from-emerald-600/40",
  "from-blue-600/40",
  "from-orange-600/40",
  "from-pink-600/40",
  "from-indigo-600/40",
  "from-teal-600/40",
];

const HomePageMainContent = ({
  // categoryList,
  // newReleases,
  handlePlaylistClick,
}) => {

  const [categoryList, setCategoryList] = useState(null);
  const [newReleases, setNewReleases] = useState(null);


  const [tab, setTab] = useState("All");
  const [activeBg, setActiveBg] = useState("from-amber-900/40");
  

  // if (categoryList == null || newReleases == null) {
  //   return <div>Hello</div>;
  // }

  useEffect(() => {
      async function fetchCategoryList() {
        const token = localStorage.getItem("access_token");
  
        if (!token) return; // user not logged in
  
        const res = await fetch(
          "https://api.spotify.com/v1/browse/categories?country=IN&offset=20&limit=20",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        const data = await res.json();
        setCategoryList(data.categories.items);
      }
  
      async function fetchNewReleases() {
        const token = localStorage.getItem("access_token");
  
        if (!token) return; // user not logged in
  
        const res = await fetch(
          "https://api.spotify.com/v1/browse/new-releases?country=IN&offset=20&limit=20",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        const response = await res.json();
        setNewReleases(response.albums.items);
      }
  
      fetchCategoryList();
      fetchNewReleases();
    }, []);


  return (
    <div className={`ml-4 rounded-xl bg-gradient-to-b ${activeBg}   to-black p-6 transition-colors duration-900 ease-in-out`}>
      {/* Filter Pills */}
    {/* <Podcasts /> */}
      <div className="flex gap-2 mb-6">
        <Button onClick={()=> setTab("All")} className={`rounded-full  ${tab == "All" ? 'bg-white text-black' : 'bg-zinc-900/60'} hover:bg-zinc-400/60 hover:text-black h-8 px-4`}>
          All
        </Button>
        <Button
          variant="ghost"
          className="rounded-full bg-zinc-900/60 hover:bg-zinc-800 h-8 px-4"
        >
          Music
        </Button>
        <Button
          variant="ghost"
          className={`rounded-full  ${tab == "Podcasts" ? 'bg-white text-black' : 'bg-zinc-900/60'} hover:bg-zinc-400/60 h-8 px-4`}
          onClick={()=> setTab("Podcasts")}
        >
          Podcasts
        </Button>
      </div>

      {/* Top Grid */}
      {/* <div>
                <FeaturedSection />
            </div> */}
      {
        tab == "All" ? (
          <>
          <div className="grid grid-cols-4 gap-4 mx-2 mb-8">
        {categoryList &&
          categoryList.map((category, i) => {
            if (i < 8) {
              return (
                <Card
                  onMouseLeave={() => setActiveBg("from-amber-900/40")}
                  onMouseEnter={() =>
                    setActiveBg(categoryColors[i % categoryColors.length])
                  }
                  key={category.id}
                  onClick={() => handlePlaylistClick("categories", category.id)}
                  className="flex flex-row items-center h-6 gap-3 bg-zinc-500/50 border-none rounded-md overflow-hidden hover:bg-zinc-800/50 cursor-pointer"
                >
                  <img
                    src={category.icons[0]?.url}
                    alt="Hot Hits Telugu"
                    className="w-10 h-10 ml-2"
                  />
                  <div className="font-semibold text-white">
                    {category.name}
                  </div>
                </Card>
              );
            } else {
              return;
            }
          })}
      </div>

      {/* New Music Friday Section */}

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{"It's New Music Day!"}</h2>
          <Button variant="link" className="text-zinc-400 hover:text-white">
            Show all
          </Button>
        </div>

        <ScrollArea className="w-full  whitespace-nowrap">
          <div className="flex gap-4 pb-4">
            {newReleases &&
              newReleases.map((newRelease) => (
                <Card
                  key={newRelease.id}
                  onClick={() =>
                    handlePlaylistClick("new-releases", newRelease.id)
                  }
                  className="inline-block w-48 bg-zinc-900/50 border-none rounded-lg overflow-hidden hover:bg-zinc-800/50 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={newRelease.images[0]?.url}
                      alt="New Music Friday India"
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-2 left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">◉</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-zinc-400 mb-2">
                      {newRelease.name}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Made For Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Made For</h2>
        <div className="text-3xl font-bold mb-6">ss</div>
        <Button variant="link" className="text-zinc-400 hover:text-white mb-4">
          Show all
        </Button>
      </div>
          </>
        ) : (
          <Podcasts />
        )
      }
    </div>
  );
};

export default HomePageMainContent;
