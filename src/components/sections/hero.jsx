import { PlantAnglonemaImage, playIcon, rightArrowIcon, RonnieReviewImage } from "@/assets";
import PlantCard from "../cards/plant";
import Button from "../ui/button";
import Card from "../cards/card";

const HeroSection = () => (
  <section className="mt-20 flex min-h-screen flex-col justify-between px-10 lg:flex-row">
    <div className="flex flex-col gap-15">
      <div className="lg:max-w-[40vw]">
        <h2 className="text-6xl font-semibold">Earth’s Exhale</h2>
        <p className="font-medium">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and
          its essential role in sustaining life.
        </p>
        <div className="mt-3 flex items-center gap-4">
          <Button className="px-6">Buy Now</Button>
          <Button className="rounded-full! p-3">
            <img src={playIcon} alt="play" className="size-4" />
          </Button>
          <p className="font-indieflower text-xl"> Live Demo...</p>
        </div>
      </div>

      <Card className="p-5 lg:w-[25vw]">
        <div className="flex items-center gap-6 pb-5">
          <img
            src={RonnieReviewImage}
            alt="ronnie"
            className="size-15 rounded-full object-cover object-center"
          />
          <div>
            <h3 className="text-xl">Ronnie Hamill</h3>
            stars
          </div>
        </div>
        I can't express how thrilled I am with my new natural plants! They bring such a fresh and
        vibrant energy to my home.
      </Card>
    </div>
    <div>
      <PlantCard className="p-2">
        <img src={PlantAnglonemaImage} alt="anglonema plant" className="size-70" />
        <h6 className="text-sm">indoor Plant</h6>
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Aglaonema plant</h2>
          <img src={rightArrowIcon} alt="swipe-right" className="size-3" />
        </div>
        <Button className="px-6">Buy Now</Button>
        <div className="flex p-2 justify-center gap-1.5">
          <span className="rounded-full size-1 bg-white w-5"></span>
          <span className="rounded-full size-1 bg-white"></span>
          <span className="rounded-full size-1 bg-white"></span>
        </div>
      </PlantCard>
    </div>
  </section>
);

export default HeroSection;
