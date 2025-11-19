import { dropdownIcon, logoIcon, searchIcon, shopIcon } from "@/assets";

const Header = () => (
  <header className="flex w-full items-center justify-between px-10 pt-10">
    <div className="flex cursor-pointer items-center gap-2 text-2xl font-black">
      <img src={logoIcon} alt="plant" className="drop-shadow-logo size-8" />
      FloraVision.
    </div>
    <ul className="font-indieflower flex gap-5 text-xl">
      <li className="group cursor-pointer">
        Home
        <span className="block h-px w-0 rounded-full bg-white motion-safe:duration-300 motion-reduce:duration-[0ms] group-hover:w-full"></span>
      </li>
      <li className="group cursor-pointer">
        <div className="flex items-center gap-1">
          Plants Type
          <img
            src={dropdownIcon}
            alt="dropdownIcon"
            className="size-3 -rotate-180 group-hover:rotate-0 motion-safe:transition-transform motion-reduce:transition-none"
          />
        </div>
        <span className="block h-px w-0 rounded-full bg-white motion-safe:duration-300 motion-reduce:duration-[0ms] group-hover:w-full"></span>
      </li>
      <li className="group cursor-pointer">More
        <span className="block h-px w-0 rounded-full bg-white motion-safe:duration-300 motion-reduce:duration-[0ms] group-hover:w-full"></span>
      </li>
      <li className="group cursor-pointer">Contacts
        <span className="block h-px w-0 rounded-full bg-white motion-safe:duration-300 motion-reduce:duration-[0ms] group-hover:w-full"></span>
      </li>
    </ul>
    <div className="flex items-center gap-5">
      <button className="cursor-pointer">
        <img src={searchIcon} alt="search" className="size-5" />
      </button>
      <button className="cursor-pointer">
        <img src={shopIcon} alt="shop" className="size-6" />
      </button>
      <button className="group flex size-6 cursor-pointer flex-col items-end justify-evenly">
        <span className="h-1 w-full rounded bg-white"></span>
        <span className="h-1 w-3/4 rounded bg-white group-hover:w-full motion-safe:transition-all motion-reduce:transition-none"></span>
      </button>
    </div>
  </header>
);
export default Header;
