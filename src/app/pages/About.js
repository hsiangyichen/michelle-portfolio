"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about" className="px-5 sm:p-0 pt-12 xl:pt-24 ">
      <div className="flex flex-col items-center justify-center w-full  ">
        <div className="w-full  max-w-[1000px]">
          {" "}
          <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-8 xl:mb-8">
            About me
          </h1>
          <div className="flex flex-col s:flex-row s:items-center s:justify-center 2xl:gap-12 md:gap-6 s:gap-3 gap-8">
            <Fade duration={1500}>
              <div className="hidden s:block pr-0 xl:pr-6 my-4 s:my-6 md:mt-6 md:mb-4 2xl:mt-16 2xl:mb-10  w-[160px] lg:w-[200px] 2xl:w-full">
                <Image
                  src="/images/michelle-profile.png"
                  alt="Description of image"
                  width={800}
                  height={800}
                />
              </div>
            </Fade>
            <Fade duration={1500}>
              <div className="text-base lg:text-lg 2xl:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose 2xl:leading-loose flex flex-col s:gap-6">
                <p className="mb-6">
                  Hey there, I{`'`}m <b> Michelle Chen</b>!
                </p>
                <div className="flex w-full items-center justify-center mb-6 s:hidden">
                  <Image
                    src="/images/michelle-about.png"
                    alt="Description of image"
                    width={800}
                    height={800}
                    className="w-2/3 rounded-xl "
                  />
                </div>

                <p className="hidden lg:block">
                  I am a <b>full-stack developer</b> with a passion for crafting
                  innovative solutions. Graduating from the University of
                  British Columbia with a Bachelor of Science in Computer
                  Science, I{`'`}
                  ve honed my coding and problem-solving skills, ready to tackle
                  any challenge that comes my way.
                </p>
              </div>
            </Fade>
          </div>
          <div className="flex flex-col text-base lg:text-lg 2xl:text-xl leading-loose md:leading-loose lg:leading-loose xl:leading-loose 2xl:leading-loose">
            <Fade duration={1500} delay={200}>
              <p className="block lg:hidden mb-6">
                I am a <b>full-stack developer</b> with a passion for crafting
                innovative solutions. Graduating from the University of British
                Columbia with a Bachelor of Science in Computer Science, I{`'`}
                ve honed my coding and problem-solving skills, ready to tackle
                any challenge that comes my way.
              </p>
            </Fade>
            <Fade duration={1500} delay={200}>
              <p className="mb-6">
                My journey into technology began with a desire to explore and
                make a positive impact in human life. I aimed to develop coding
                projects that can help others make their lives easier.
              </p>
            </Fade>
            <Fade duration={1500} delay={300}>
              <p>
                Beyond tech, I find joy in simple pleasures. Whether it{`'`}s
                losing myself in music 🎧, hitting the ski slopes ⛷️, or busting
                out some K-pop dance moves 💃, I{`'`}m always up for new
                adventures.
              </p>
            </Fade>
            <Fade duration={1500} delay={300}>
              <p className="hidden xl:block py-14 2xl:py-16 mb-6">
                💡 Fun Fact: I have a pet hamster which is on a diet! Her name
                is Milk!
                <br /> &nbsp;&nbsp;&nbsp;&nbsp; Let’s help my hamster find her
                Sunflower Seed!
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <Fade duration={1500} delay={300}>
        <div className="hidden xl:flex items-center justify-center w-full ">
          <iframe
            src="https://hamster-jumping-game.vercel.app/"
            className="w-full h-[280px] max-w-[1000px]"
            title="Hamster Jumping Game"
            frameBorder="0"
          />
        </div>
      </Fade>
    </div>
  );
};

export default About;
