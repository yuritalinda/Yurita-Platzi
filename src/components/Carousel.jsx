import React from 'react';
import '../assets/styles/components/Carousel.scss'

const Carousel = ({ children }) => {
  return (
    
    <section className="carousel">
    <div className="carousel__container">
      {/* Averiguar que magia negra es esto de children */}
      {children}
    </div>
    </section>

  )
};

export default Carousel
