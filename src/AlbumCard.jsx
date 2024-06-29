import './App.css'

const AlbumCard = ({ album }) => {
  return (
    <div className="Album">
      <img className="AlbumCover" src={album.cover_link}
           alt="AlbumCard cover"/>
      <div className="AlbumInfo">
        <p><b>{album.title}</b></p>
        <p>{album.artist}</p>
      </div>
      <p>Score: {album.score}/5</p>
    </div>
  )
}

export default AlbumCard;