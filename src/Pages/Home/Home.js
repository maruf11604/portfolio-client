import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <div className="grid img  justify-center items-center ">
        <div>
          <h2 className="text-6xl ">
            <span className="text-white">Maruf</span>{" "}
            <span className="text-blue-500">Ahmed</span>
          </h2>
          <div className="text-white text-2xl">
            <Typewriter
              options={{
                strings: ["I am a web developer"],
                autoStart: true,
                loop: true,
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
      <div className="pb-4 bg-gradient-to-r from-zinc-500 via-gray-600 to-slate-500">
        <Skills></Skills>
      </div>
    </div>
  );
};

export default Home;
