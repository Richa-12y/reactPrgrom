
import { useState } from 'react';
import FistEx from './component/FistEx';
import Meet from './component/Meet';
import RestaurantDetails from './component/RestaurantDetails';
import Zoom from './component/Zoom';
import 'animate.css';
//cardHeading,cardText1,cardRievText,footerText//



function App ()
{

  const name ="Richa";
  const currDate= new Date().toLocaleDateString();
  const currTime= new Date().toLocaleTimeString();

  const [backgroundColor, setBackgroundColor] = useState('blue')
  const [textColor, setTextColor] = useState('white')
  const [selectethemColor, selecTethemColor] = useState('true')
  const clickHere = () =>
  {
    setBackgroundColor('Black')
    setTextColor('white')
    selecTethemColor(false)
  }
  const clickHere1 = () =>
  {
    setBackgroundColor('yellow')
    setTextColor('black')
    selecTethemColor(false)
  }

  const clickHere2 = () =>
  {
    setBackgroundColor('orange')
    setTextColor('grb(120,100,120)')
    selecTethemColor(false)
  }

  const clickHere3 = () =>
  {
    setBackgroundColor('pink')
    setTextColor('grb(100,120,190)')
    selecTethemColor(false)
  }


  return (

    <div className="App">

      <FistEx />
      <Meet />
      <Zoom />
      <RestaurantDetails cardImg="https://wallpapershome.com/images/wallpapers/beef-3840x2160-steak-food-cooking-grill-vegetables-meal-meat-tomato-408.jpg" cardHeading="URU Brewpark" cardText1="Continental,Pizza,Asian,Desserts
     Cost 600 Rupes For One Min 50 Rupes  Up to 30 min Accepts Onilne Payments Only"  cardRievText="766 votes
     512 reviews" footerText="order Online" />

      <>

        {selectethemColor ? <div className="animate__animated animate__backInDown"><h1>Choose Theme Here</h1>
          <button className="my-button" onClick={clickHere} style={{ background: "black" }}>Black</button>
          <button className="my-button" onClick={clickHere1} style={{ background: "yellow" }}>yellow</button>
          <button className="my-button" onClick={clickHere2} style={{ background: "orange" }}>orange</button>
          <button className="my-button" onClick={clickHere3} style={{ background: "pink" }}>pink</button>

        </div> : <div> <p style={{ color: textColor }}>Hi there</p>
          <button style={{ background: backgroundColor, color: textColor }}>Submit From</button>
        </div>}
      </>

      ReactDom.render (
        <>
            <h1>Hello,My name is {name}</h1>
            <p>Current Date is = {currDate} </p>
            <p> Current Time is ={currTime}</p>
        </>
    

    </div>

  );
}



export default App;