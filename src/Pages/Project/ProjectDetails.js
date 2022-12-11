import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const data = useLoaderData();
  const {
    Name,
    bulletPoints,
    descriptions,
    gitRepoClient,
    gitRepoServer,
    liveSite,
    picture,
    screenshots,
  } = data;
  console.log(data);
  return (
    <div className="py-3">
      <p className="text-3xl text-white">Details</p>
      <hr />
      <div className="grid grid-cols-2 gap-2 p-12">
        <img src={screenshots[0].image1} alt="" />
        <img src={screenshots[0].image2} alt="" />
        <img src={screenshots[0].image3} alt="" />
        <img src={screenshots[0].image4} alt="" />
      </div>
      <div className="card  w-full bg-base-100 shadow-xl p-12">
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p className="text-left">{descriptions}</p>
          <ul className="list-disc text-left">
            <li>{bulletPoints[0].point1}</li>
            <li>{bulletPoints[0].point2}</li>
            <li>{bulletPoints[0].point3}</li>
            <li>{bulletPoints[0].point4}</li>
            <li>{bulletPoints[0].point5}</li>
          </ul>
          <a className="text-blue-600 text-left" href={liveSite}>
            Live-Website
          </a>
          <a className="text-blue-600 text-left" href={gitRepoClient}>
            Client
          </a>
          <a className="text-blue-600 text-left" href={gitRepoServer}>
            Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
