import Carousel from "@/components/carousal";

export default function AboutPage() {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center gap-10">
      <p className={`text-xl font-bold`}>Sign In or Sign Up to view items for sale!</p>
      <Carousel />
      <p>1 Click Away From Your Doorstep!</p>
    </div>
  );
}
