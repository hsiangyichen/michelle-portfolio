"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about" className="">
      <h1 className="text-4xl font-semibold">About me</h1>
      <div className="flex flex-col items-center justify-center w-full  ">
        <div className="w-full  max-w-[1000px]">
          <div className="flex flex-row items-center gap-12 ">
            <div className="mt-16 mb-10">
              <Fade duration={1500}>
                <Image
                  src="/images/michelle-profile.png"
                  alt="Description of image"
                  width={1000}
                  height={1000}
                />
              </Fade>
            </div>
            <Fade duration={1500}>
              <div className="text-xl leading-loose flex flex-col gap-6">
                <p>
                  Hey there, I{`'`}m <b>Michelle Chen</b>!
                </p>
                <p>
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
          <div className="text-xl leading-loose  flex flex-col gap-6">
            <Fade duration={1500} delay={200}>
              <p>
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
              <p className="pt-16">
                💡 Fun Fact: I have a pet hamster which is on a diet! Her name
                is Milk!
              </p>
            </Fade>
            <Fade duration={1500} delay={300}>
              <p className="pb-16 flex items-center ">
                Let’s help my hamster find her favorite food!
                <span>
                  <Image
                    src="/images/seed.png"
                    alt="seed"
                    width={650}
                    height={650}
                    style={{ width: "100%", height: "65px" }}
                  />
                </span>
              </p>
            </Fade>
          </div>
        </div>
      </div>{" "}
      <Fade duration={1500} delay={300}>
        <iframe
          src="https://hamster-jumping-game.vercel.app/"
          className="w-full h-[280px]"
          title="Hamster Jumping Game"
          frameBorder="0"
        />
      </Fade>
    </div>
  );
};

export default About;
