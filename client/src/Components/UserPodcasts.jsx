import {useState, useEffect} from 'react'



const UserPodcasts = () => {

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
    setPodcasts(data.items.map(item => item.show));
  }


  fetchUserPodcasts();
    
  }, []);


  return (
    
    <div>
                {podcasts && (
                  podcasts.map((podcast)=> (
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900 cursor-pointer">
                      <img src={podcast.images[0]?.url} alt="" />
                      <div>
                        {/* <p>{podcast.name}</p>
                      <p>{podcast.publisher}</p> */}
                      <div className="text-sm font-medium truncate">{podcast.name}</div>
                      <div className="text-xs text-zinc-400">{podcast.publisher}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
  )
}

export default UserPodcasts