import "./SearchPage.css";
import { useEffect, useState } from "react";
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

const LAST_FM_API_KEY = "902f67fe2cc17e5800d84c5d4b5f80db";

const SearchPage = () => {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchAlbumsBasic = (albumName) => {
    const matchingAlbums = AlbumsJson.albums.filter(
      (album) => album.title.toLowerCase() === albumName.toLowerCase(),
    );
    console.log(matchingAlbums);
    setAlbums(matchingAlbums);
  };

  const searchAlbums = (albumName) => {};

  return (
    <>
      <div className="SearchbarContainer">
        <h1 className="SearchText">Find an album</h1>
        <input
          className="SearchInput"
          onChange={(e) => searchAlbumsBasic(e.target.value)}
          placeholder="Search by album name..."
        />
        <button>Search</button>
      </div>

      {albums?.length > 0 ? (
        <div className="SearchResults">
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
        <div className="emptySearchResults">
          <h2>No albums found</h2>
        </div>
      )}
    </>
  );
};

export default SearchPage;
