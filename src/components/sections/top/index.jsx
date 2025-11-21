import { plants } from "@/config/top.config";
import SectionHeading from "../heading";
import Card from "./card";

const TopSection = () => (
  <section className="flex flex-col items-center gap-20 py-20">
    <SectionHeading title={"Our Top Selling Plants"} />
    <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
      {plants.map((props, i) => (
        <Card key={i} {...props} />
      ))}
    </div>
  </section>
);

export default TopSection;
