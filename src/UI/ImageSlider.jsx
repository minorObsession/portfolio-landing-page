import { useEffect, useRef, useState } from "react";

function ImageSlider({ images }) {
  console.log(images);
  const [currSlide, setCurrSlide] = useState(0);
  const maxSlide = images.length - 1;
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelector(".dots");

    const setSlideTransforms = () => {
      slides.forEach((s, i) => {
        s.style.opacity = i === currSlide ? "1" : "0";
      });
    };

    const goToSlide = (goTo) => {
      setCurrSlide(goTo);
      slides.forEach((s, i) => {
        s.style.opacity = i === goTo ? "1" : "0";
      });
    };

    const nextSlide = () => {
      if (currSlide === maxSlide) goToSlide(0);
      else goToSlide(currSlide + 1);
    };

    const prevSlide = () => {
      if (currSlide === 0) goToSlide(maxSlide);
      else goToSlide(currSlide - 1);
    };

    const createDots = () => {
      images.forEach((_, i) => {
        const html = `<button class="dot" data-slide="${i}"></button>`;
        dots.insertAdjacentHTML("beforeend", html);
      });
    };

    const activateDot = (slide) => {
      dots.querySelectorAll(".dot").forEach((dot) => {
        dot.classList.remove("dot-active");
      });

      dots
        .querySelector(`.dot[data-slide="${slide}"]`)
        .classList.add("dot-active");
    };

    const handleDotClick = (e) => {
      e.preventDefault();
      const clickedDot = e.target.closest(".dot");
      if (!clickedDot) return;
      const dotNumber = clickedDot.dataset.slide;
      goToSlide(dotNumber);
      activateDot(dotNumber);
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
        activateDot(currSlide);
      }
    };

    const addEventListeners = () => {
      dots.addEventListener("click", handleDotClick);
      slider
        .querySelector(".slider-btn-right")
        .addEventListener("click", nextSlide);
      slider
        .querySelector(".slider-btn-left")
        .addEventListener("click", prevSlide);
      document.addEventListener("keydown", handleKeyDown);
    };

    setSlideTransforms();
    createDots();
    activateDot(currSlide);
    addEventListeners();

    return () => {
      dots.removeEventListener("click", handleDotClick);
      slider
        .querySelector(".slider-btn-right")
        .removeEventListener("click", nextSlide);
      slider
        .querySelector(".slider-btn-left")
        .removeEventListener("click", prevSlide);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [images, maxSlide, currSlide]);

  // Early return if no images or images array is empty
  if (!images || images.length === 0) return null;

  return (
    <div
      className="slider"
      ref={sliderRef}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "200px",
        maxHeight: "400px",
      }}
    >
      <button
        className="slider-btn-left"
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        ←
      </button>
      <button
        className="slider-btn-right"
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        →
      </button>
      <div className="slides">
        {images.map((image, index) => (
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              transition: "opacity 0.5s ease",
              opacity: index === currSlide ? "1" : "0",
            }}
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slide"
          />
        ))}
      </div>
      <div className="dots"></div>
    </div>
  );
}

export default ImageSlider;
