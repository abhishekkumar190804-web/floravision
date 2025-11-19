const Button = ({ children, className="" }, ...props) => (
  <button className={("border-2 border-white hover:bg-white/5 rounded-xl p-2 cursor-pointer " + className).trim()} {...props}>
    {children}
  </button>
);
export default Button;
