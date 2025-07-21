function Card({ image, title, artist, duration, onClick, onRemove, isActive }) {
  return (
    <div
      className={`position-relative d-flex align-items-center p-2 mb-2 rounded shadow-sm ${
        isActive ? "bg-primary text-white" : "bg-white text-dark"
      }`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {/* Remove Button */}
      <button
        className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1"
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click when removing
          onRemove();
        }}
      >
        &times;
      </button>

      {/* Song Info */}
      <img
        src={image}
        alt={title}
        className="rounded"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          marginRight: "15px",
        }}
      />
      <div className="flex-grow-1">
        <div className="fw-bold">{title}</div>
        <div className="text-muted small">{artist}</div>
      </div>
      <div className="text-muted small mt-5">{formatDuration(duration)}</div>
    </div>
  );
}

function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default Card;
