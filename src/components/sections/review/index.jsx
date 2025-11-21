import { reviews } from "@/config/review.config";
import ClippedCard from "../../cards/clipped";
import Stars from "./stars";
import SectionHeading from "../heading";
import Card from "./card";

const ReviewSection = () => (
  <section className="flex flex-col items-center gap-20 py-20">
    <SectionHeading title={"Customer Review"} />
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {reviews.map((props, i) => (
        <Card key={i} {...props} />
      ))}
    </div>
  </section>
);

export default ReviewSection;
