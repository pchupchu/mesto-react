import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      
        <Header />
        <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
        <Footer />

        <PopupWithForm title="Редактировать профиль" name="edit-profile" btnText="Сохранить" form="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label className="form__label">
            <input type="text" className="form__item" id="name" name="name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
            <span className="form__item-error name-error"></span>
          </label>
          <label className="form__label">
            <input type="text" className="form__item" id="about" name="about" placeholder="Ваша профессия" minLength="2" maxLength="200" required />
            <span className="form__item-error about-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm title="Обновить аватар" name="add-avatar" btnText="Сохранить" container="popup__avatar-container" form="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <label className="form__label">
            <input type="url" className="form__item" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
            <span className="form__item-error avatar-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm title="Новое место" name="add-image" btnText="Создать" form="card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label className="form__label">
            <input type="text" className="form__item" id="imagename" name="imagename" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="form__item-error imagename-error"></span>
          </label>
          <label className="form__label">
            <input type="url" className="form__item" id="imageurl" name="imageurl" placeholder="Ссылка на картинку" required />
            <span className="form__item-error imageurl-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="delete-card" btnText="Да" container="popup__delete-container" form="deliting" onClose={closeAllPopups} />
      {/* <div className="popup popup_type_delete-card">
          <div className="popup__container popup__delete-container">
            <button className="popup__close-button" type="button"></button>
            <h2 className="popup__title popup__title-to-delete">Вы уверены?</h2>
            <form className="form form_deliting">
              <button type="submit" className="form__button form__button-to-delete">Да</button>
            </form>
          </div>
        </div> */}

      <template id="template" className="element-template">
      <li className="element">
        <img className="element__image" src="#" alt="описание" />
        <button className="element__trash-button" type="button"></button>
        <div className="element__description">
          <h2 className="element__title"> </h2>
          <div className="element__like-container">
            <button className="element__like-button" type="button"></button>
            <p className="element__number-of-likes">10</p>
          </div>
        </div>
      </li>
    </template>
     
    </div>
  );
}







export default App;
