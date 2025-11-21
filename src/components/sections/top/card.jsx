import { shopIcon } from "@/assets";
import ClippedCard from "@/components/ui/cards/clipped";
import Button from "@/components/ui/button";

const Card = ({ img, description, price, title }) => (
  <div className="relative">
    <img
      src={img.src}
      alt={img.alt}
      className="absolute bottom-1/2 left-1/2 z-1 size-70 -translate-x-1/2"
    />
    <ClippedCard className="bg-[linear-gradient(147.93deg,rgba(255,255,255,0.2)_6.68%,rgba(0,0,0,0)_51.71%,rgba(255,255,255,0.2)_93.27%)] p-px drop-shadow-[0px_9px_18.4px_#00000040]">
      <div className="clipped bg-primary size-full">
        <ClippedCard className="flex size-full max-w-[410px] flex-col items-center p-6 backdrop-blur-xl lg:w-[22vw]">
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
    </ClippedCard>
  </div>
);

export default Card;
