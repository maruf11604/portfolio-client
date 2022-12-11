import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import img1 from "../.././img/Screenshot_3.png";
import img2 from "../.././img/Screenshot_4.png";
import img3 from "../.././img/Screenshot_5.png";
import AllProjects from "./AllProjects";

const Project = () => {
  const projects = useLoaderData();
  console.log(projects);

  return (
    <div>
      <h2 className="text-3xl text-white py-4">Projects</h2>
      <div className="grid   lg:grid-cols-3 sm:grid-cols-1  gap-4">
        {projects.map((project) => (
          <AllProjects key={project._id} project={project}></AllProjects>
        ))}
      </div>
    </div>
  );
};

export default Project;
