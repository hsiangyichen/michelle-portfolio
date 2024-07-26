"use client";
import React, { useEffect, useState } from "react";

const Typewriter = ({ texts, period }) => {
  const [text, setText] = useState("a Software Engineer");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100 - Math.random() * 50); // Adjusted for faster typing

  useEffect(() => {
    const handleTick = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200); // Adjusted for faster switching
      } else {
        const newDelta = isDeleting
          ? (100 - Math.random() * 50) / 2 // Adjusted for faster deletion
          : 100 - Math.random() * 50; // Adjusted for faster typing
        setDelta(newDelta);
      }
    };

    const timer = setTimeout(() => {
      handleTick();
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, delta, loopNum, texts, period]);

  return (
    <h1>
      <span className="wrap">{text || "\u00A0"}</span>{" "}
      {/* Non-breaking space */}
    </h1>
  );
};

export default Typewriter;
