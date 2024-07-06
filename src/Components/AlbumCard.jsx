import "./AlbumCard.css";

const AlbumCard = ({ title, artist, score, cover_link, in_collection }) => {
  return (
    <div className="Album">
      <div className="AlbumInfoAndCoverContainer">
        <img className="AlbumCover" src={cover_link} alt="AlbumCard cover" />

        <div className="AlbumInfo">
          <p>
            <b>{title}</b>
          </p>
          <p>{artist}</p>
        </div>
      </div>

      {in_collection ? (
        <p>Score: {score}/5</p>
      ) : (
        <button>Add to collection</button>
      )}
    </div>
  );
};

export default AlbumCard;
