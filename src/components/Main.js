import React from 'react';
import kusto from '../images/kusto.jpg';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserInfo] = React.useState('Жак Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(`${kusto}`);


  React.useEffect(() => {
    api.getProfileInfo()
    .then((res) => {
      console.log(res);
      setUserInfo(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    
  }, [])

  
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__card">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <div className="profile__hover-avatar" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
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