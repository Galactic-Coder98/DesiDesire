import Carousel from "@/components/carousal";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center gap-10">
      <p className={`${title()} text-md !text-md`}>Sign In or Sign Up to view items for sale!</p>
      <Carousel />
      <p>Items at DESIDESIRE are one click away from your door!</p>
    </div>
  );
}
