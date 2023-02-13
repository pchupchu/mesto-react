import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

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

        <PopupWithForm title="Обновить аватар" name="add-avatar" btnText="Сохранить" container="popup__avatar-container" classTitle="avatar-title" form="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
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

        <PopupWithForm title="Вы уверены?" name="delete-card" btnText="Да" container="popup__delete-container" classTitle="title-to-delete" form="deliting" />

        <ImagePopup />
     
    </div>
  );
}







export default App;
