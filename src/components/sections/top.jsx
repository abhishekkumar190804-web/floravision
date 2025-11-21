import { plants } from "@/config/top.config";
import ClippedCard from "../cards/clipped";
import Button from "../ui/button";
import { shopIcon } from "@/assets";
import SectionHeading from "./heading";

const TopSection = () => (
  <section className="flex flex-col items-center gap-20 py-20">
    <SectionHeading title={"Our Top Selling Plants"} />
    <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
      {plants.map(({ img, description, price, title }, i) => (
        <div className="relative">
          <img
            src={img.src}
            alt={img.alt}
            className="absolute bottom-1/2 left-1/2 z-1 size-70 -translate-x-1/2"
          />
          <ClippedCard
            key={i}
            className="flex h-full max-w-[410px] flex-col items-center p-6 lg:w-[22vw]"
          >
            <div className="mt-40 text-start">
              <h3 className="text-lg">{title}</h3>
              <p className="text-sm">{description}</p>
              <div className="mt-4 flex w-full items-center justify-between">
                <h3 className="text-xl">{price}</h3>
                <Button className="border!">
                  <img src={shopIcon} alt="shop" className="size-4" />
                </Button>
              </div>
            </div>
          </ClippedCard>
        </div>
      ))}
    </div>
  </section>
);

export default TopSection;
