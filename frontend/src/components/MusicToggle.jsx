import React, { useRef, useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import "../App.css";

// Props: src (string, required), defaultVolume (number, 0-1), className (string)
function MusicToggle({ src, defaultVolume = 0.18, className = "" }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  // Autoplay on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = defaultVolume;
      audioRef.current.play().catch(() => {});
    }
  }, [src, defaultVolume]);

  return (
    <div className={`music-toggle ${className}`}>
      <audio ref={audioRef} src={src} loop autoPlay />
      <button
        className="music-btn"
        onClick={() => setMuted((m) => !m)}
        title={muted ? "Unmute" : "Mute"}
      >
        {muted || volume === 0 ? <FaVolumeMute /> : volume < 0.5 ? <FaVolumeDown /> : <FaVolumeUp />}
      </button>
      <input
        className="music-slider"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={muted ? 0 : volume}
        onChange={e => {
          setVolume(Number(e.target.value));
          if (Number(e.target.value) === 0) setMuted(true);
          else setMuted(false);
        }}
        title="Volume"
      />
    </div>
  );
}

export default MusicToggle;
