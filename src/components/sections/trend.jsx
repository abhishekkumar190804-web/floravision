import { PlantainImage, shopIcon, TrendPlantImage } from "@/assets";
import Card from "../cards/card";
import Button from "../ui/button";
import SectionHeading from "./heading";

const TrendSection = () => (
  <section className="flex flex-col items-center gap-20 pb-20">
    <SectionHeading title={"Our Trendy plants"} />

    <Card className="flex max-w-[90%] items-center justify-evenly rounded-[100px] backdrop-blur-2xl">
      <div className="relative h-80 w-80">
        <img
          src={PlantainImage}
          alt="Plantain Lillies"
          className="absolute bottom-10 aspect-601/732 w-100 object-cover"
        />
      </div>
      <div className="flex max-w-[50%] flex-col gap-2">
        <h3 className="trend-card-heading-shadow text-xl font-semibold">
          For Your Desks Decorations
        </h3>
        <p className="text-xs font-semibold">
          I recently added a beautiful desk decoration plant to my workspace, and it has made such a
          positive difference!
        </p>
        <p className="trend-card-price text-xl font-semibold">Rs. 599/-</p>
        <div className="flex items-center gap-4">
          <Button className="px-10">Explore</Button>
          <Button>
            <img src={shopIcon} alt="shop" className="size-6" />
          </Button>
        </div>
      </div>
    </Card>

    <Card className="flex max-w-[90%] flex-row-reverse items-center justify-evenly rounded-[100px] backdrop-blur-2xl">
      <div className="relative h-80 w-80">
        <img
          src={TrendPlantImage}
          alt="Plantain Lillies"
          className="absolute bottom-10 aspect-601/732 w-100 object-cover"
        />
      </div>
      <div className="flex max-w-[50%] flex-col gap-2">
        <h3 className="trend-card-heading-shadow text-xl font-semibold">
          For Your Desks Decorations
        </h3>
        <p className="text-xs font-semibold">
          I recently added a beautiful desk decoration plant to my workspace, and it has made such a
          positive difference!
        </p>
        <p className="trend-card-price text-xl font-semibold">Rs. 599/-</p>
        <div className="flex items-center gap-4">
          <Button className="px-10">Explore</Button>
          <Button>
            <img src={shopIcon} alt="shop" className="size-6" />
          </Button>
        </div>
      </div>
    </Card>
  </section>
);

export default TrendSection;
