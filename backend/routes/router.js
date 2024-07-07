import express from "express";
const router = express.Router();
import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = "https://otkkepwnzkzgnzhdkdyc.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90a2tlcHduemt6Z256aGRrZHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyOTU4NjUsImV4cCI6MjAzNTg3MTg2NX0.p0R96TUr6IzJ6WI8UrMT7PKD1El6LOhAM_muRrqo6_Y";
const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY);

// Get the collection of saved albums
router.get("/collection", async (req, res) => {
  const { data } = await supabase.from("album_collection").select();
  res.send(data);
});

// Add an album to the collection
router.put("/addalbum", async (req, res) => {
  const newAlbum = {
    title: "Revolver",
    artist: "The Beatles",
    score: "5",
    cover_art_link:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg",
    in_collection: "true",
  };

  const { error } = await supabase.from("album_collection").insert(newAlbum);
  if (error) res.send(error);
  res.send("Album added!");
});

// Search for an album
router.get("/search", async (req, res) => {
  const params = new URLSearchParams({
    api_key: "902f67fe2cc17e5800d84c5d4b5f80db",
    method: "album.search",
    format: "json",
    album: req.query.query,
  });

  const apiUrl = `http://ws.audioscrobbler.com/2.0/?${params}`;

  const searchResults = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "User-Agent": "Mysic",
    },
  })
    .then((res) => res.json())
    .then((resJson) => resJson.results.albummatches.album);

  const searchResultsFormatted = searchResults.map((album) => {
    return {
      title: album.name,
      artist: album.artist,
      in_collection: false,
      cover_art_link: album.image[3]["#text"],
    };
  });

  res.send(searchResultsFormatted);
});

export default router;
