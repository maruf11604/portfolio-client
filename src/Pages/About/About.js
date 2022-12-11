import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex text-white py-6 text-3xl justify-around   items-center">
        <h2>About Me</h2>
        <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
      </div>
      <hr />
      <div className="p-6 text-white">
        Hey! this is my Portfolio, I am working in Web development from last 6
        month.I build some websites .It is my passion. so I have to say
        something about myself. Sometimes it is hard to introduce yourself
        because you know yourself so well that you do not know where to start
        with.I am a person who is positive about every aspect of life. There are
        many things I like to do, to see, and to experience. I like to read, I
        like to programming; I like to think, I like to dream; I like to talk, I
        like to listen. I like to see the sunrise in the morning, I like to see
        the moonlight at night; I like to feel the music flowing on my face, I
        like to smell the wind coming from the ocean. I like to look at the
        clouds in the sky with a blank mind, I like to do thought experiment
        when I cannot sleep in the middle of the night. I like flowers in
        spring, rain in summer, leaves in autumn, and snow in winter. I like to
        sleep early, I like to get up late; I like to be alone, I like to be
        surrounded by people. I like country’s peace, I like metropolis’ noise;
        I like good books and romantic movies.
      </div>
    </div>
  );
};

export default About;
