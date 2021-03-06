import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>  

      <div className='container services__container'>
        <article className='services'>
          <div className='services__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsCheck2All className='services__list-icon' />
              <p>Created a Dynamic Portfolio Website using React, Javascript, CSS & HTML.</p>
            </li>                        
          </ul>
        </article>
        {/* End Of Web Dev ==========================================*/}

        <article className='services'>
          <div className='services__head'>
            <h3>Software Development</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BsCheck2All className='services__list-icon' />
              <p>Created a "Face & Pose Detection" tool using mediapipe & opencv</p>
            </li>            
          </ul>
        </article>
    {/* End Of Software Dev ===================================================*/}
      </div>

    </section>
  )
}

export default Services