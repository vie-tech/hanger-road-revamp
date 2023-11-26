import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
    <body className="total-container">
    <Hero />
    <Awards />
      <Featured />
      {/* <Recent /> */}
     
      <Location />
    {/*   <Team /> */}
    {/*   <Price /> */}

    </body>
     
    </>
  )
}

export default Home
