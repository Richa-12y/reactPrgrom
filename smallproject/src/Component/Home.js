import React from 'react'

const Home = () =>
{
    return (
        <div className="Homecontainer">
            <div className="profilecontainer">
                <p style={{ color: 'blue', fontFamily: 'fantasy', marginTop: '10%' }}>William Henry </p>
                <h1 style={{
                    color: 'black', fontWeight: 'bold', margin: '0%',
                    padding: '0%'
                }}>Bill Gates</h1>
                <p >American business <span style={{
                    color: 'blue', fontWeight: 'bold', margin: '0%',
                    padding: '0%'
                }}> magnate </span></p>

            </div>
            <div className="imgDesign">
                <div>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.ilIaDOjE7AshYnN7INUiugHaEK&pid=Api&P=0&w=279&h=158" alt="imae" style={{ width: "400px", height: "300px" }} />
                </div>
                <div className="aboutt">
                    <h1>About Me</h1>
                    <div className="stylep">
                    <p>American business magnate and philanthropist</p>
                    <p> William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of M</p>
                    <p>Born: October 20, 1955 (age 66),<span style={{ color: 'blue' }}> Seattle</span></p>
                    <p> Height: 5'10" (1.77m)
                        Net worth: ),<span style={{ color: 'blue' }}>$148 billion (celebritynetworth.com)</span></p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home
