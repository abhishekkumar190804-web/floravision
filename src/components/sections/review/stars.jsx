import { FullStarIcon, HalfStarIcon } from "@/assets";

const Stars = ({ star, size = 4, className }) => (
  <div className={("flex " + className).trim()}>
    {Array.from({ length: Math.floor(star) }).map((_, i) => (
      <img key={i} src={FullStarIcon} alt="star" className={`size-${size}`} />
    ))}
    {star - Math.floor(star) >= 0.5 && (
      <img src={HalfStarIcon} alt="star" className={`size-${size}`} />
    )}
  </div>
);

export default Stars;
