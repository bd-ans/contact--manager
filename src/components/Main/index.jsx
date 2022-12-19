import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

import Modal from "../../UI/Modal";
import Contact from "../../UI/Contact";
import womanAvatarImg from "../../assets/imgs/woman.jpg";
import woman1AvatarImg from "../../assets/imgs/woman (1).jpg";
import woman2AvatarImg from "../../assets/imgs/woman (2).jpg";
import woman3AvatarImg from "../../assets/imgs/woman (3).jpg";
import manAvatarImg from "../../assets/imgs/man.jpg";

import man1AvatarImg from "../../assets/imgs/man (1).jpg";
import man2AvatarImg from "../../assets/imgs/man (2).jpg";
import man3AvatarImg from "../../assets/imgs/man (3).jpg";

const index = () => {
  // URL CHEKER
  const url = window.location.href;
  if (url.indexOf("http://127.0.0.1:5173") !== -1) {
    window.location.href = "http://127.0.0.1:5173/?#";
  } else if (url.indexOf("https://contact-manager-min.vercel.app/") !== -1) {
    window.location.href = "https://contact-manager-min.vercel.app/?#";
  }
  // MAIN HOOKS
  const [contact, setContact] = useState([]);

  const [avatar, setAcavatar] = useState([]);
  const [who, setWho] = useState("");
  const [name, setTitle] = useState("");
  const [surname, setSurname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  // handle functions
  const handleAvatarChange = (avatar) => {
    setAcavatar(avatar);
  };

  const handleWhoChange = (who) => {
    setWho(who);
  };

  const handleNameChange = (name) => {
    setTitle(name);
  };

  const handleSurNameChange = (surname) => {
    setSurname(surname);
  };

  const handlePhonenumberChange = (phonenumber) => {
    setPhonenumber(phonenumber);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  // addContact function
  const addContact = () => {
    const newContact = {
      id: uuidv4(),
      avatar: avatar,
      who: who,
      name: name,
      surname: surname,
      phonenumber: phonenumber,
      email: email,
    };

    setContact([...contact, newContact]);
  };

  const handleAddContact = () => {
    addContact();
  };

  // removeContact function
  const handleRemoveClick = (userID) => {
    const newContact = contact.filter((user) => user.id !== userID);
    setContact(newContact);
    toast.success("Контакт успешно удален !", {
      position: "top-right",
      autoClose: 1210,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const linkToDirectBtn = () => {
    const addContactBtn = document.querySelector("#addContactBtn");
    addContactBtn.click();
  };

  return (
    <>
      <ToastContainer />
      <div className="main min-vh-100 w-100 mx-auto h-100 d-flex justify-content-center align-items-center">
        <div className="mx-1 mb-5  container-md main__container justify-content-center">
          <h2 className="main-title text-center fw-bold mb-2">
            Менеджер контактов
          </h2>
          {/* MAIN INNER */}
          <div className="main-inner main-container__content d-flex flex-column rounded-2 align-items-center">
            <div className="main-contact-inner w-100">
              <div className="contact-top-side px-3 mt-2 d-flex justify-content-between align-items-center">
                <h3 className="main-contact-title mb-0">
                  Ваши контакты
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi ms-2 bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                  </svg>
                </h3>
                {/* CONTACT ADD BTN */}
                <button
                  className="main-contact-add-btn outline btn d-flex align-items-center btn-secondary bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  id="addContactBtn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi me-2 bi-person-add"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                  </svg>
                  Добавить
                </button>
              </div>
              <hr className="mt-2 mb-0" />
              {/* MODAL */}
              <Modal
                onAvatarInputChange={handleAvatarChange}
                onWhoInputChange={handleWhoChange}
                onNameInputChange={handleNameChange}
                onSurNameInputChange={handleSurNameChange}
                onPhonenumberInputChange={handlePhonenumberChange}
                onEmailInputChange={handleEmailChange}
                onClick={handleAddContact}
              />
              {/* CONTACT */}
              <div className="contact-center-side px-2 ">
                <ul className="list-group list-group-flush pt-2">
                  {contact.length > 0 ? (
                    contact.map((el) => {
                      return (
                        <Contact
                          key={el.id}
                          userID={el.id}
                          avatar={el.avatar}
                          who={el.who}
                          name={el.name}
                          surname={el.surname}
                          phonenumber={el.phonenumber}
                          email={el.email}
                          onRemoveClick={handleRemoveClick}
                        />
                      );
                    })
                  ) : (
                    <p className="text-center text-muted">
                      У вас еще нет контактов, но вы можете их{" "}
                      <a className="link" onClick={linkToDirectBtn}>
                        добавить
                      </a>{" "}
                      !
                    </p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
