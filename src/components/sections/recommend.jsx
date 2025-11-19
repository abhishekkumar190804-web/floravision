import { PlantAnglonemaImage, rightArrowIcon } from "@/assets";
import Card from "../cards/card";
import Button from "../ui/button";

const RecommendationSection = () => (
  <section className="flex flex-col items-center gap-10 py-10">
    <h2 className="section-heading-shadow text-center text-5xl font-semibold">Our Best o2</h2>
    <div>
      <Card className="flex">
        <div className="relative w-80">
          <div className="absolute -top-30 -left-30 size-120">
            <img
              src={PlantAnglonemaImage}
              alt="anglonema"
              className="drop-shadow-plant h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex max-w-[50vw] flex-col gap-4 p-20">
          <h2>We Have Small And Best O2 Plants Collection’s</h2>
          <p>
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen
            into the atmosphere through the process of photosynthesis.
          </p>
          <p>
            Many plants can help filter out pollutants and toxins from the air, such as
            formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier
            to breathe.
          </p>
          <div className="flex w-full justify-between">
            <Button className="px-10">Explore</Button>
            <div className="flex items-center gap-8">
              <img src={rightArrowIcon} alt="left" className="size-4 rotate-180 opacity-40" />
              <p className="text-xs font-bold text-white/70">
                <strong className="text-base">01/</strong>
                04
              </p>
              <img src={rightArrowIcon} alt="right" className="size-4" />
            </div>
          </div>
        </div>
      </Card>
    </div>
    <div className="flex justify-center gap-1.5">
      <span className="size-2 w-5 rounded-full bg-white/75"></span>
      <span className="size-2 rounded-full bg-white/75"></span>
      <span className="size-2 rounded-full bg-white/75"></span>
    </div>
  </section>
);

export default RecommendationSection;
