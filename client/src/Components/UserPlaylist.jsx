import {useState, useEffect} from 'react'



const UserPlaylist = () => {

      const [playlist, setPlaylist] = useState([]);


      

 useEffect(() => {
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
    setPlaylist(data.items);
  }

  fetchUserPlaylists();
    
  }, []);


  return (
    
    <div>
                 {playlist && (
                  playlist.map((track)=> (
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900 cursor-pointer">
                      <img src={track.images[0]?.url} width="65px" alt="None" />
                      <div>
                        {/* <p>{podcast.name}</p>
                      <p>{podcast.publisher}</p> */}
                      <div className="text-sm font-medium truncate">{track.name}</div>
                      <div className="text-xs text-zinc-400">{track.owner.display_name}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
  )
}

export default UserPlaylist