import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100); // small delay to trigger animation after initial render
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <section className="flex justify-center">
      <section aria-label="Outer" className="border-2 rounded-lg w-[90%] overflow-hidden">
        <section
          aria-label="Inner"
          className="bg-green-600 text-center text-xl transition-all duration-700 ease-in-out py-1 rounded-lg"
          style={{
            width: `${animatedProgress}%`,
            color: `${animatedProgress > 5 ? "white" : "black"}`,
          }}
        >
          {animatedProgress}%
        </section>
      </section>
    </section>
  );
};

export default ProgressBar;
