import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (
    <div className="App">
      
        <Header />
        <Main />
        <Footer />

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
