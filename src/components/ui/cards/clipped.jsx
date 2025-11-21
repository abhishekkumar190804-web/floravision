const ClippedCard = ({ children, className }) => (
  <div className={("clipped bg-white/5 " + className).trim()}>{children}</div>
);

export default ClippedCard;
