import './App.css'
import AlbumCard from './AlbumCard.jsx'

const Albums =
  {
    "albums": [
      {
        "title": "Graduation",
        "artist": "Kanye West",
        "score": "5",
        "cover_link": "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg"
      },
      {
        "title": "Nevermind",
        "artist": "Nirvana",
        "score": "4",
        "cover_link": "https://images.prismic.io/milanote/df7eeb83a07162b45ac2e882cac055de9411054a_cover.jpg?auto=compress,format"
      }
    ]
  }


const App = () => {
  return (
    <>
      <h1>Music Tracker</h1>
      <AlbumCard album={Albums.albums[0]} />
      <AlbumCard album={Albums.albums[1]} />

    </>

  )
}

export default App