import "./index.scss";

import womanAvatarImg from "../../assets/imgs/woman.jpg";
import woman1AvatarImg from "../../assets/imgs/woman (1).jpg";
import woman2AvatarImg from "../../assets/imgs/woman (2).jpg";
import woman3AvatarImg from "../../assets/imgs/woman (3).jpg";

import manAvatarImg from "../../assets/imgs/man.jpg";
import man1AvatarImg from "../../assets/imgs/man (1).jpg";
import man2AvatarImg from "../../assets/imgs/man (2).jpg";
import man3AvatarImg from "../../assets/imgs/man (3).jpg";

const index = ({ onChange, onClick }) => {
  const handleNameChange = (event) => {
    onChange(event.target.value);
  };

  const handleAddContact = () => {
    onClick();
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
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
            <div className="modal-body">
              <form action="#"  id="mainForm" onSubmit={handleAddContact} className="modal-body-form" autoComplete="off" method="POST" name="mainForm" noValidate>
                <div className="modal-body-top-form d-flex flex-wrap align-item-center justify-content-between">
                  <div className="modal-user-img-box">
                    <div className="modal-user-img-box-inner">
                      <img
                        width={52}
                        height={52}
                        className="rounded-circle mx-auto d-block"
                        src={womanAvatarImg}
                        alt="modal user img"
                      />{" "}
                      <select
                        defaultValue={"DEFAULT"}
                        name="modal-user-image"
                        id="modal-user-image"
                        className="form-select form-select-sm mt-1 bg-transparent modal-user-image-select text-muted ps-1 pe-1 rounded-2"
                      >
                        <option value="DEFAULT">Woman</option>
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
                        name="modal-wgo-select"
                        id="modal-wgo-select"
                      >
                        <option value="DEFAULT">Член семьи</option>
                        <option value="1">Друг,(Подруга)</option>
                        <option value="2">Родственник</option>
                        <option value="3">Знакомство</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-body-center-form mt-1 d-flex flex-wrap align-item-center justify-content-between">
                  <div className="modal-user-name-box">
                    <div className="modal-user-name-box-inner">
                      <p className="mb-0 modal-user-name-title">Имя</p>
                      <input
                        type="text"
                        className="bg-transparent text-muted form-control modal-contact-name-input"
                        placeholder="Введите имя"
                        maxLength={15}
                        minLength={1}
                        autoComplete="off"
                        onChange={handleNameChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="modal-user-name-box">
                    <div className="modal-user-name-box-inner">
                      <p className="mb-0 modal-user-name-title">Фамилия</p>
                      <input
                        type="text"
                        className="bg-transparent text-muted form-control modal-contact-name-input"
                        placeholder="Введите имя"
                        maxLength={15}
                        minLength={1}
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-body-center-form mt-1 d-flex flex-wrap align-item-center justify-content-between">
                  <div className="modal-user-phone-number-box">
                    <div className="modal-user-phone-number-box-inner">
                      <p className="mb-0 modal-user-name-title">
                        Номер телефона
                      </p>
                      <input
                        className="bg-transparent text-muted form-control modal-contact-name-input"
                        type="tel"
                        placeholder="+998339565683"
                        maxLength={13}
                        minLength={13}
                        // pattern="^[+]{1}[0-9]{12}$"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-user-email-box">
                    <div className="modal-user-email-box-inner">
                      <p className="mb-0 modal-user-name-title">
                        Адрес электронной почты
                      </p>
                      <input
                        className="bg-transparent text-muted form-control modal-contact-name-input"
                        type="email"
                        placeholder="example @gmail.com"
                        maxLength={30}
                        minLength={1}
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer py-2">
              <button
                type="submit"
                className="btn btn-secondary contact-save-btn d-flex align-items-center bg-transparent"
                // data-bs-dismiss="modal"
                // onClick={handleAddContact}
                form="mainForm"
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
              {/* <button type="button" className="btn btn-primary">
                Understood
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
