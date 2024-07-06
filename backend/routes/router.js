const express = require("express");
const router = express.Router();

const AlbumsJson = {
  albums: [
    {
      title: "Graduation",
      artist: "Kanye West",
      score: "5",
      cover_link:
        "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg",
      in_collection: "true",
    },
    {
      title: "Nevermind",
      artist: "Nirvana",
      score: "4",
      cover_link:
        "https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format",
      in_collection: "false",
    },
  ],
};

router.get("/collection", (req, res) => {
  res.send(AlbumsJson);
});

router.post("/addalbum", (req, res) => {
  const newAlbum = {
    title: "Revolver",
    artist: "The Beatles",
    score: "5",
    cover_link:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg",
    in_collection: "true",
  };

  AlbumsJson.albums = [...AlbumsJson.albums, newAlbum];

  res.send("Received post!");
});

module.exports = router;
