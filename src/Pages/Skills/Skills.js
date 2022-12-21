import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

const Skills = () => {
  return (
    <div>
      <h3 className="text-3xl py-3 text-white">Skill</h3>
      <hr />
      <div className="bg-white m-5 p-32   rounded-xl">
        <div
          className="radial-progress m-2 text-sm lg:hover:text-blue-500"
          style={{ "--value": 0 }}
        >
          TypeScript
        </div>
        <div
          className="radial-progress m-2 text-sm lg:hover:text-blue-500"
          style={{ "--value": 20 }}
        >
          Node.js
        </div>
        <div
          className="radial-progress m-2 text-sm lg:hover:text-blue-500"
          style={{ "--value": 60 }}
        >
          Javascript Libraries
        </div>

        <div
          className="radial-progress m-2 text-sm lg:hover:text-blue-500"
          style={{ "--value": 80 }}
        >
          Web Design
        </div>
        <div
          className="radial-progress m-2 text-sm lg:hover:text-blue-500"
          style={{ "--value": 100 }}
        >
          React.js
        </div>
      </div>
    </div>
  );
};

export default Skills;
