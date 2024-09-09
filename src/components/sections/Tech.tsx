import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies, technologies_2 } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className="h-10 w-full bg-none select-none"></div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies_2.map((technology) => (
          <div className="h-24 w-24" key={technology.name}>
            <img src={technology.icon} alt={technology.name} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
