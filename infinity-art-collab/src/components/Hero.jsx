import React from 'react'

const Hero = ({ elem }) => {
  return (
    <div
      className="
        rounded-3xl overflow-hidden
        h-48 w-40               /* Mobile */
        sm:h-60 sm:w-48        /* Tablets */
        md:h-72 md:w-56        /* Medium screens */
        lg:h-80 lg:w-64        /* Laptops */
        xl:h-96 xl:w-72        /* Large screens */
        shadow-md
      "
    >
      <img
        src={elem}
        alt="hero-img"
        className="object-cover h-full w-full"
      />
    </div>
  )
}

export default Hero
