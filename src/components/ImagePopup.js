function ImagePopup({ card, onClose }) {
  console.log(card)
  return (
    <div className="popup popup_type_image">
    {/* <div className={`popup popup_type_image ${card !== null ? "popup_opened" : ""}`}> */}
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <img className="popup__image-card" id="image" src={card.link} alt={card.name} />
        <h2 className="popup__image-title">{card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;