const SectionHeading = ({
  title,
  gradient = [
    "bg-[linear-gradient(226.11deg,#FBD300_0.4%,#FFFFFF_110.43%)]",
    "bg-[linear-gradient(406.11deg,#FBD300_0.4%,#FFFFFF_110.43%)]",
  ],
}) => (
  <h2 className="section-heading-shadow relative text-center text-5xl font-semibold">
    <div
      className={`corner absolute -bottom-3 -left-3 size-14 -rotate-90 ${gradient[0]} opacity-50`}
    ></div>
    {title}
    <div
      className={`corner absolute -top-2 -right-4 size-14 rotate-90 ${gradient[1]} opacity-50`}
    ></div>
  </h2>
);

export default SectionHeading;
