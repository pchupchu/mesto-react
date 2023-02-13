import React from 'react';
import kusto from '../images/kusto.jpg';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserInfo] = React.useState('Жак Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(`${kusto}`);
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getProfileInfo()
    .then((res) => {
      setUserInfo(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })  
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
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
        {cards.map((card, i) => {
          return <Card key={i} card={card} />
        })}
      </ul>
    </section>

  </main>
 )
}
 
export default Main;