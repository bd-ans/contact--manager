import React from "react"; /* IMPORT REACT */
import "./index.scss"; /* IMPORT SCSS FILE */

import womanAvatarImg from "../../assets/imgs/woman.jpg"; /* IMPORT WOM*/
import woman1AvatarImg from "../../assets/imgs/woman (1).jpg"; /* IMPORT WOM*/
import woman2AvatarImg from "../../assets/imgs/woman (2).jpg"; /* IMPORT WOM*/
import woman3AvatarImg from "../../assets/imgs/woman (3).jpg"; /* IMPORT WOM*/
import manAvatarImg from "../../assets/imgs/man.jpg"; /* IMPORT MAN*/
import man1AvatarImg from "../../assets/imgs/man (1).jpg"; /* IMPORT MAN*/
import man2AvatarImg from "../../assets/imgs/man (2).jpg"; /* IMPORT MAN*/
import man3AvatarImg from "../../assets/imgs/man (3).jpg"; /* IMPORT MAN*/

const index = ({
  avatar,
  who,
  name,
  surname,
  phonenumber,
  email,
  userID,
  onRemoveClick,
}) => {
  if (avatar === "womanAvatarImg") {
    avatar = womanAvatarImg;
  } else if (avatar === "woman1AvatarImg") {
    avatar = woman1AvatarImg;
  } else if (avatar === "woman2AvatarImg") {
    avatar = woman2AvatarImg;
  } else if (avatar === "woman3AvatarImg") {
    avatar = woman3AvatarImg;
  } else if (avatar === "manAvatarImg") {
    avatar = manAvatarImg;
  } else if (avatar === "man1AvatarImg") {
    avatar = man1AvatarImg;
  } else if (avatar === "man2AvatarImg") {
    avatar = man2AvatarImg;
  } else if (avatar === "man3AvatarImg") {
    avatar = man3AvatarImg;
  }

  const handleRemoveClick = () => {
    onRemoveClick(userID);
  };

  return (
    <>
      <li className="list-group-item mb-2 d-flex flex-wrap align-items-center bg-transparent rounded-3">
        <div className="list-group-inner me-3">
          <img
            className="user-avatar-img rounded-circle"
            width={70}
            height={70}
            src={avatar}
            alt="contact img"
            id="contact-avatar-img"
          />
        </div>

        <div className="list-group-inner w-50">
          <h3 className="text-muted">
            {name} {surname}
          </h3>
          <div className="w-100">
            <a
              href="tel:+9989988776655"
              className="text-decoration-none d-flex align-items-center"
            >
              {phonenumber}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi me-2 bi-telephone-outbound ms-1"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="list-group-inner">
          <h3 className="text-muted">{who}</h3>
          <a
            href="mailto: elaytpatters@gmail.com"
            className="text-decoration-none d-flex align-items-center"
          >
            {email}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi me-2 bi-envelope-at ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
            </svg>
          </a>
        </div>

        <div className="list-group-inner ms-auto">
          <button
            className="main-contact-remove-btn d-flex align-items-center btn btn-secondary bg-transparent"
            onClick={handleRemoveClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi me-2 bi-person-dash"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
            </svg>
            Удалить
          </button>
        </div>
      </li>
    </>
  );
};

export default index;
