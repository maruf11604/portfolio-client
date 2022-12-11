import React from "react";
import { Link } from "react-router-dom";

const AllProjects = ({ project }) => {
  console.log(project);
  const { _id, picture, Name, descriptions } = project;
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>{descriptions}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/project/${_id}`}
              className="btn bg-sky-500 hover:bg-sky-600 border-0"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
