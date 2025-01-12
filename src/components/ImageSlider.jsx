import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAB5emJSTQ0maQBQp07JI0EAkfGpvpTDq7GTnPFZJx00BKcZ6l6j4LVjeIqgk14-ZUIjZ-3uf2bmOrZazBINc8LG7KjIf8hlHqEUcBUjG~hGzwwc5QPOOFUHHnlr~29DiYy3WJwlwXLDuWnhcvsJtrnMZkUxnlPmBu-ryNmgl1wwyLlaZlXxrDxGArNhEmj6HV7LZLpKOnV33u~HyVYsxMqJ5ILqasMQzyEos~7QBYL~nE35NfOCsP~gno9awWKsf-SLcDlO5ueEGapOH6zUrGjY2Kk8-bbNYb02gWKhzfaAagZcydj2hUnDGwzPVq-lbweBVAPLMZSwTIW-It547w__",
    "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAB5emJSTQ0maQBQp07JI0EAkfGpvpTDq7GTnPFZJx00BKcZ6l6j4LVjeIqgk14-ZUIjZ-3uf2bmOrZazBINc8LG7KjIf8hlHqEUcBUjG~hGzwwc5QPOOFUHHnlr~29DiYy3WJwlwXLDuWnhcvsJtrnMZkUxnlPmBu-ryNmgl1wwyLlaZlXxrDxGArNhEmj6HV7LZLpKOnV33u~HyVYsxMqJ5ILqasMQzyEos~7QBYL~nE35NfOCsP~gno9awWKsf-SLcDlO5ueEGapOH6zUrGjY2Kk8-bbNYb02gWKhzfaAagZcydj2hUnDGwzPVq-lbweBVAPLMZSwTIW-It547w__",
    "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAB5emJSTQ0maQBQp07JI0EAkfGpvpTDq7GTnPFZJx00BKcZ6l6j4LVjeIqgk14-ZUIjZ-3uf2bmOrZazBINc8LG7KjIf8hlHqEUcBUjG~hGzwwc5QPOOFUHHnlr~29DiYy3WJwlwXLDuWnhcvsJtrnMZkUxnlPmBu-ryNmgl1wwyLlaZlXxrDxGArNhEmj6HV7LZLpKOnV33u~HyVYsxMqJ5ILqasMQzyEos~7QBYL~nE35NfOCsP~gno9awWKsf-SLcDlO5ueEGapOH6zUrGjY2Kk8-bbNYb02gWKhzfaAagZcydj2hUnDGwzPVq-lbweBVAPLMZSwTIW-It547w__",
    "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAB5emJSTQ0maQBQp07JI0EAkfGpvpTDq7GTnPFZJx00BKcZ6l6j4LVjeIqgk14-ZUIjZ-3uf2bmOrZazBINc8LG7KjIf8hlHqEUcBUjG~hGzwwc5QPOOFUHHnlr~29DiYy3WJwlwXLDuWnhcvsJtrnMZkUxnlPmBu-ryNmgl1wwyLlaZlXxrDxGArNhEmj6HV7LZLpKOnV33u~HyVYsxMqJ5ILqasMQzyEos~7QBYL~nE35NfOCsP~gno9awWKsf-SLcDlO5ueEGapOH6zUrGjY2Kk8-bbNYb02gWKhzfaAagZcydj2hUnDGwzPVq-lbweBVAPLMZSwTIW-It547w__",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative max-w-md mx-auto overflow-hidden min-h-[753px] bg-gray-100">
      <div className="w-full h-[753px] flex justify-center items-center">
        {/* Image Slide */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Arrows */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent p-4 rounded-full"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent p-4 rounded-full"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="text-center text-white flex flex-col gap-8 max-w-md p-6">
          <h5
            className="text-sm font-bold tracking-wider"
            style={{ fontFamily: "montserrat" }}
          >
            SUMMER 2020
          </h5>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "montserrat" }}
          >
            NEW COLLECTION
          </h2>
          <p className="text-sm" style={{ fontFamily: "montserrat" }}>
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-sm">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
