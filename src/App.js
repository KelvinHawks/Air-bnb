import React from 'react';
//import ReactDOM  from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App(){
  // const date = new Date()
  // const hours = date.getHours()
  // let timeOfDay

  // if(hours < 12){
  //   timeOfDay = "morning"
  // }else if(hours >= 12 && hours < 17){
  //   timeOfDay = "afternoon"
  // }else{
  //   timeOfDay = "night"
  // }
  
  return (
    <div className='container'>
      <Contacts
        img="./image/lion.jpg"
        name="Kelvin Kimani"
        role="front-end developer"
        paragraph="working"

      />
      <Contacts
        img="./image/image5.jpg"
        name="Alice Muthoni"
        role="back-end developer"
        paragraph="Unemployed"
        />
      <Contacts
        img="./image/images.jpg"
        name="Francis Wairagu"
        role="server-side developer"
        paragraph="working"
      />
      <Contacts
        img="./image/personal-care-products.jpg"
        name="Boston Adrian"
        role="front-end developer"
        paragraph="working"
      />
    </div>
  );
}

export default App;

{/* <div className="image-header">
      <img src={HeaderImg} alt="lion"/>
      <div>
          <h2>Kelvin Kimani</h2>
          <h5>front-end developer</h5>
          <p>Freelancer</p>
      </div>
</div> */}