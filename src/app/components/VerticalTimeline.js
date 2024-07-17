import { motion } from "framer-motion";
import "./VerticalTimeline.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const VerticalTimeline = ({ experienceLeftData, experienceRightData }) => {
  let isLeft = true; // Variable to track whether to display on left or right side

  return (
    <div className="timeline">
      {/* Iterate over both left and right data arrays */}
      {[...experienceLeftData, ...experienceRightData].map(
        (experience, index) => {
          // Determine the class name based on whether it's left or right
          const isLeftItem = isLeft ? true : false;
          // Toggle the value of isLeft for the next iteration
          isLeft = !isLeft;

          return (
            <TimelineItem
              key={`${experience.id}-${index}`}
              experience={experience}
              isLeftItem={isLeftItem}
            />
          );
        }
      )}
    </div>
  );
};

const TimelineItem = ({ experience, isLeftItem }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // To trigger animation every time the item enters the view
    threshold: 0.1, // Customize this threshold as needed
  });

  const className = isLeftItem ? "timeline-item-left" : "timeline-item-right";
  const iconDirection = isLeftItem ? "icon-left" : "icon-right";
  const initialX = isLeftItem ? -100 : 100; // Changed the initial X value
  const bounceStiffness = 400; // Adjust the stiffness of the bounce effect
  const bounceDamping = 20; // Adjust the damping of the bounce effect

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: initialX }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: bounceStiffness,
        damping: bounceDamping,
      }}
    >
      <motion.div
        className={`icon ${iconDirection}`}
        initial={{ scale: 0.5 }}
        animate={inView ? { scale: 1.0 } : { scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-[#ccc]">{experience.icon}</div>
      </motion.div>

      <div className={`arrow ${isLeftItem ? "arrow-left" : "arrow-right"}`}>
        <div className="triangle"></div>
      </div>
      <div className="bg-white py-8 px-6 rounded-md">
        <div className="flex items-center gap-6">
          <Image
            src={experience.image}
            alt={experience.title}
            width={70}
            height={70}
            className="w-10 sm:w-20 xl:w-28"
          />
          <h3 className="text-xl 2xl:text-2xl font-semibold">
            {experience.institution}
          </h3>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between py-4">
          <h3>{experience.title}</h3>
          <p className="text-xs">{experience.date}</p>
        </div>
        <ul className="list-disc pl-6 text-sm flex flex-col gap-2">
          {experience.description.map((desc, index) => (
            <li key={`${experience.id}-${index}`}>{desc}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default VerticalTimeline;
