const Button = ({ children, className = "" }, ...props) => (
  <button
    className={(
      "cursor-pointer rounded-xl border-2 border-white p-2 hover:bg-white/5 motion-safe:duration-300 motion-reduce:duration-[0ms] " +
      className
    ).trim()}
    {...props}
  >
    {children}
  </button>
);
export default Button;
