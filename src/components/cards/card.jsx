const Card = ({ children, className = "" }) => (
  <div className={("border border-white bg-white/6 rounded-2xl " + className).trim()}>{children}</div>
);

export default Card;
