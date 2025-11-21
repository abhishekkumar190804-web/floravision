import { PlantainImage, shopIcon, TrendPlantImage } from "@/assets";
import Card from "../cards/card";
import Button from "../ui/button";
import SectionHeading from "./heading";
import { trends } from "@/config/trend.config";

const TrendSection = () => (
  <section className="flex flex-col items-center gap-20 pb-20">
    <SectionHeading title={"Our Trendy plants"} />

    {trends.map(({ title, img, description, price }, i) => (
      <Card
        key={i}
        className={`flex w-4/5 flex-col items-center justify-evenly pb-10 lg:pb-0 rounded-4xl backdrop-blur-2xl ${i > 0 && i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} md:rounded-[100px]`}
      >
        <div className="relative h-80 w-80">
          <img
            src={img.src}
            alt={img.alt}
            className="absolute bottom-10 aspect-601/732 w-100 object-cover"
          />
        </div>
        <div className="relative -top-10 flex flex-col gap-2 px-10 md:top-0 lg:max-w-[50%]">
          <h3 className="trend-card-heading-shadow text-xl font-semibold">{title}</h3>
          <p className="text-xs font-semibold">{description}</p>
          <p className="trend-card-price text-xl font-semibold">{price}</p>
          <div className="flex items-center gap-4">
            <Button className="px-10">Explore</Button>
            <Button>
              <img src={shopIcon} alt="shop" className="size-6" />
            </Button>
          </div>
        </div>
      </Card>
    ))}
  </section>
);

export default TrendSection;
