import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="mb-36">
      <h1 className="text-4xl font-semibold">About me</h1>
      <div className="flex flex-row items-center gap-12">
        <div className="mt-16 mb-10">
          <Image
            src="/images/michelle-profile.png"
            alt="Description of image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="text-xl leading-loose flex flex-col gap-6">
          <p>
            Hey there, I{`'`}m <b>Michelle Chen</b>!
          </p>
          <p>
            I am a <b>full-stack developer</b> with a passion for crafting
            innovative solutions. Graduating from the University of British
            Columbia with a Bachelor of Science in Computer Science, I{`'`}ve
            honed my coding and problem-solving skills, ready to tackle any
            challenge that comes my way.
          </p>
        </div>
      </div>
      <div className="text-xl leading-loose  flex flex-col gap-6">
        <p>
          My journey into technology began with a desire to explore and make a
          positive impact in human life. I aimed to develop coding projects that
          can help others make their lives easier.
        </p>
        <p>
          Beyond tech, I find joy in simple pleasures. Whether it{`'`}s losing
          myself in music 🎧, hitting the ski slopes ⛷️, or busting out some
          K-pop dance moves 💃, I{`'`}m always up for new adventures.
        </p>
      </div>
    </div>
  );
};

export default About;
