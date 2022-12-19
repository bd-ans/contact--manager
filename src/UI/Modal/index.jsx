import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import anonymusAvatarImg from "../../assets/imgs/anonymous.jpg";
import womanAvatarImg from "../../assets/imgs/woman.jpg";
import woman1AvatarImg from "../../assets/imgs/woman (1).jpg";
import woman2AvatarImg from "../../assets/imgs/woman (2).jpg";
import woman3AvatarImg from "../../assets/imgs/woman (3).jpg";
import manAvatarImg from "../../assets/imgs/man.jpg";
import man1AvatarImg from "../../assets/imgs/man (1).jpg";
import man2AvatarImg from "../../assets/imgs/man (2).jpg";
import man3AvatarImg from "../../assets/imgs/man (3).jpg";

const index = ({
  onAvatarInputChange,
  onWhoInputChange,
  onNameInputChange,
  onSurNameInputChange,
  onPhonenumberInputChange,
  onEmailInputChange,
  onClick,
}) => {
  const [avatar, setAvatar] = useState("");
  const [who, setWho] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurnName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
    onAvatarInputChange(event.target.value);

    const modalContactAvatar = document.querySelector("#modal-user-img");
    if (event.target.value === "") {
      modalContactAvatar.src = anonymusAvatarImg;
    } else if (event.target.value === "womanAvatarImg") {
      modalContactAvatar.src = womanAvatarImg;
    } else if (event.target.value === "woman1AvatarImg") {
      modalContactAvatar.src = woman1AvatarImg;
    } else if (event.target.value === "woman2AvatarImg") {
      modalContactAvatar.src = woman2AvatarImg;
    } else if (event.target.value === "woman3AvatarImg") {
      modalContactAvatar.src = woman3AvatarImg;
    } else if (event.target.value === "manAvatarImg") {
      modalContactAvatar.src = manAvatarImg;
    } else if (event.target.value === "man1AvatarImg") {
      modalContactAvatar.src = man1AvatarImg;
    } else if (event.target.value === "man2AvatarImg") {
      modalContactAvatar.src = man2AvatarImg;
    } else if (event.target.value === "man3AvatarImg") {
      modalContactAvatar.src = man3AvatarImg;
    }
  };

  const handleWhoChange = (event) => {
    setWho(event.target.value);
    onWhoInputChange(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value.trim());
    onNameInputChange(event.target.value.trim());
  };

  const handleSurNameChange = (event) => {
    setSurnName(event.target.value.trim());
    onSurNameInputChange(event.target.value.trim());
  };

  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value.trim());
    onPhonenumberInputChange(event.target.value.trim());
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
    onEmailInputChange(event.target.value.trim());
  };

  // on handleaddcontact
  const handleAddContact = () => {
    if (
      name.trim().length > 0 &&
      surname.trim().length > 0 &&
      phonenumber.trim().length > 0 &&
      email.trim().length > 0
    ) {
      const contactHiddenSaveBtn = document.querySelector(
        "#modal-contact-hidden-save-btn"
      );
      contactHiddenSaveBtn.click();
    } else {
      console.log("error");
    }

    // CHECK IF INPUTS ARE EMPTY
    const check = {
      name: name.trim().length === 0,
      surname: surname.trim().length === 0,
      phonenumber: phonenumber.trim().length === 0,
      email: email.trim().length === 0,
    };

    if (check.name || check.surname || check.phonenumber || check.email) {
      console.log("error");
    } else {
      console.log("success");
    }

    // RETURN ALL SELECT AND INPUTS TO DEFAULT
    const modaluserimageSelect = document.querySelector("#modal-user-image");
    modaluserimageSelect.value = "";
    const modaluserimage = document.querySelector("#modal-user-img");
    modaluserimage.src = anonymusAvatarImg;
    const modalwhoSelec = document.querySelector("#modal-who-select");
    modalwhoSelec.value = "";

    toast.success('Wow so easy!', {
      position: "top-right",
      autoClose: 1630,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
    onClick();
    setAvatar("");
    setWho("");
    setName("");
    setSurnName("");
    setPhonenumber("");
    setEmail("");
    const contactSaveBtn = document.querySelector("#modal-contact-save-btn");
    contactSaveBtn.removeAttribute("data-bs-dismiss");
  };

  return (
    <>
      {/* TOAST CONTAINER */}
      <ToastContainer
        position="top-right"
        autoClose={1700}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        {/* MODAL DIALOG */}
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content contact-modal-content">
            <div className="modal-header py-2">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Добавить новый контакт
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x-lg modal-close-btn"
                viewBox="0 0 16 16"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            {/* MODAL BODY */}
            <div className="modal-body">
              <form
                action="#"
                id="mainForm"
                onSubmit={() => handleAddContact()}
              >
                {/* MODAL BODY TOP */}
                <div className="modal-body-top-form d-flex flex-wrap align-item-center justify-content-between">
                  <div className="modal-user-img-box">
                    <div className="modal-user-img-box-inner">
                      <img
                        width={55}
                        height={55}
                        className="rounded-circle mx-auto d-block"
                        src={anonymusAvatarImg}
                        alt="modal user img"
                        id="modal-user-img"
                      />{" "}
                      <select
                        className="form-select form-select-sm mt-1 bg-transparent modal-user-image-select text-muted ps-1 pe-1 rounded-2"
                        id="modal-user-image"
                        onChange={handleAvatarChange}
                        required
                      >
                        <option value="">вт картину</option>
                        <option value="woman1AvatarImg">Woman 1</option>
                        <option value="woman2AvatarImg">Woman 2</option>
                        <option value="woman3AvatarImg">Woman 3</option>
                        <option value="manAvatarImg">Man</option>
                        <option value="man1AvatarImg">Man 1</option>
                        <option value="man2AvatarImg">Man 2</option>
                        <option value="man3AvatarImg">Man 3</option>
                      </select>
                    </div>
                  </div>

                  <div className="modal-who-select-box mt-4">
                    <div className="modal-who-select-box-inner">
                      <p className="mb-0 modal-user-who-title">
                        Кем он(она) будет для вас?
                      </p>
                      <select
                        className="form-select form-select-sm mt-1 bg-transparent modal-user-who-select text-muted ps-1 pe-1 rounded-2"
                        id="modal-who-select"
                        onChange={handleWhoChange}
                        required
                      >
                        <option value="">выберите</option>
                        <option value="Член семьи">Член семьи</option>
                        <option value="Друг,(Подруга)">Друг,(Подруга)</option>
                        <option value="Родственник">Родственник</option>
                        <option value="Знакомство">Знакомство</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* MODAL BODY CENTER */}
                <div className="modal-body-center-form mt-1 d-flex flex-wrap align-item-center justify-content-between">
                  <div className="modal-user-name-box">
                    <div className="modal-user-name-box-inner">
                      <p className="mb-0 modal-user-name-title">Имя</p>
                      <input
                        type="text"
                        className="modalsinput bg-transparent text-muted form-control modal-contact-name-input"
                        placeholder="Введите имя"
                        maxLength={15}
                        minLength={1}
                        autoComplete="off"
                        value={name}
                        onChange={handleNameChange}
                        required
                        id="modal-name-input"
                      />
                    </div>
                  </div>

                  <div className="modal-user-name-box">
                    <div className="modal-user-name-box-inner">
                      <p className="mb-0 modal-user-name-title">Фамилия</p>
                      <input
                        type="text"
                        className="modalsinput bg-transparent text-muted form-control modal-contact-name-input"
                        placeholder="Введите имя"
                        maxLength={15}
                        minLength={1}
                        autoComplete="off"
                        value={surname}
                        onChange={handleSurNameChange}
                        required
                        id="modal-surname-input"
                      />
                    </div>
                  </div>
                </div>
                {/* MODAL BODY BOTTOM */}
                <div className="modal-body-center-form mt-1 d-flex flex-wrap align-item-center justify-content-between">
                  <div className="modal-user-phone-number-box">
                    <div className="modal-user-phone-number-box-inner">
                      <p className="mb-0 modal-user-name-title">
                        Номер телефона
                      </p>
                      <input
                        className="modalsinput bg-transparent text-muted form-control modal-contact-name-input"
                        type="tel"
                        placeholder="998339565683"
                        maxLength={12}
                        minLength={12}
                        autoComplete="off"
                        value={phonenumber}
                        onChange={handlePhonenumberChange}
                        required
                        pattern="^[0-9]{12}$"
                        id="modal-phone-number-input"
                      />
                    </div>
                  </div>
                  <div className="modal-user-email-box">
                    <div className="modal-user-email-box-inner">
                      <p className="mb-0 modal-user-name-title">
                        Адрес электронной почты
                      </p>
                      <input
                        className="modalsinput bg-transparent text-muted form-control modal-contact-name-input"
                        type="email"
                        placeholder="example @gmail.com"
                        maxLength={30}
                        minLength={1}
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        autoComplete="off"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        id="modal-email-input"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* MODAL BODY BOTTOM */}
            <div className="modal-footer py-2">
              <button
                type="submit"
                className="btn btn-secondary contact-save-btn d-flex align-items-center bg-transparent"
                form="mainForm"
                id="modal-contact-save-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-cloud-plus me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
                Сохранить
              </button>

              {/* VISUALLY HIDDEN BTN */}
              <button
                className="btn visually-hidden"
                id="modal-contact-hidden-save-btn"
                data-bs-dismiss="modal"
              >
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
