import React, { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card";


const Podcasts = () => {

    const [podcasts, setPodcasts] = useState([]);


     useEffect(() => {

        async function fetchUserPodcasts() {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    const res = await fetch(
      "https://api.spotify.com/v1/me/shows?limit=20",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    console.log(data.items);
    // setPodcasts(data.items.map(item => item.show));
  }

  fetchUserPodcasts();
    
        async function fetchPodcasts() {
          const token = localStorage.getItem("access_token");
    
          if (!token) return; // user not logged in
    
          const res = await fetch(
            "https://api.spotify.com/v1/search?q=podcast&type=show&limit=20",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
    
          const response = await res.json();
          console.log(response);
          setPodcasts(response);
        }
    
        fetchPodcasts();
      }, []);

      if(podcasts.length == 0) return;

  return (


    <div className='flex flex-col gap-9 w-[500px] min-w-[200px] mx-auto'>
        {
            podcasts.shows.items.map((podcast,i)=> {
                if(i<3){
                    return (
               
               <Card className="bg-gradient-to-b from-teal-600/40  to-black text-white border-none "  key={podcast.id} >
                <div className='flex items-center gap-4  '>
                    <img src={podcast.images[0]?.url} className='rounded-lg' width='100px' alt="None" />
                    <div>
                        <p className='font-bold text-2xl'>{podcast.name}</p>
                        <p  className="text-xs text-zinc-400">By {podcast.publisher}</p>
                    </div>
                </div>
                        <div className='mx-4'>
                            <img src={podcast.images[0]?.url} className=' rounded-lg' alt="None" />
                        {/* <p>{podcast.name}</p>
                        <p>{podcast.publisher}</p> */}
                        <p className='truncate-description my-4'>{podcast.description}</p>
                        </div>
                </Card>
            )
                }
            })
        }
    </div>
  )
}

export default Podcasts