import { reviews } from "@/config/review.config";
import ClippedCard from "../../cards/clipped";
import Stars from "./stars";
import SectionHeading from "../heading";

const ReviewSection = () => (
  <section className="flex flex-col items-center gap-20 py-20">
    <SectionHeading title={"Customer Review"} />
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {reviews.map(({ name, img, star, message }, i) => (
        <ClippedCard key={i} className="flex w-[23vw] flex-col justify-evenly p-6">
          <div className="mb-4 flex w-full items-start gap-6">
            <img
              src={img.src}
              alt={img.alt}
              className="size-10 rounded-full object-cover object-center"
            />
            <div>
              <h3>{name}</h3>
              <Stars star={star} size={3} />
            </div>
          </div>
          <p>{message}</p>
        </ClippedCard>
      ))}
    </div>
  </section>
);

export default ReviewSection;
