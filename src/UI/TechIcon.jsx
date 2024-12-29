function TechIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-10 h-10 grayscale hover:grayscale-0 transition"
    />
  );
}

export default TechIcon;
