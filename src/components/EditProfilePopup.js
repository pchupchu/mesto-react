import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  // Подписка на контекст
  const user = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      btnText="Сохранить"
      form="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        <input
          type="text"
          className="form__item"
          id="name"
          name="name"
          placeholder="Ваше имя"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="form__item-error name-error"></span>
      </label>
      <label className="form__label">
        <input
          type="text"
          className="form__item"
          id="about"
          name="about"
          placeholder="Ваша профессия"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="form__item-error about-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
