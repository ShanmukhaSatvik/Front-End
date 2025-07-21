import { useEffect, useRef, useState } from "react";
import Card from "./card";
function Player() {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    async function fetchSongs() {
      const res = await fetch(
        "https://itunes.apple.com/search?term=top%20hits&media=music&limit=10"
      );
      const data = await res.json();
      setSongs(data.results);
    }

    fetchSongs();
  }, []);

  useEffect(() => {
    if (songs.length > 0) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(songs[currentIndex].previewUrl);
    }
  }, [currentIndex, songs]);

  const playPause = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const goToNext = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRemove = (indexToRemove) => {
    setSongs((prev) => {
      const updated = prev.filter((_, i) => i !== indexToRemove);

      if (indexToRemove === currentIndex) {
        setCurrentIndex(0);
      } else if (indexToRemove < currentIndex) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }

      return updated;
    });
  };

  if (songs.length === 0)
    return <div className="text-center mt-5">Loading...</div>;

  const currentSong = songs[currentIndex];

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <img
          src={currentSong.artworkUrl100.replace("100x100", "400x400")}
          alt="Album Art"
          className="img-fluid rounded shadow mb-3"
          style={{ maxWidth: "300px" }}
        />
        <h3 className="fw-bold">{currentSong.trackName}</h3>
        <p className="text-muted fs-5">{currentSong.artistName}</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button
            className="btn btn-outline-secondary"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <i className="fas fa-arrow-left me-1"></i>Previous
          </button>
          <button className="btn btn-primary px-4" onClick={playPause}>
            <i className="fas fa-play me-2"></i>Play Preview
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={goToNext}
            disabled={currentIndex === songs.length - 1}
          >
            Next<i className="fas fa-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      <div className="p-3 rounded">
        <h5 className="mb-3">Playlist</h5>
        {songs.map((song, index) => (
          <Card
            key={song.trackId}
            image={song.artworkUrl60}
            title={song.trackName}
            artist={song.artistName}
            duration={song.trackTimeMillis}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Player;
