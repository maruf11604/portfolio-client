import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {
  faContactBook,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27p0h9e",
        "template_8xuxtgq",
        form.current,
        "HfSe3EP8EoiaWBWbV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="flex text-white py-6 text-3xl justify-around   items-center">
        <h2>Contact Me</h2>
        <FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon>
      </div>
      <hr />
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label className="text-white">Name</label>
          <input type="text" name="user_name" />
          <label className="text-white">Email</label>
          <input type="email" name="user_email" />
          <label className="text-white">Message</label>
          <textarea name="message" />
          <input className="bg-sky-500" type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 350px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: ;
      color: white;
      border: none;
    }
  }
`;
