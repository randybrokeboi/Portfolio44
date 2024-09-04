import {SKILLSB, SKILLSF} from "../constants/index.jsx";
import {Canvas, ShinyText, SpotlightCard} from '../Effects/Effects.jsx';

let color1 = "#ffffff";
let color2 = "#838399";
let color3 = "#515151";
let color4 = "#474747";


const Skills = () => {
  return (
    <div className="Skills container mx-auto" id="skills">
      <h2 className="mt-20 text-center text-5xl font-semibold">Skills 🛠️</h2>
      <SpotlightCard className="competence flex mt-20 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 text-white" spotlightColor="rgb(12,12,12,0.80)">
        <div className="compunique text-center">
          <ShinyText text="Front-End" disabled={false} speed={2.5} className='custom-class font-bold
          text-opacity-50 text-white font-sans text-2xl lg:text-[1.68rem]'/>
          <div className="py-10 px-4">
            {SKILLSF.map((skill, index) => (
              <div key={index} className="mb-2 flex  items-center justify-between">
                <div className="flex items-center">
                  {skill.icon}
                  <h3 className="px-6 ml-6 text-xl lg:text-3xl ">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="compunique text-center ">
          <ShinyText text="Back-End" disabled={false} speed={2.6} className='custom-class font-bold
          text-opacity-50 text-white font-sans text-2xl lg:text-[1.68rem]'/>
          <div className="py-10 px-4">
            {SKILLSB.map((skill, index) => (
              <div key={index} className="mb-8 flex items-center justify-between">
                <div className="flex items-center">
                  {skill.icon}
                  <h3 className="px-6 ml-6 text-xl lg:text-3xl ">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Skills;