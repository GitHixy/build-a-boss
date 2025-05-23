import React from "react";
import { FaVolumeMute, FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { useMusic } from "../contexts/MusicContext";
import "../App.css";

function MusicToggle({ className = "" }) {
  const { audioRef, muted, setMuted, volume, setVolume } = useMusic();

  return (
    <div className={`music-toggle ${className}`}>
      {/* audio element gestito dal context, non serve qui */}
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
