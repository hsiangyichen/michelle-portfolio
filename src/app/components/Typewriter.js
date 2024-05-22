"use client";
import React, { useEffect, useState } from "react";

const Typewriter = ({ texts, period }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);

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
        setDelta(500);
      } else {
        const newDelta = isDeleting
          ? (200 - Math.random() * 100) / 2
          : 200 - Math.random() * 100;
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
      <span className="wrap">{text}</span>
      <style jsx>{`
        .wrap {
          //   font-size: 3rem;
          border-right: 0.12em solid #000;
        }
      `}</style>
    </h1>
  );
};

export default Typewriter;
