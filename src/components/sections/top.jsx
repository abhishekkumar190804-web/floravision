import { plants } from "@/config/top.config";
import ClippedCard from "../cards/clipped";
import Button from "../ui/button";
import { shopIcon } from "@/assets";

const TopSection = () => (
  <section className="flex flex-col items-center gap-20 py-20">
    <h2 className="section-heading-shadow text-center text-5xl font-semibold">
      Our Top Selling Plants
    </h2>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {plants.map(({ img, description, price, title }, i) => (
        <ClippedCard key={i} className="flex flex-col items-center max-w-[22vw] p-6">
          <img src={img.src} alt={img.alt} className="mb-4 size-60" />
          <div className="text-start">

          <h3 className="text-lg">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="w-full mt-4 flex items-center justify-between">
            <h3 className="text-xl">{price}</h3>
            <Button className="border!">
              <img src={shopIcon} alt="shop" className="size-4"/>
            </Button>
          </div>
          </div>
        </ClippedCard>
      ))}
    </div>
  </section>
);

export default TopSection;
