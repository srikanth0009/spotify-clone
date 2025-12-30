import { createContext, useContext, useRef, useState, useEffect , useMemo} from "react";

const AudioStateContext = createContext(null);
const AudioActionsContext = createContext(null);


export function AudioProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Attach audio events
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => setIsPlaying(false);


    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);

  const playTrack = (track) => {
    console.log(track);
    if (!track?.url) return;

    const audio = audioRef.current;

    if (audio.src !== track.url) {
      audio.src = track.url;
    }

    audio.play();
    setTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const seek = (time) => {
    audioRef.current.currentTime = time;
  };

  const changeVolume = (value) => {
    audioRef.current.volume = value;
    setVolume(value);
  };

   const stateValue = useMemo(
    () => ({
      track,
      isPlaying,
      progress,
      duration,
      volume,
    }),
    [track, isPlaying, progress, duration, volume]
  );

  const actionsValue = useMemo(
    () => ({
      playTrack,
      togglePlay,
      seek,
      changeVolume,
    }),
    []
  );


   return (
    <AudioStateContext.Provider value={stateValue}>
      <AudioActionsContext.Provider value={actionsValue}>
        {children}
      </AudioActionsContext.Provider>
    </AudioStateContext.Provider>
  );
}

/* ================= HOOKS ================= */
export const useAudioState = () => {
  const ctx = useContext(AudioStateContext);
  if (!ctx) throw new Error("useAudioState must be used inside AudioProvider");
  return ctx;
};

export const useAudioActions = () => {
  const ctx = useContext(AudioActionsContext);
  if (!ctx) throw new Error("useAudioActions must be used inside AudioProvider");
  return ctx;
};




//   return (
//     <AudioContext.Provider
//       value={{
//         track,
//         isPlaying,
//         progress,
//         duration,
//         volume,
//         playTrack,
//         togglePlay,
//         seek,
//         changeVolume,
//       }}
//     >
//       {children}
//     </AudioContext.Provider>
//   );
// }

// export const useAudio = () => useContext(AudioContext);
// export const useAudioActions = () => useContext(AudioActionsContext);

