const Card = ({ children, className = "" }) => (
  <div
    className={("rounded-2xl border border-white bg-white/5 backdrop-blur-2xl " + className).trim()}
  >
    {children}
  </div>
);

export default Card;
