import React from 'react'
import Card from './Card'

const About = () =>
{
    return (
        <div className="aboutcontainer">
            <div className="deginbacpage">
                <div className="logoD">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.airG3G9BH2B_fP8YuGzdMQHaHa&pid=Api&P=0&w=300&h=300" style={{ width: "50px", height: "50px" }} />
                    <h1>ABC Class</h1>
                   
                </div>
                <div>
                    <p><b>You can Learn hera about new techonology</b> </p>
                </div>
                <div className="cardDegin">
                <Card Img= "https://tse4.mm.bing.net/th?id=OIP.ELSJ_Y9zQ24OHvkAubSzywHaHa&pid=Api&P=0&w=300&h=300" Text1="Reduce the Turnaround"/>
                <Card Img= "https://tse1.mm.bing.net/th?id=OIP.U6C9NaVSKOKK3ivMyyV8mAHaGb&pid=Api&P=0&w=178&h=156" Text1="Improved Visibility & Transparency"/>
                <Card Img= "https://tse4.mm.bing.net/th?id=OIP.a1jqpKlsVPxqOWSlmd3dJgHaFj&pid=Api&P=0&w=222&h=168" Text1="Improved Accurancy"/>
                <Card Img= "https://tse4.mm.bing.net/th?id=OIP.T-o7XCr9Pnq3N-r6hee_KAHaHa&pid=Api&P=0&w=300&h=300" Text1="Higher Compliance"/>
                
                </div>
                </div>
        </div>
    )
}


export default About
