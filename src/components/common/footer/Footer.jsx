import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import siteLogo from "../../images/hangarroad.png"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>Get in touch with us today.</p>
            </div>
            <Link to="/contact">
            <button className='btn5'>Contact Us Today</button>
            </Link>
           
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src={siteLogo} alt='' />
              
              {footer.map((val) => (
            <div className='box'>

              
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}

    
            </div>
          </div>

        
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 . Designd By vie-tech.</span>
      </div>
    </>
  )
}

export default Footer
