import { logoIcon, searchIcon, shopIcon } from "@/assets";
import { headerNavigation } from "@/config/navigation.config";

const Header = () => (
  <header className="flex w-full items-center justify-between px-10 pt-10">
    <div className="flex cursor-pointer items-center gap-2 text-2xl font-black">
      <img src={logoIcon} alt="plant" className="drop-shadow-logo size-8" />
      FloraVision.
    </div>
    <ul className="font-indieflower hidden gap-5 text-xl lg:flex">
      {headerNavigation.map(({ name, img },i) => (
        <li key={i} className="group cursor-pointer">
          {img ? (
            <div className="flex items-center gap-1">
              {name}
              <img
                src={img.src}
                alt={img.alt}
                className="size-3 -rotate-180 group-hover:rotate-0 motion-safe:duration-300 motion-reduce:duration-[0ms]"
              />
            </div>
          ) : (
            name
          )}
          <span className="block h-px w-0 rounded-full bg-white group-hover:w-full motion-safe:duration-300 motion-reduce:duration-[0ms]"></span>
        </li>
      ))}
    </ul>
    <div className="flex items-center gap-5">
      <button className="hidden cursor-pointer lg:block">
        <img src={searchIcon} alt="search" className="size-5" />
      </button>
      <button className="hidden cursor-pointer lg:block">
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
