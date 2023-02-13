//import { useState } from 'react';
import kusto from '../images/kusto.jpg';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function Main() {
  
  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_add-avatar').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-image').classList.add('popup_opened');
  }




  return (
    <main className="content">
    <section className="profile">
      <div className="profile__card">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={kusto} alt="Аватар" />
          <div className="profile__hover-avatar" onClick={handleEditAvatarClick}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          <p className="profile__description">Исследователь океана</p>
        </div>
      </div>
      <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>

    <PopupWithForm title="Редактировать профиль" name="edit-profile" btnText="Сохранить" form="profile">
      <label className="form__label">
        <input type="text" className="form__item" id="name" name="name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
        <span className="form__item-error name-error"></span>
      </label>
      <label className="form__label">
        <input type="text" className="form__item" id="about" name="about" placeholder="Ваша профессия" minLength="2" maxLength="200" required />
        <span className="form__item-error about-error"></span>
      </label>
    </PopupWithForm>
    {/* <div className="popup popup_type_edit-profile">
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="form form_profile" >
          <label className="form__label">
            <input type="text" className="form__item" id="name" name="name" placeholder="Ваше имя" required />
            <span className="form__item-error name-error"></span>
          </label>
          <label className="form__label">
            <input type="text" className="form__item" id="about" name="about" placeholder="Ваша профессия" required />
            <span className="form__item-error about-error"></span>
          </label>
          <button type="submit" className="form__button">Сохранить</button>
        </form>
      </div>
    </div> */}

    <PopupWithForm title="Новое место" name="add-image" btnText="Создать" form="card">
      <label className="form__label">
        <input type="text" className="form__item" id="imagename" name="imagename" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="form__item-error imagename-error"></span>
      </label>
      <label className="form__label">
        <input type="url" className="form__item" id="imageurl" name="imageurl" placeholder="Ссылка на картинку" required />
        <span className="form__item-error imageurl-error"></span>
      </label>
    </PopupWithForm>
  
    {/* <div className="popup popup_type_add-image">
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title">Новое место</h2>
        <form className="form form_card" >
          <label className="form__label">
            <input type="text" className="form__item" id="imagename" name="imagename" placeholder="Название" required />
            <span className="form__item-error imagename-error"></span>
          </label>
          <label className="form__label">
            <input type="url" className="form__item" id="imageurl" name="imageurl" placeholder="Ссылка на картинку" required />
            <span className="form__item-error imageurl-error"></span>
          </label>
          <button type="submit" className="form__button">Создать</button>
        </form>
      </div>
    </div> */}

    <ImagePopup />
    <PopupWithForm title="Вы уверены?" name="delete-card" btnText="Да" container="popup__delete-container" form="deliting" />
    {/* <div className="popup popup_type_delete-card">
      <div className="popup__container popup__delete-container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title popup__title-to-delete">Вы уверены?</h2>
        <form className="form form_deliting">
          <button type="submit" className="form__button form__button-to-delete">Да</button>
        </form>
      </div>
    </div> */}
    
    <PopupWithForm title="Обновить аватар" name="add-avatar" btnText="Сохранить" container="popup__avatar-container" form="avatar">
        <label className="form__label">
          <input type="url" className="form__item" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="form__item-error avatar-error"></span>
        </label>
    </PopupWithForm>
    {/* <div className="popup popup_type_add-avatar">
      <div className="popup__container popup__avatar-container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title popup__avatar-title">Обновить аватар</h2>
        <form className="form form_avatar" >
          <label className="form__label">
            <input type="url" className="form__item" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
            <span className="form__item-error avatar-error"></span>
          </label>
          <button type="submit" className="form__button">Сохранить</button>
        </form>
      </div>
    </div> */}
  </main>
 )
}
 
export default Main;