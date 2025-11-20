const Card = ({ children, className = "" }) => (
  <div className={("rounded-2xl border border-white bg-white/6 " + className).trim()}>
    {children}
  </div>
);

export default Card;
