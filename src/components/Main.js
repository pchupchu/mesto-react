//import { useState } from 'react';
import kusto from '../images/kusto.jpg';
import ImagePopup from './ImagePopup';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__card">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={kusto} alt="Аватар" />
          <div className="profile__hover-avatar" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__description">Исследователь океана</p>
        </div>
      </div>
      <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>
  
    <ImagePopup />

  </main>
 )
}
 
export default Main;