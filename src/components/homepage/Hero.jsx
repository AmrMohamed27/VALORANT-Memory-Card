import video from "../../assets/videos/hero.mp4";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full min-h-screen relative flex justify-center items-center">
      <div className="h-[90vh] absolute top-0 left-0 w-full -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover overflow-clip"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="w-[80%] mx-auto flex flex-col gap-8 justify-center items-center text-riot-white mb-16 z-10">
        <p>A memory card game based on Riot Games&apos; 5v5 tactical shooter</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg_text-8xl font-['Valorant'] ">
          valorant
        </h1>
        <Link
          className="bg-riot-red overflow-hidden -z-50 *:hover:translate-x-0  relative text-riot-white px-16 py-2 uppercase flex justify-center items-center"
          to={"/game"}
        >
          Play Free
          <span className=" bg-darkBlue left-[-5%] -translate-x-full skew-x-[-15deg] absolute transition-[transform] duration-500 ease-out w-[120%] h-full -z-50"></span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
