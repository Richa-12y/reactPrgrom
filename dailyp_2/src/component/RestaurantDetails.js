import React from 'react'
//cardHeading,cardText1,cardRievText//

const RestaurantDetails = ({cardImg,cardHeading,cardText1,cardRievText,footerText}
    ) => {
    return (
        <div className="main">
            <div className="cardDesign">
            
            <img src={cardImg} alt="png"/>
            <h1>{cardHeading}</h1>
            <p>{cardText1}</p>
            <p>{cardRievText}</p>
            <p>{footerText}</p>
            <button>4.3</button>
            </div>
        </div>
    )
}

export default RestaurantDetails
