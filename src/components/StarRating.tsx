import { useState } from "react";
import { Star } from "./Star";
const StarRating = ({ numStars = 5 }) => {
  const [rating, setRating] = useState(0);
  return (
    <>
      {[...Array(numStars)].map((_, i) => (
        <Star key={i} onClick={() => setRating(i + 1)} active={i < rating} />
      ))}
    </>
  );
};

export default StarRating;
