import {Magnet, BlurText} from "../Effects/Effects.jsx";
import {motion, useScroll, useTransform} from "framer-motion"
import {useRef} from "react";

const About = () => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start 35%", "start end"]
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "20deg"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div className="About container mx-auto" id="about">
      <h2 className="mt-20 text-center lg:text-5xl sm:text-3xl text-2xl font-semibold">About ℹ️</h2>
      <motion.div className="relative" ref={targetRef} style={{rotate, x, y, scale}}>
        <h4
          className="slides lg:mt-40 sm:mt-24 mt-20 mx-1.5 font-bold text-black font-sans lg:text-9xl sm:text-7xl text-5xl leading-none uppercase ">
                <span className="slide1">
                  <span>Hello🌐</span>
                  <span>Bonjour🇫🇷</span>
                  <span>Hola🇪🇸</span>
                  <span>おはよう🇯🇵</span>
                  <span>Bom Dia🇵🇹</span>
                  <span>你好🇨🇳</span>
                  <span>Guten Tag🇩🇪</span>
                  <span>Oyez Oyez🏰</span>
                  <span>Wesh🏴‍☠️</span>
                  <span>Hello🌐</span>
                </span>
        </h4>
      </motion.div>
      <h3 className="p-12 lg:mt-12 sm:mt-8 mt-6 lg:text-7xl sm:text-5xl text-3xl  font-sans text-center">
        <BlurText text="I&apos;m" delay={100} transi={2}/>
        <Magnet padding={200}><BlurText text="Randy" delay={300} space={0} transi={5} className="font-bold"/>
        </Magnet>
        <BlurText text="&sbquo; a french Developer." delay={100} transi={2}/>
        <p>
          <BlurText
            text="I love learning new things, whether it&apos;s in life or programming. My curiosity is always pushing me forward."
            delay={100}/>
          </p>
      </h3>
    </div>
  );
};

export default About;