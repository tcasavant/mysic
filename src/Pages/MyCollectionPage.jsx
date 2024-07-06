import { useState, useEffect } from "react";
import AlbumCard from "../Components/AlbumCard.jsx";

const MyCollectionPage = () => {
  const [albums, setAlbums] = useState([]);

  const getCollection = async () => {
    const response = await fetch("http://localhost:4000/collection");
    const data = await response.json();
    const albumsWithIds = data.albums.map((album) => {
      return {
        ...album,
        key: Math.random(),
      };
    });

    setAlbums(albumsWithIds);
  };

  const addAlbum = async () => {
    await fetch("http://localhost:4000/addalbum", {
      method: "Post",
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
              cover_link={album.cover_link}
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
