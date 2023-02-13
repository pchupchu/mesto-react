function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  }  

  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick} />
      <button className="element__trash-button" type="button"></button>
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <p className="element__number-of-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;