import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import {
  faContactBook,
  faFile,
  faHome,
  faLightbulb,
  faMessage,
  faPeopleGroup,
  faSkiing,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../img/maruf.jpg";
const Main = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("MarufAhmed.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MarufAhmed.pdf";
        alink.click();
      });
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-button" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col    bg-gradient-to-r from-zinc-500 via-gray-600 to-slate-500">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-button" className="drawer-overlay "></label>

          <ul className="menu p-4 w-64 bg-slate-900 text-white ">
            <li className="cursor-default">
              <div className="card w-44 cursor-default bg-slate-700 shadow-xl image-full">
                <figure>
                  <img
                    src={profileImg}
                    className="h-1/2 cursor-default "
                    alt="Shoes"
                  />
                </figure>
                <div className="align-bottom"></div>
              </div>
            </li>
            <li className="mt-6 hover:bg-sky-700 rounded-2xl">
              <div>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                <Link to="/">Home</Link>
              </div>
            </li>
            <li className=" hover:bg-sky-700 rounded-2xl">
              <div>
                <FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon>
                <Link onClick={onButtonClick}>Resume</Link>
              </div>
            </li>
            <li className=" hover:bg-sky-700 rounded-2xl">
              <div>
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                <Link to="/project">Projects</Link>
              </div>
            </li>
            <li className=" hover:bg-sky-700 rounded-2xl">
              <div>
                <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                <Link to="/skill">Skills</Link>
              </div>
            </li>
            <li className=" hover:bg-sky-700 rounded-2xl">
              <div>
                <FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon>
                <Link to="/contact">Contact Me</Link>
              </div>
            </li>
            <li className=" hover:bg-sky-700 rounded-2xl">
              <div>
                <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                <Link to="/about">About</Link>
              </div>
            </li>
            <li className=" hover:bg-sky-700 rounded-2xl">
              <div>
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                <Link to="/blogs">Blogs</Link>
              </div>
            </li>

            <div className="flex items-end  ">
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    fill="white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:fill-blue-300"
                  >
                    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/maruf-ahmed12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    fill="white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:fill-blue-300"
                  >
                    <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/maruf11604">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    fill="white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:fill-blue-300"
                  >
                    <path
                      d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                      opacity=".3"
                    ></path>
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=h8TGZAeHvm8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="hover:fill-blue-300"
                  >
                    <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"></path>
                  </svg>
                </a>
              </li>
            </div>
            <p className="flex bg-slate-900 text-white">
              Copyright © 2022 -All right <br /> reserved by Maruf Ahmed
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
