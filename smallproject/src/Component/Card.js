import React from 'react'
//Img,Text1
const Card = ({Img,Text1}) => {
    return (
        <>
        <div className="cardOneD">
        <div className="imgContenier">
        <img src={Img}  style={{ width: "60px", height: "60px" }}/>

        <div className="txtd">
        <p><b>{Text1}</b></p>
        </div>
        </div>
        </div>

        </>
    )
}

export default Card