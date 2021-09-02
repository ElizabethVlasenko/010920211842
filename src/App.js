import Profile from './Components/Profile/Profile';
import profileImg from './Assets/Profile.png';
import Services from './Components/Services/Services';
import AllReviews from './Components/AllReviews/AllReviews';

import './App.css';

function App() {
  const services = [
    {
      name:'Ручное бронирование',
      number:11,
    },
    {
      name:'Пакетные туры',
      number:3,
    },
    {
      name:'Отели',
      number:1,
    },
  ]

  const sum = services.reduce(function(previousValue, item) {
    return (previousValue+= item.number);
  }, 0);

  return (
    <div className="App">
      <Profile  
        img ={profileImg} 
        name={'Вероника Ростова'}
        about={'Менеджер по продажам'}
        message={'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны'}
      />
      <Services services={services} sum={sum} />
      <AllReviews/>
    </div>
  );
}

export default App;
