import React from "react";

const CustomRating = ({ rating, totalStars = 5, className = "" }) => {
  // Memastikan rating dalam batas yang benar
  const ratingValue = Math.min(Math.max(0, rating), totalStars);

  // Membuat array dengan panjang totalStars
  const stars = Array.from({ length: totalStars }, (_, index) => {
    // Menentukan apakah bintang ini penuh, setengah, atau kosong
    const isFilled = index < Math.floor(ratingValue);
    return (
      <span key={index} className={className}>
        {isFilled ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </span>
    );
  });

  return <div className="flex items-center">{stars}</div>;
};

export default CustomRating;
