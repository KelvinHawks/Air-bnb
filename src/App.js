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
 
  const nums = ["bulbasaur","charmander","squirtle"]
 const sqrt = nums.map(capsLock); 
console.log(sqrt);
  function capsLock(num){
    // for(var i = 0; i<=num.length; i++)
      return `<p>${num}</p>`
  }

  return (
    <div className='container'>
      <Contacts
        img="lion.jpg"
        name="Kelvin Hawks"
        role="front-end developer"
        paragraph="working"
        uploads= {9}
      />
      <Contacts
        img="image5.jpg"
        name="Alice Muthoni"
        role="back-end developer"
        paragraph="Unemployed"
        uploads= {8}
        />
      <Contacts
        img="images.jpg"
        name="Francis charmander"
        role="server-side developer"
        paragraph="working"
        uploads= {7}
      />
      <Contacts
        img="personal-care-products.jpg"
        name="Boston Adrian"
        role="front-end developer"
        paragraph="working"
        uploads= {6}
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