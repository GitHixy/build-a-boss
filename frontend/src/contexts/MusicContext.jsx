import React, { createContext, useContext, useRef, useState, useEffect } from "react";

const MusicContext = createContext();

export function MusicProvider({ children, src, defaultVolume = 0.18 }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);

  // Singleton audio element
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new window.Audio(src);
      audio.loop = true;
      audio.volume = defaultVolume;
      audio.autoplay = true;
      audioRef.current = audio;
    }
    const audio = audioRef.current;
    audio.volume = volume;
    audio.muted = muted;
    if (audio.paused) {
      audio.play().catch(() => {});
    }
    // Do not clean up audio on unmount (singleton)
    return () => {};
  }, [src, defaultVolume, volume, muted]);

  // Optionally persist mute/volume in localStorage
  useEffect(() => {
    localStorage.setItem("music-muted", JSON.stringify(muted));
    localStorage.setItem("music-volume", JSON.stringify(volume));
  }, [muted, volume]);
  useEffect(() => {
    const m = localStorage.getItem("music-muted");
    const v = localStorage.getItem("music-volume");
    if (m !== null) setMuted(JSON.parse(m));
    if (v !== null) setVolume(JSON.parse(v));
  }, []);

  return (
    <MusicContext.Provider value={{ audioRef, muted, setMuted, volume, setVolume }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
