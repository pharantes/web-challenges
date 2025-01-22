import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton({ isFavorite, id, onClick }) {
  return (
    <button
      id={id}
      className="favorite-button"
      onClick={onClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
