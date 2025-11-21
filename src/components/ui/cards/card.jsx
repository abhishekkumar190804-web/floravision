const Card = ({ children, className = "" }) => (
  <div className={("rounded-2xl bg-white/5 " + className).trim()}>{children}</div>
);

export default Card;
