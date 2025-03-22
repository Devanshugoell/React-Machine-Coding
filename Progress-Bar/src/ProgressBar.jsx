import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <>
      <section className="flex justify-center">
        <section aria-label="Outer" className="border-2 rounded-lg w-[90%]">
          <section
            aria-label="Inner"
            className="bg-green-600 text-center text-xl transition-all duration-500 ease-in-out rounded-lg"
            style={{
              width: `${progress}%`,
              color: `${progress > 5 ? "white" : "black"}`,
            }}
          >
            {progress}%
          </section>
        </section>
      </section>
    </>
  );
};

export default ProgressBar;
