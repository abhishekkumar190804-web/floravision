const PlantCard = ({ children,className }) => (
  <div className={("border border-white bg-white/5 rounded-3xl "+className).trim()}>
  <div className="rounded-xl ">
    {children}
  </div>
</div>

);

export default PlantCard;
