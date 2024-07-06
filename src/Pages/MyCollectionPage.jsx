import { useState } from "react";
import AlbumCard from "../Components/AlbumCard.jsx";

const AlbumsJson = {
  albums: [
    {
      title: "Graduation",
      artist: "Kanye West",
      score: "5",
      cover_link:
        "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg",
      key: "graduation",
      in_collection: "true",
    },
    {
      title: "Nevermind",
      artist: "Nirvana",
      score: "4",
      cover_link:
        "https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format",
      key: "nevermind",
      in_collection: "false",
    },
  ],
};

const MyCollectionPage = () => {
  const [albums, setAlbums] = useState([AlbumsJson.albums[0]]);

  const addAlbum = (albumJson) => {
    setAlbums((albums) => [...albums, albumJson]);
  };

  return (
    <>
      <button
        className="addAlbumButton"
        onClick={() => {
          addAlbum(AlbumsJson.albums[1]);
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
