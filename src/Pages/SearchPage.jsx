import "./SearchPage.css";
import { useEffect, useState } from "react";
import AlbumCard from "../Components/AlbumCard.jsx";

const LAST_FM_API_KEY = "902f67fe2cc17e5800d84c5d4b5f80db";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const searchAlbums = async (albumName) => {
    const searchParams = new URLSearchParams({
      query: albumName,
    });
    const apiUrl = `http://localhost:4000/search?${searchParams}`;

    const response = await fetch(apiUrl, {
      method: "GET",
    });
    const data = await response.json();

    setSearchResults(data.map((album, key) => ({ ...album, key })));
  };

  return (
    <>
      <div className="SearchbarContainer">
        <h1 className="SearchText">Find an album</h1>
        <input
          className="SearchInput"
          placeholder="Search by album name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchAlbums(searchTerm);
          }}
        />
        <button onClick={() => searchAlbums(searchTerm)}>Search</button>
      </div>

      {searchResults?.length > 0 ? (
        <div className="SearchResults">
          {searchResults.map((album) => (
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
        <div className="emptySearchResults">
          <h2>No albums found</h2>
        </div>
      )}
    </>
  );
};

export default SearchPage;
