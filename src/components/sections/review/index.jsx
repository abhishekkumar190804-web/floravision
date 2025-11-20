import { reviews } from "@/config/review.config";
import ClippedCard from "../../cards/clipped";
import Stars from "./stars";

const ReviewSection = () => (
  <section className="flex flex-col items-center gap-20 py-20">
    <h2 className="section-heading-shadow text-center text-5xl font-semibold">Customer Review</h2>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {reviews.map(({ name, img, star, message }, i) => (
        <ClippedCard key={i} className="flex w-[23vw] flex-col items-center p-6">
          <div className="mb-4 flex w-full items-start gap-2">
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
