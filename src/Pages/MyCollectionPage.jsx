import { useState, useEffect } from "react";
import AlbumCard from "../Components/AlbumCard.jsx";

const MyCollectionPage = () => {
  const [albums, setAlbums] = useState([]);

  const getCollection = async () => {
    const response = await fetch("http://localhost:4000/collection");
    const data = await response.json();
    const albumsWithIds = data.map((album) => {
      return {
        ...album,
        key: album.id,
      };
    });

    setAlbums(albumsWithIds);
  };

  const addAlbum = async () => {
    await fetch("http://localhost:4000/addalbum", {
      method: "Put",
    });

    getCollection();
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <>
      <button
        className="addAlbumButton"
        onClick={() => {
          addAlbum();
        }}
      >
        Add album
      </button>

      {albums?.length > 0 ? (
        <div className="albumsContainer">
          {albums.map((album) => (
            <AlbumCard
              title={album.title}
              artist={album.artist}
              score={album.score}
              cover_art_link={album.cover_art_link}
              in_collection={album.in_collection}
              key={album.key}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No albums yet. Start listening!</h2>
        </div>
      )}
    </>
  );
};

export default MyCollectionPage;
